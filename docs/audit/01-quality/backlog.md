# Backlog

Observations outside this audit's scope. Not fixed here.

| ID | Observation | Source |
| --- | --- | --- |
| B-01 | The English and German learning trees exist in the root locale only; `de` and `sv` mirror only the Swedish tree. | inventory |
| B-02 | `false-friends.mdx` lives outside `learn/` as cross-language content, but every entry is a Swedish word. It behaves like Swedish-learning content. Layer question for an engineer. | P0 |
| B-03 | Closed by D-02: the rude-English traps stay. | P0-24 |
| B-05 | Prev/next pagination shows English labels on `/de/` and `/sv/` ("Nächste Seite: Learning path"). The sidebar itself is localized via `localizeUiLabel` in `src/lib/ui-labels.ts`; pagination is computed before that middleware and keeps the English label. Code change, own task. | reader feedback |
| B-04 | New "good to know" page for Swedish: spelling and form variants (`idag`/`i dag`, `igår`, `imorgon`, `ikväll`) and why both exist. Candidates beyond spelling: spoken forms such as `dom`/`de`, `mej`/`mig`, `sen`/`sedan`, `nån`/`någon`. Placement in the tree is an IA decision. | D-03 |
