# enriccogemha.dev

My personal site and project write-ups, live at
[enriccogemha.dev](https://enriccogemha.dev).

Built with [Astro](https://astro.build) and MDX, and served as static HTML from
Vercel. There are no framework islands. The only client JavaScript is the theme
toggle, the typing headline and the link previews.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # must pass before committing
```

## Where things live

- `src/content/work/`: one Markdown or MDX file per project.
  `src/content.config.ts` validates the frontmatter, so a missing field fails
  the build instead of rendering blank.
- `src/components/`: the pieces the pages are built from, including the logos
  and the preview cards.
- `src/styles/global.css`: the design tokens. Each text colour notes its
  measured contrast ratio, checked against WCAG AA.

## Rules I hold this to

Every number on the site is one I counted, from a repository or a public page,
and the page says where. If a reader can't check a figure, it doesn't go up.
Projects carry a status, and `live` means a stranger can use it today.

## License

The code is [AGPL-3.0](LICENSE). The logos, badges and the name wordmark belong
to their owners and aren't covered by it.
