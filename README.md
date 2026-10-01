# enriccogemha.dev

My personal site and project write-ups, live at
[enriccogemha.dev](https://enriccogemha.dev).

Built with [Astro](https://astro.build) and MDX, and served as static HTML from
Vercel. There are no framework islands. The only client JavaScript is the theme
toggle, the typing headline and the preview cards.

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
- `src/components/`: the pieces the pages are built from, including the logos.
- `src/styles/global.css`: the design tokens. Each text colour notes its
  measured contrast ratio, checked against WCAG AA.

## Preview cards

Links to projects, certifications, schools and games open a small card on hover
or keyboard focus. A project card is built from the same content file as its
page: either a summary or the opening of the write-up. A certification card
lists what the exam covers, from the issuer's own guide. A school or game card
on the About page says what that school or game is known for, like Brown having
no required core classes or Magic starting the trading card game genre. On a
phone a tap just follows the link, and without JavaScript every link still
works.

`PreviewCard.astro` holds the card and the script that opens and places it.
`ProjectPreviews.astro` builds the project cards, `Certifications.astro` the
certification ones, and `src/pages/about.astro` the school and game ones. The
comments above its `schools` and `games` arrays list the source for every fact
on those cards.

## Rules I hold this to

Every number on the site is one I counted, from a repository or a public page,
and the page says where. If a reader can't check a figure, it doesn't go up.
Projects carry a status, and `live` means a stranger can use it today.

## License

The code is [AGPL-3.0](LICENSE). The logos, badges and the name wordmark belong
to their owners and aren't covered by it.
