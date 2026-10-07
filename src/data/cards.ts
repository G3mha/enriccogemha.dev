/**
 * The facts behind the preview cards for schools, games and companies that
 * the site's text names. LogoCards renders them; a page opens one by giving a
 * link data-preview="<kind>-<id>", such as "school-brown".
 *
 * Names stay as they are in both languages. The place, the year line and the
 * line about each one are written in both, keyed by language.
 */
import type { Locale } from '../i18n';

type Localized = Record<Locale, string>;

export interface Card {
	id: string;
	logo: { src: string; width: number; height: number; chip: 'light' | 'dark' };
	name: string;
	place: Localized;
	year: Localized;
	about: Localized;
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
		place: { en: 'São Paulo, Brazil', 'pt-BR': 'São Paulo, Brasil' },
		year: { en: 'Founded 1987', 'pt-BR': 'Fundado em 1987' },
		about: {
			en: 'Classes are built around real problems. Engineering students learn through hands-on projects and spend a full term building something for an outside partner.',
			'pt-BR': 'As aulas giram em torno de problemas reais. Os alunos de engenharia aprendem com projetos práticos e passam um semestre inteiro construindo algo para um parceiro de fora.',
		},
	},
	{
		id: 'stanford',
		logo: { src: '/assets/school-stanford.png', width: 150, height: 150, chip: 'light' },
		name: 'Stanford University',
		place: { en: 'Stanford, California', 'pt-BR': 'Stanford, Califórnia' },
		year: { en: 'Founded 1885', 'pt-BR': 'Fundada em 1885' },
		about: {
			en: 'Recombinant DNA, the tool that launched the biotech industry, was co-developed at Stanford. So was PageRank, the grad-student algorithm that started Google.',
			'pt-BR': 'O DNA recombinante, a técnica que deu origem à indústria de biotecnologia, foi desenvolvido em parte em Stanford. O PageRank também, o algoritmo de dois alunos de pós-graduação que deu início ao Google.',
		},
	},
	{
		id: 'olin',
		logo: { src: '/assets/school-olin.svg', width: 330, height: 65, chip: 'light' },
		name: 'Olin College of Engineering',
		place: { en: 'Needham, Massachusetts', 'pt-BR': 'Needham, Massachusetts' },
		year: { en: 'Chartered 1997', 'pt-BR': 'Fundada em 1997' },
		about: {
			en: 'Started from scratch to change how engineers are taught. It has no departments, and students design and build real projects from their first semester.',
			'pt-BR': 'Criada do zero para mudar a forma de ensinar engenharia. Não tem departamentos, e os alunos projetam e constroem projetos reais desde o primeiro semestre.',
		},
	},
	{
		id: 'babson',
		logo: { src: '/assets/school-babson.svg', width: 299, height: 190, chip: 'light' },
		name: 'Babson College',
		place: { en: 'Wellesley, Massachusetts', 'pt-BR': 'Wellesley, Massachusetts' },
		year: { en: 'Founded 1919', 'pt-BR': 'Fundada em 1919' },
		about: {
			en: 'Every first-year student takes a yearlong course where they start and run a real business with classmates. All the profits go to charity.',
			'pt-BR': 'Todo calouro faz um curso de um ano em que abre e toca um negócio de verdade com os colegas. Todo o lucro vai para caridade.',
		},
	},
	{
		id: 'brown',
		logo: { src: '/assets/school-brown.png', width: 180, height: 180, chip: 'light' },
		name: 'Brown University',
		place: { en: 'Providence, Rhode Island', 'pt-BR': 'Providence, Rhode Island' },
		year: { en: 'Founded 1764', 'pt-BR': 'Fundada em 1764' },
		about: {
			en: 'Undergrads plan their own studies with no required core classes. There are no GPAs or class rankings, and any course can be taken satisfactory/no credit.',
			'pt-BR': 'Os alunos de graduação montam o próprio currículo, sem disciplinas obrigatórias. Não há média geral nem ranking de turma, e qualquer matéria pode ser cursada como aprovado/sem crédito.',
		},
	},
	{
		id: 'harvard',
		logo: { src: '/assets/school-harvard.png', width: 192, height: 192, chip: 'light' },
		name: 'Harvard University',
		place: { en: 'Cambridge, Massachusetts', 'pt-BR': 'Cambridge, Massachusetts' },
		year: { en: 'Founded 1636', 'pt-BR': 'Fundada em 1636' },
		about: {
			en: 'Its law school pioneered the case method of teaching. Its business school borrowed it and says its faculty write most of the cases business schools use worldwide.',
			'pt-BR': 'Sua faculdade de direito foi pioneira no método de ensino por casos. A escola de negócios adotou o método e diz que seus professores escrevem a maioria dos casos usados por escolas de negócios no mundo todo.',
		},
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
		place: { en: 'Wizards of the Coast', 'pt-BR': 'Wizards of the Coast' },
		year: { en: 'First released 1993', 'pt-BR': 'Lançado em 1993' },
		about: {
			en: 'It started the trading card game genre, where you build a deck from cards you collect and trade. It joined the National Toy Hall of Fame in 2019.',
			'pt-BR': 'Deu origem ao gênero dos jogos de cartas colecionáveis, em que você monta um baralho com cartas que coleciona e troca. Entrou para o National Toy Hall of Fame em 2019.',
		},
	},
	{
		id: 'gba',
		logo: { src: '/assets/game-gba.gif', width: 250, height: 44, chip: 'light' },
		name: 'Game Boy Advance',
		place: { en: 'Nintendo', 'pt-BR': 'Nintendo' },
		year: { en: 'Released 2001', 'pt-BR': 'Lançado em 2001' },
		about: {
			en: 'It sold 81.51 million handhelds and 377.42 million games worldwide. It also plays Game Boy and Game Boy Color cartridges.',
			'pt-BR': 'Vendeu 81,51 milhões de consoles e 377,42 milhões de jogos no mundo todo. Também roda cartuchos de Game Boy e Game Boy Color.',
		},
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
		place: { en: 'San Francisco, California', 'pt-BR': 'São Francisco, Califórnia' },
		year: { en: 'Founded 2015', 'pt-BR': 'Fundada em 2015' },
		about: {
			en: 'A venture firm named for network effects. Its Network Effects Manual maps the different ways a product gets more valuable as more people use it.',
			'pt-BR': 'Um fundo de venture capital batizado em homenagem aos efeitos de rede. Seu Network Effects Manual mapeia as formas como um produto fica mais valioso conforme mais gente o usa.',
		},
	},
];

export const cards: Record<string, Card> = Object.fromEntries([
	...schools.map((c) => [`school-${c.id}`, c] as const),
	...games.map((c) => [`game-${c.id}`, c] as const),
	...companies.map((c) => [`org-${c.id}`, c] as const),
]);
