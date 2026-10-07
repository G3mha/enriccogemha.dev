/**
 * Draws the link preview cards, the image WhatsApp, iMessage, Slack, LinkedIn
 * and others show when someone shares a link to the site, and saves them as
 * src/assets/og-card.jpg (English) and og-card.<language>.jpg for each other
 * language. Run it with `npm run og-card` after changing anything the cards
 * show: the headline, the portrait, the name or the fonts.
 *
 * Each card is a 1200 x 630 page laid out like the homepage's first screen:
 * the name, "I build things." in that language with the homepage headline's
 * caret, and the portrait. It uses the site's own fonts, colours and
 * wordmark, so it looks like the site. Headless Chrome screenshots it, and
 * sips (built into macOS) saves it as a JPEG, which keeps it far below
 * WhatsApp's 600 KB limit for previews.
 *
 * Chrome is looked for at its usual macOS path. Set CHROME_PATH to use another.
 */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const require = createRequire(import.meta.url);
const chrome = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const WIDTH = 1200;
const HEIGHT = 630;

// One card per language. The headline is the first phrase of the homepage
// headline in that language (src/i18n/ui.ts), broken before the typed word.
// The other leads are wider than "I build", so their cards set the headline
// a little smaller to keep the same margins.
const cards = [
	{ lang: 'en', file: 'og-card.jpg', lead: 'I build', typed: 'things.', size: 124 },
	{ lang: 'pt-BR', file: 'og-card.pt-BR.jpg', lead: 'Eu construo', typed: 'coisas.', size: 104 },
	{ lang: 'es-ES', file: 'og-card.es-ES.jpg', lead: 'Construyo', typed: 'cosas.', size: 116 },
	{ lang: 'sv', file: 'og-card.sv.jpg', lead: 'Jag bygger', typed: 'saker.', size: 108 },
];

const dataUrl = (file, type) => `data:${type};base64,${readFileSync(file).toString('base64')}`;
const font = (pkg, file) => dataUrl(require.resolve(`${pkg}/files/${file}`), 'font/woff2');

// The same drawing of the name as the site's header, so there's one source for it.
const wordmark = readFileSync(join(root, 'src/components/NameWordmark.astro'), 'utf8')
	.match(/<svg[\s\S]*<\/svg>/)[0]
	.replace(/ class="[^"]*"/, ' class="name"');

const portrait = dataUrl(join(root, 'public/assets/portrait.jpg'), 'image/jpeg');

const html = ({ lang, lead, typed, size }) => `<!doctype html>
<html lang="${lang}">
<meta charset="utf-8" />
<style>
	@font-face {
		font-family: 'Fraunces Variable';
		font-weight: 100 900;
		src: url(${font('@fontsource-variable/fraunces', 'fraunces-latin-opsz-normal.woff2')}) format('woff2');
	}

	@font-face {
		font-family: 'Public Sans Variable';
		font-weight: 100 900;
		src: url(${font('@fontsource-variable/public-sans', 'public-sans-latin-wght-normal.woff2')}) format('woff2');
	}

	/* The light theme's tokens from src/styles/global.css. */
	:root {
		--paper: #fbfaf7;
		--ink: #1b1917;
		--accent: #9c4a12;
		--rule: #e3ddd2;
	}

	* {
		box-sizing: border-box;
		margin: 0;
	}

	html,
	body {
		width: ${WIDTH}px;
		height: ${HEIGHT}px;
		overflow: hidden;
		background: var(--paper);
	}

	body {
		display: grid;
		grid-template-columns: 1fr 440px;
		-webkit-font-smoothing: antialiased;
	}

	/* Chat apps crop the card a little differently, so everything sits at
	   least 80px in from the edges. */
	.text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 84px 64px 80px 88px;
	}

	.name {
		display: block;
		width: 430px;
		height: auto;
		color: var(--ink);
	}

	/* Set like the homepage headline: the site's h1 settings, and the caret
	   that headline types behind. */
	h1 {
		font-family: 'Fraunces Variable', serif;
		font-weight: 600;
		font-variation-settings: 'opsz' 40;
		font-size: ${size}px;
		line-height: 1;
		letter-spacing: -0.015em;
		color: var(--ink);
	}

	.typed {
		padding-right: 0.11em;
		background: linear-gradient(var(--accent), var(--accent)) no-repeat right 0 top 0.22em / 0.06em 0.8em;
	}

	.domain {
		font-family: 'Public Sans Variable', sans-serif;
		font-weight: 600;
		font-size: 30px;
		color: var(--accent);
	}

	.photo {
		position: relative;
		overflow: hidden;
		border-left: 1px solid var(--rule);
	}

	/* Zoomed past the photo's own framing so the face fills more of the card
	   at the size a chat shows it. */
	.photo img {
		position: absolute;
		width: 640px;
		left: -50px;
		top: -4px;
	}
</style>
<body>
	<div class="text">
		${wordmark}
		<h1>${lead}<br /><span class="typed">${typed}</span></h1>
		<p class="domain">enriccogemha.dev</p>
	</div>
	<div class="photo">
		<img src="${portrait}" alt="" />
	</div>
</body>
</html>
`;

const work = mkdtempSync(join(tmpdir(), 'og-card-'));
try {
	for (const card of cards) {
		const output = join(root, 'src/assets', card.file);
		const page = join(work, `${card.lang}.html`);
		const png = join(work, `${card.lang}.png`);
		writeFileSync(page, html(card));
		execFileSync(chrome, [
			'--headless',
			'--disable-gpu',
			'--hide-scrollbars',
			'--force-device-scale-factor=1',
			`--window-size=${WIDTH},${HEIGHT}`,
			'--virtual-time-budget=2000',
			`--screenshot=${png}`,
			pathToFileURL(page).href,
		], { stdio: 'ignore' });
		execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '88', png, '--out', output], { stdio: 'ignore' });
		const size = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', output], { encoding: 'utf8' });
		const [w, h] = size.match(/\d+(?=\s*$)/gm).map(Number);
		if (w !== WIDTH || h !== HEIGHT) throw new Error(`Expected ${WIDTH}x${HEIGHT}, got ${w}x${h}`);
		console.log(`Saved src/assets/${card.file} (${w}x${h}, ${Math.round(statSync(output).size / 1024)} KB)`);
	}
} finally {
	rmSync(work, { recursive: true, force: true });
}
