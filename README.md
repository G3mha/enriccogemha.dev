# enriccogemha.dev

My personal site. Astro, no framework islands, no client JavaScript beyond a
theme toggle.

Live at [enriccogemha.dev](https://enriccogemha.dev).

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # must pass before committing
```

## Layout

- `src/content/work/` — one Markdown file per project. Frontmatter is validated
  by a zod schema in `src/content.config.ts`, so a missing field fails the build
  rather than rendering blank.
- `src/components/` — small and unexported anywhere else.
- `src/styles/global.css` — the whole design system. Colour, type and spacing
  tokens live at the top; every text and background pair is checked against
  WCAG AA and the measured ratio is written next to the value.

## Rules I hold this to

Every number on this site is one I counted, from a repository or a public page,
and the page says where. If a figure cannot be checked by a reader, it does not
go up. Projects carry a status, and `live` means a stranger can use it today.
