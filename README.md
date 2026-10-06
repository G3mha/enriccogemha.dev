# enriccogemha.dev

My personal site and project write-ups, live at
[enriccogemha.dev](https://enriccogemha.dev).

Built with [Astro](https://astro.build) and MDX, and served as static HTML from
Vercel. There are no framework islands. The only client JavaScript is the theme
toggle, the typing headline, the preview cards and the hidden Moons.

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

## Link previews

When a link to any page is shared in WhatsApp, iMessage, Slack or LinkedIn,
the preview shows `src/assets/og-card.jpg`. It's laid out like the top of the
homepage: the name, the "I build iOS apps." headline with its caret, and the
portrait. `scripts/og-card.mjs` draws it with the site's own fonts, colours
and wordmark, so after changing any of those, draw it again:

```bash
npm run og-card
```

The script needs Google Chrome, and it saves the JPEG with `sips`, which comes
with macOS. The card is 1200 × 630, the size Facebook recommends, and about
125 KB. WhatsApp asks for preview images under 600 KB.

Facebook caches a preview image by its URL, so a card redrawn at the same URL
could keep showing the old one. That's why the card lives in `src/assets/`
instead of `public/`: the build names it after a hash of its contents, so
every redrawn card gets a new URL.

## Hidden Moons

Seven Moons, a nod to Super Mario Odyssey, are hidden around the site. You find
them by switching the theme, watching the headline type every ending, looking up
every school and both games, opening the capstone report, landing on the 404
page and visiting every project page. With reduced motion the headline doesn't
type, so half a minute in a row with it on screen counts instead. Switching to
another tab starts that half minute over. Finding one dims the screen while a
Power Moon jumps up above "You got a Moon!", with a short chime. It goes away
after about three seconds, or sooner on a click or Esc. Esc closes only the
moment, so a preview card or the Moons list under it stays open. A counter shows
up in the footer after the first one, and it opens a list with hints and a
button to turn the sound off.

The chime isn't the game's jingle. Nintendo doesn't publish that as a file, so
the site plays its own: a rising C major arpeggio and a ringing chord, built
with Web Audio. Browsers only allow sound after a click, tap or key press on
the page, so a Moon found on a page load or a hover can arrive quietly. If the
browser holds the sound back for more than a second, the chime is dropped rather
than played late. Only the newest Moon chimes, and only in a tab that's showing,
so two Moons found before the first click don't play together later. Turning the
sound off also cuts a chime that's still ringing.

`Moons.astro` holds all of it. It only listens to things the site already does,
plus two markers, one on the 404 page and one on each project page. Progress
stays in the visitor's browser, and the privacy page says what's stored.

## Rules I hold this to

Every number on the site comes from a repository, a public page or my own
records, and most pages link to where theirs come from. Some can't be checked
from outside, like counts from OpenGiving's and ZeroPunch's private repositories
and the RoboCup club's $40,000 budget. Projects carry a status, and `live` means
a stranger can use it today.

## License

The code is [AGPL-3.0](LICENSE). The logos, badges, the name wordmark and
Nintendo's Power Moon art belong to their owners and aren't covered by it.
