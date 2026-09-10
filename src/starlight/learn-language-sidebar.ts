import { defineRouteMiddleware, type StarlightRouteData } from '@astrojs/starlight/route-data';
import { belongsToOtherLearnLanguage, getLearnLanguageFromPathname } from '~/lib/learn-languages';
import { localizeUiLabel } from '~/lib/ui-labels';

type SidebarEntry = StarlightRouteData['sidebar'][number];
type SidebarLink = Extract<SidebarEntry, { type: 'link' }>;
type Pagination = StarlightRouteData['pagination'];

/**
 * Keeps one learning-language tree. Entries outside `/learn/` are shared by
 * every language and always survive; groups left without entries are dropped
 * so an inactive language never shows as an empty heading.
 */
function scopeToLearnLanguage(entries: SidebarEntry[], languageId: string): SidebarEntry[] {
	return entries.flatMap((entry): SidebarEntry[] => {
		if (entry.type === 'link') {
			return belongsToOtherLearnLanguage(entry.href, languageId) ? [] : [entry];
		}

		const scopedEntries = scopeToLearnLanguage(entry.entries, languageId);
		return scopedEntries.length > 0 ? [{ ...entry, entries: scopedEntries }] : [];
	});
}

function localizeSidebarLabels(entries: SidebarEntry[], locale: string | undefined): SidebarEntry[] {
	return entries.map((entry) => {
		const label = localizeUiLabel(entry.label, locale);

		return entry.type === 'link'
			? { ...entry, label }
			: { ...entry, label, entries: localizeSidebarLabels(entry.entries, locale) };
	});
}

function flattenLinks(entries: SidebarEntry[]): SidebarLink[] {
	return entries.flatMap((entry) =>
		entry.type === 'link' ? [entry] : flattenLinks(entry.entries),
	);
}

/**
 * Pagination is computed before route middleware runs, so prev/next can walk
 * into another learning language. Recompute only the ends that point out of
 * the scoped tree, leaving in-tree links and frontmatter overrides untouched.
 */
function scopePagination(
	pagination: Pagination,
	sidebar: SidebarEntry[],
	languageId: string,
): Pagination {
	const leavesTree = (link: SidebarLink | undefined) =>
		link !== undefined && belongsToOtherLearnLanguage(link.href, languageId);

	if (!leavesTree(pagination.prev) && !leavesTree(pagination.next)) return pagination;

	const links = flattenLinks(sidebar);
	const currentIndex = links.findIndex((link) => link.isCurrent);

	return {
		prev: leavesTree(pagination.prev) ? links[currentIndex - 1] : pagination.prev,
		next: leavesTree(pagination.next)
			? currentIndex > -1
				? links[currentIndex + 1]
				: undefined
			: pagination.next,
	};
}

export const onRequest = defineRouteMiddleware((context) => {
	const { starlightRoute } = context.locals;
	const { locale } = starlightRoute;
	const languageId = getLearnLanguageFromPathname(context.url.pathname);

	starlightRoute.sidebar = localizeSidebarLabels(
		scopeToLearnLanguage(starlightRoute.sidebar, languageId),
		locale,
	);
	starlightRoute.pagination = scopePagination(
		starlightRoute.pagination,
		starlightRoute.sidebar,
		languageId,
	);
});
