/**
 * The facts behind the preview cards for schools, games and companies that
 * the site's text names. LogoCards renders them; a page opens one by giving a
 * link data-preview="<kind>-<id>", such as "school-brown".
 */
export interface Card {
	id: string;
	logo: { src: string; width: number; height: number; chip: 'light' | 'dark' };
	name: string;
	place: string;
	year: string;
	about: string;
}

// Each card shows the owner's logo, unchanged: the file its own site serves
// (Stanford's identity site, Olin's site header, Babson's brand guidelines,
// Harvard's and Brown's site icons, magic.wizards.com's header, Nintendo
// Japan's GBA page, and NFX's header logo from nfx.com/images/dark, drawn in
// pale blue for that site's dark navy). Insper's is the red wordmark as
// seeklogo.com publishes it, in #c5242d; insper.edu.br's own header uses a
// black version, and its pages don't show that exact red. Babson's sample is
// framed to its drawing, and Olin's inline SVG got a viewBox spelled for use
// as a file. The logos are their owners' trademarks. Each sits on a chip that
// suits it in both themes: white for most, and near-black for Magic and NFX,
// whose logos are drawn for dark backgrounds.
//
// Preview cards for the schools the text links to. Each line says what the
// school is known for, from its own pages: Insper's teaching-method and
// engineering pages and pfe.insper.edu.br (the Capstone);
// facts.stanford.edu/research/technology-inventions; olin.edu/about and
// olin.edu/about/history/founding-precepts; babson.edu's page for its
// first-year course, Foundations of Management and Entrepreneurship; the
// Open Curriculum pages on college.brown.edu; and Harvard Law School's and
// Harvard Business School's pages on the case method (the share of cases
// written by HBS faculty is HBS's own figure, so the line credits it). Places
// and years are from insper.edu.br/pt/quem-somos/faq-insper,
// stanford.edu/about, olin.edu/about, babson.edu's history page,
// brown.edu/about/facts and harvard.edu/about.
const schools: Card[] = [
	{
		id: 'insper',
		logo: { src: '/assets/school-insper.svg', width: 2843, height: 1000, chip: 'light' },
		name: 'Insper',
		place: 'São Paulo, Brazil',
		year: 'Founded 1987',
		about: 'Classes are built around real problems. Engineering students learn through hands-on projects and spend a full term building something for an outside partner.',
	},
	{
		id: 'stanford',
		logo: { src: '/assets/school-stanford.png', width: 150, height: 150, chip: 'light' },
		name: 'Stanford University',
		place: 'Stanford, California',
		year: 'Founded 1885',
		about: 'Recombinant DNA, the tool that launched the biotech industry, was co-developed at Stanford. So was PageRank, the grad-student algorithm that started Google.',
	},
	{
		id: 'olin',
		logo: { src: '/assets/school-olin.svg', width: 330, height: 65, chip: 'light' },
		name: 'Olin College of Engineering',
		place: 'Needham, Massachusetts',
		year: 'Chartered 1997',
		about: 'Started from scratch to change how engineers are taught. It has no departments, and students design and build real projects from their first semester.',
	},
	{
		id: 'babson',
		logo: { src: '/assets/school-babson.svg', width: 299, height: 190, chip: 'light' },
		name: 'Babson College',
		place: 'Wellesley, Massachusetts',
		year: 'Founded 1919',
		about: 'Every first-year student takes a yearlong course where they start and run a real business with classmates. All the profits go to charity.',
	},
	{
		id: 'brown',
		logo: { src: '/assets/school-brown.png', width: 180, height: 180, chip: 'light' },
		name: 'Brown University',
		place: 'Providence, Rhode Island',
		year: 'Founded 1764',
		about: 'Undergrads plan their own studies with no required core classes. There are no GPAs or class rankings, and any course can be taken satisfactory/no credit.',
	},
	{
		id: 'harvard',
		logo: { src: '/assets/school-harvard.png', width: 192, height: 192, chip: 'light' },
		name: 'Harvard University',
		place: 'Cambridge, Massachusetts',
		year: 'Founded 1636',
		about: 'Its law school pioneered the case method of teaching. Its business school borrowed it and says its faculty write most of the cases business schools use worldwide.',
	},
];

// And for the games in Elsewhere. Magic: Hasbro calls it the world's first
// trading card game (investor.hasbro.com/magic-gathering), Guinness World
// Records its "first modern trading card game", and the Strong National
// Museum of Play lists it as inducted into the National Toy Hall of Fame in
// 2019 (museumofplay.org). The GBA:
// Nintendo's sales totals for the whole Game Boy Advance family
// (nintendo.co.jp/ir/en/finance/hard_soft, final since it's discontinued) and
// its Japanese product page, which says it plays Game Boy and Game Boy Color
// software. Makers and years are from magic.wizards.com's footer and
// Nintendo's corporate history.
const games: Card[] = [
	{
		id: 'magic',
		logo: { src: '/assets/game-magic.png', width: 257, height: 86, chip: 'dark' },
		name: 'Magic: The Gathering',
		place: 'Wizards of the Coast',
		year: 'First released 1993',
		about: 'It started the trading card game genre, where you build a deck from cards you collect and trade. It joined the National Toy Hall of Fame in 2019.',
	},
	{
		id: 'gba',
		logo: { src: '/assets/game-gba.gif', width: 250, height: 44, chip: 'light' },
		name: 'Game Boy Advance',
		place: 'Nintendo',
		year: 'Released 2001',
		about: 'It sold 81.51 million handhelds and 377.42 million games worldwide. It also plays Game Boy and Game Boy Color cartridges.',
	},
];

// And for companies. NFX: nfx.com/about says "NFX stands for network
// effects", and its Network Effects Manual (nfx.com/post/network-effects-manual)
// maps the types. The homepage's structured data gives San Francisco as its
// headquarters and 2015 as its founding year, which its September 2026 post
// on self-funding confirms ("In 2015, we started NFX").
const companies: Card[] = [
	{
		id: 'nfx',
		logo: { src: '/assets/org-nfx.svg', width: 201, height: 123, chip: 'dark' },
		name: 'NFX',
		place: 'San Francisco, California',
		year: 'Founded 2015',
		about: 'A venture firm named for network effects. Its Network Effects Manual maps the different ways a product gets more valuable as more people use it.',
	},
];

export const cards: Record<string, Card> = Object.fromEntries([
	...schools.map((c) => [`school-${c.id}`, c] as const),
	...games.map((c) => [`game-${c.id}`, c] as const),
	...companies.map((c) => [`org-${c.id}`, c] as const),
]);
