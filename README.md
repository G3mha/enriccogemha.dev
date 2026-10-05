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

## Shipping

Changes go through pull requests with auto-merge on. `main` requires three
checks to pass: Vercel's preview build, Vercel Preview Comments and
GitGuardian's secret scan. When they do, GitHub merges the pull request and
Vercel deploys `main` to production.

## Where things live

- `src/content/work/`: one Markdown or MDX file per project.
  `src/content.config.ts` validates the frontmatter, so a missing title,
  summary, status, period or stack fails the build instead of rendering blank.
  `role` is optional. A project leaves it out when its summary and write-up
  already say what I did, and then its role line and My part row don't render.
  Its `links` become the row of links on its page, and on its homepage entry if
  it's featured, like ZeroPunch's App Store and daerogroup.com links. A link to
  a project's own website shows its domain as the label, like opengiving.us or
  trophyrooms.org.
- `src/components/`: the pieces the pages are built from, including the logos.
- `src/styles/global.css`: the design tokens. Each text colour notes its
  measured contrast ratio, checked against WCAG AA.

## Preview cards

Links to projects, certifications, schools, games and companies open a small
card on hover or keyboard focus. A project card is built from the same content
file as its page: either a summary or the opening of the write-up, like Trophy
Rooms' card, which says what the app lets you do. A
certification card lists what the exam covers, from the issuer's own guide. A
school, game or company card says what that one is known for, like Brown having
no required core classes or Magic starting the trading card game genre. On a
phone a tap just follows the link, and without JavaScript every link still
works.

`PreviewCard.astro` holds the card and the script that opens and places it.
`ProjectPreviews.astro` builds the project cards, `Certifications.astro` the
certification ones, and `LogoCards.astro` the school, game and company ones from
`src/data/cards.ts`. The comments in that file list the source for every fact
on those cards.

## Rules I hold this to

Every number on the site comes from a repository, a public page or my own
records, and most pages link to where theirs come from. Some can't be checked
from outside, like counts from OpenGiving's and ZeroPunch's private repositories
and the RoboCup club's $40,000 budget. Projects carry a status, and `live` means
a stranger can use it today.

## License

The code is [AGPL-3.0](LICENSE). The logos, badges and the name wordmark belong
to their owners and aren't covered by it.
