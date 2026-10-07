/**
 * Every short string the interface shows, in both languages: labels, headings,
 * the headline's phrases, the Moons' names and hints. Running text lives with
 * its page in src/copy/, and the project write-ups in src/content/work/.
 *
 * Names stay as they are in both languages: schools, companies, products,
 * technologies, exam codes. Only the words around them change.
 *
 * Both languages fill in the same shape, so a string added to one and not the
 * other fails the build.
 */
import type { Locale } from './index';

export interface Strings {
	/** The page's language name, as it calls itself. */
	languageName: string;
	siteName: string;
	skipToContent: string;
	nav: { work: string; about: string };
	footer: { privacy: string };
	theme: { toDark: string; toLight: string };
	language: { label: string; current: string };
	/** Default meta descriptions for pages without their own. */
	description: { search: string; preview: string; cardAlt: string };
	headline: {
		/** The words before the typed slot, with its trailing space. */
		lead: string;
		/** Same order and count as every other language's; English doubles as the key. */
		phrases: string[];
		/** Between the last two phrases when the list is read as a sentence. */
		and: string;
		/** The Oxford comma before `and`: ", " in English, " " in Portuguese. */
		beforeAnd: string;
		pause: string;
		play: string;
		theHeadline: string;
	};
	status: { live: string; paused: string; unreleased: string; archived: string };
	builtWith: string;
	home: {
		install: string;
		certifications: string;
		work: string;
		earlier: string;
		photoAlt: string;
		/** The one-line description under each app in Things you can install. */
		apps: Record<'opengiving' | 'trophy-rooms' | 'pacbag' | 'zeropunch', string>;
	};
	about: {
		title: string;
		description: string;
		heading: string;
		how: string;
		now: string;
		tools: string;
		certifications: string;
		elsewhere: string;
		portraitAlt: string;
	};
	privacy: { title: string; description: string; heading: string; forgetMoons: string };
	notFound: { title: string; description: string; heading: string };
	project: { back: string; when: string; myPart: string; titleSuffix: string };
	certs: {
		/** "Verify on" before the verifier's name. */
		verifyOn: string;
		/** "Exam domains from {owner} {code} {guide}." */
		domainsFrom: (owner: string, code: string, guide: string) => string;
	};
	moons: {
		title: string;
		forget: string;
		forgotten: string;
		soundOff: string;
		soundOn: string;
		close: string;
		gotMoon: string;
		found: string;
		notFound: string;
		/** "{n} of {total} Moons" */
		count: string;
		/** "{name}. {n} of {total}." */
		progress: string;
		/** "{name}. That's all {n}." */
		complete: string;
		forgotLead: string;
		forgotRest: string;
		names: Record<'night-owl' | 'every-phrase' | 'scholar' | 'game-night' | 'redacted' | 'lost-kingdom' | 'grand-tour', string>;
		hints: {
			nightOwl: string;
			everyPhrase: string;
			everyPhraseCalm: string;
			scholar: (schools: number) => string;
			gameNight: string;
			redacted: string;
			lostKingdom: string;
			grandTour: (projects: number) => string;
		};
	};
}

const en: Strings = {
	languageName: 'English',
	siteName: 'Enricco Gemha',
	skipToContent: 'Skip to content',
	nav: { work: 'Work', about: 'About' },
	footer: { privacy: 'Privacy' },
	theme: { toDark: 'Switch to dark theme', toLight: 'Switch to light theme' },
	language: { label: 'Language', current: 'Language: English' },
	description: {
		search: 'I build iOS apps. I’m a master’s student at Brown, and before that I was the first engineering hire at DAERO, a construction software startup in Boston.',
		preview: 'MSc Entrepreneurship at Brown. BSc Computer Engineering at Insper.',
		cardAlt: 'The name Enricco Gemha and the headline “I build things.” beside a photo of Enricco smiling in a navy suit.',
	},
	headline: {
		lead: 'I build ',
		phrases: [
			'things',
			'iOS apps',
			'Android apps',
			'websites',
			'cybersecurity systems',
			'cloud infrastructure',
			'observability dashboards',
			'ML models',
			'robots',
			'business plans',
			'revenue models',
			'whatever you have in mind',
		],
		and: 'and',
		beforeAnd: ', ',
		pause: 'Pause',
		play: 'Play',
		theHeadline: ' the headline',
	},
	status: { live: 'Live', paused: 'Paused', unreleased: 'Built, not released', archived: 'Archived' },
	builtWith: 'Built with',
	home: {
		install: 'Things you can install',
		certifications: 'Certifications',
		work: 'Work',
		earlier: 'Earlier',
		photoAlt: 'Enricco Gemha, in an OpenGiving T-shirt and a Behring Founders lanyard, demoing OpenGiving on his phone.',
		apps: {
			opengiving: 'Buy and sell goods and services. It all helps someone in need.',
			'trophy-rooms': 'Tracks your achievements and game collection.',
			pacbag: 'Tracks what’s in each bag and weighs it against the airline limit.',
			zeropunch: 'A field app for construction crews, built at',
		},
	},
	about: {
		title: 'About | Enricco Gemha',
		description: 'Software engineer from São Paulo, now at Brown. How I got here, and what I’m working on.',
		heading: 'About',
		how: 'How I got here',
		now: 'What I’m doing now',
		tools: 'Tools I reach for',
		certifications: 'Certifications',
		elsewhere: 'Elsewhere',
		portraitAlt: 'Enricco Gemha, in a navy suit, photographed outdoors in front of evergreen trees.',
	},
	privacy: {
		title: 'Privacy | Enricco Gemha',
		description: 'What this site collects, which is close to nothing.',
		heading: 'Privacy',
		forgetMoons: 'Forget my Moons',
	},
	notFound: { title: 'Not found | Enricco Gemha', description: 'That page doesn’t exist.', heading: 'Not found' },
	project: { back: 'Back to work', when: 'When', myPart: 'My part', titleSuffix: ' | Enricco Gemha' },
	certs: {
		verifyOn: 'Verify on',
		domainsFrom: (owner, code, guide) => `Exam domains from ${owner} ${code} ${guide}.`,
	},
	moons: {
		title: 'Moons',
		forget: 'Forget my Moons',
		forgotten: 'Forgotten',
		soundOff: 'Turn sound off',
		soundOn: 'Turn sound on',
		close: 'Close',
		gotMoon: 'You got a Moon!',
		found: 'Found',
		notFound: 'Not found yet',
		count: '{n} of {total} Moons',
		progress: '{name}. {n} of {total}.',
		complete: '{name}. That’s all {n}.',
		forgotLead: 'Your Moons are forgotten.',
		forgotRest: 'Progress starts again from zero.',
		names: {
			'night-owl': 'Night Owl',
			'every-phrase': 'Every Phrase',
			scholar: 'Scholar',
			'game-night': 'Game Night',
			redacted: 'Redacted',
			'lost-kingdom': 'Lost Kingdom',
			'grand-tour': 'Grand Tour',
		},
		hints: {
			nightOwl: 'Switch between light and dark in the header.',
			everyPhrase: 'Watch the homepage headline type every ending.',
			everyPhraseCalm: 'Spend half a minute with the homepage headline.',
			scholar: (schools) => `Look up all ${schools} schools on the About page.`,
			gameNight: 'Look up both games on the About page.',
			redacted: 'Read the capstone report.',
			lostKingdom: 'Wander somewhere that doesn’t exist.',
			grandTour: (projects) => `Visit all ${projects} project pages.`,
		},
	},
};

const ptBR: Strings = {
	languageName: 'Português (Brasil)',
	siteName: 'Enricco Gemha',
	skipToContent: 'Pular para o conteúdo',
	nav: { work: 'Projetos', about: 'Sobre' },
	footer: { privacy: 'Privacidade' },
	theme: { toDark: 'Mudar para o tema escuro', toLight: 'Mudar para o tema claro' },
	language: { label: 'Idioma', current: 'Idioma: Português (Brasil)' },
	description: {
		search: 'Eu construo apps iOS. Faço mestrado na Brown e, antes disso, fui o primeiro engenheiro contratado da DAERO, uma startup de software para construção civil em Boston.',
		preview: 'Mestrado em Empreendedorismo na Brown. Engenharia de Computação no Insper.',
		cardAlt: 'O nome Enricco Gemha e a manchete “Eu construo coisas.” ao lado de uma foto de Enricco sorrindo, de terno azul-marinho.',
	},
	headline: {
		lead: 'Eu construo ',
		phrases: [
			'coisas',
			'apps iOS',
			'apps Android',
			'sites',
			'sistemas de cibersegurança',
			'infraestrutura em nuvem',
			'dashboards de observabilidade',
			'modelos de ML',
			'robôs',
			'planos de negócio',
			'modelos de receita',
			'o que você tiver em mente',
		],
		and: 'e',
		beforeAnd: ' ',
		pause: 'Pausar',
		play: 'Continuar',
		theHeadline: ' a manchete',
	},
	status: { live: 'No ar', paused: 'Pausado', unreleased: 'Pronto, não lançado', archived: 'Arquivado' },
	builtWith: 'Feito com',
	home: {
		install: 'Coisas que você pode instalar',
		certifications: 'Certificações',
		work: 'Projetos',
		earlier: 'Anteriores',
		photoAlt: 'Enricco Gemha, de camiseta da OpenGiving e cordão da Behring Founders, demonstrando a OpenGiving no celular.',
		apps: {
			opengiving: 'Compre e venda produtos e serviços. Tudo ajuda alguém que precisa.',
			'trophy-rooms': 'Acompanha suas conquistas e sua coleção de jogos.',
			pacbag: 'Registra o que vai em cada mala e compara o peso com o limite da companhia aérea.',
			zeropunch: 'Um app de campo para equipes de obra, feito na',
		},
	},
	about: {
		title: 'Sobre | Enricco Gemha',
		description: 'Engenheiro de software de São Paulo, hoje na Brown. Como cheguei até aqui e no que estou trabalhando.',
		heading: 'Sobre',
		how: 'Como cheguei até aqui',
		now: 'O que estou fazendo agora',
		tools: 'Ferramentas que eu uso',
		certifications: 'Certificações',
		elsewhere: 'Fora do trabalho',
		portraitAlt: 'Enricco Gemha, de terno azul-marinho, fotografado ao ar livre em frente a pinheiros.',
	},
	privacy: {
		title: 'Privacidade | Enricco Gemha',
		description: 'O que este site coleta, que é quase nada.',
		heading: 'Privacidade',
		forgetMoons: 'Esquecer minhas Luas',
	},
	notFound: { title: 'Página não encontrada | Enricco Gemha', description: 'Essa página não existe.', heading: 'Página não encontrada' },
	project: { back: 'Voltar aos projetos', when: 'Quando', myPart: 'Minha parte', titleSuffix: ' | Enricco Gemha' },
	certs: {
		verifyOn: 'Verificar no',
		domainsFrom: (owner, code, guide) => `Domínios do exame, ${guide} ${code} ${owner}.`,
	},
	moons: {
		title: 'Luas',
		forget: 'Esquecer minhas Luas',
		forgotten: 'Esquecidas',
		soundOff: 'Desligar o som',
		soundOn: 'Ligar o som',
		close: 'Fechar',
		gotMoon: 'Você conseguiu uma Lua!',
		found: 'Encontrada',
		notFound: 'Ainda não encontrada',
		count: '{n} de {total} Luas',
		progress: '{name}. {n} de {total}.',
		complete: '{name}. São todas as {n}.',
		forgotLead: 'Suas Luas foram esquecidas.',
		forgotRest: 'O progresso recomeça do zero.',
		names: {
			'night-owl': 'Coruja',
			'every-phrase': 'Cada Frase',
			scholar: 'Estudioso',
			'game-night': 'Noite de Jogos',
			redacted: 'Tarjado',
			'lost-kingdom': 'Reino Perdido',
			'grand-tour': 'Grande Tour',
		},
		hints: {
			nightOwl: 'Alterne entre claro e escuro no cabeçalho.',
			everyPhrase: 'Veja a manchete da página inicial digitar todos os finais.',
			everyPhraseCalm: 'Passe meio minuto com a manchete da página inicial.',
			scholar: (schools) => `Consulte todas as ${schools} escolas na página Sobre.`,
			gameNight: 'Consulte os dois jogos na página Sobre.',
			redacted: 'Leia o relatório do projeto final.',
			lostKingdom: 'Vá parar em algum lugar que não existe.',
			grandTour: (projects) => `Visite todas as ${projects} páginas de projeto.`,
		},
	},
};

export const ui: Record<Locale, Strings> = { en, 'pt-BR': ptBR };

if (en.headline.phrases.length !== ptBR.headline.phrases.length) {
	throw new Error('The headline needs the same number of phrases in every language, in the same order.');
}
