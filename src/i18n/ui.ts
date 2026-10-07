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

const esES: Strings = {
	languageName: 'Español (España)',
	siteName: 'Enricco Gemha',
	skipToContent: 'Saltar al contenido',
	nav: { work: 'Proyectos', about: 'Sobre mí' },
	footer: { privacy: 'Privacidad' },
	theme: { toDark: 'Cambiar al tema oscuro', toLight: 'Cambiar al tema claro' },
	language: { label: 'Idioma', current: 'Idioma: Español (España)' },
	description: {
		search: 'Construyo apps para iOS. Estudio un máster en Brown y, antes, fui el primer ingeniero contratado de DAERO, una startup de software para la construcción en Boston.',
		preview: 'Máster en Emprendimiento en Brown. Ingeniería de Computación en el Insper.',
		cardAlt: 'El nombre Enricco Gemha y el titular «Construyo cosas.» junto a una foto de Enricco sonriendo con traje azul marino.',
	},
	headline: {
		lead: 'Construyo ',
		phrases: [
			'cosas',
			'apps para iOS',
			'apps para Android',
			'sitios web',
			'sistemas de ciberseguridad',
			'infraestructura en la nube',
			'paneles de observabilidad',
			'modelos de ML',
			'robots',
			'planes de negocio',
			'modelos de ingresos',
			'lo que tengas en mente',
		],
		and: 'y',
		beforeAnd: ' ',
		pause: 'Pausar',
		play: 'Reanudar',
		theHeadline: ' el titular',
	},
	status: { live: 'En línea', paused: 'En pausa', unreleased: 'Hecho, sin publicar', archived: 'Archivado' },
	builtWith: 'Hecho con',
	home: {
		install: 'Cosas que puedes instalar',
		certifications: 'Certificaciones',
		work: 'Proyectos',
		earlier: 'Anteriores',
		photoAlt: 'Enricco Gemha, con una camiseta de OpenGiving y un lanyard de Behring Founders, mostrando OpenGiving en su móvil.',
		apps: {
			opengiving: 'Compra y vende bienes y servicios. Todo ayuda a alguien que lo necesita.',
			'trophy-rooms': 'Lleva el registro de tus logros y de tu colección de juegos.',
			pacbag: 'Registra lo que llevas en cada maleta y compara el peso con el límite de la aerolínea.',
			zeropunch: 'Una app de campo para cuadrillas de obra, hecha en',
		},
	},
	about: {
		title: 'Sobre mí | Enricco Gemha',
		description: 'Ingeniero de software de São Paulo, ahora en Brown. Cómo llegué hasta aquí y en qué estoy trabajando.',
		heading: 'Sobre mí',
		how: 'Cómo llegué hasta aquí',
		now: 'Qué hago ahora',
		tools: 'Herramientas que uso',
		certifications: 'Certificaciones',
		elsewhere: 'Fuera del trabajo',
		portraitAlt: 'Enricco Gemha, con traje azul marino, fotografiado al aire libre delante de unos abetos.',
	},
	privacy: {
		title: 'Privacidad | Enricco Gemha',
		description: 'Lo que recoge este sitio, que es casi nada.',
		heading: 'Privacidad',
		forgetMoons: 'Olvidar mis Lunas',
	},
	notFound: { title: 'Página no encontrada | Enricco Gemha', description: 'Esa página no existe.', heading: 'Página no encontrada' },
	project: { back: 'Volver a los proyectos', when: 'Cuándo', myPart: 'Mi parte', titleSuffix: ' | Enricco Gemha' },
	certs: {
		verifyOn: 'Verificar en',
		domainsFrom: (owner, code, guide) => `Dominios del examen, ${guide} ${code} ${owner}.`,
	},
	moons: {
		title: 'Lunas',
		forget: 'Olvidar mis Lunas',
		forgotten: 'Olvidadas',
		soundOff: 'Desactivar el sonido',
		soundOn: 'Activar el sonido',
		close: 'Cerrar',
		gotMoon: '¡Has conseguido una Luna!',
		found: 'Encontrada',
		notFound: 'Aún no encontrada',
		count: '{n} de {total} Lunas',
		progress: '{name}. {n} de {total}.',
		complete: '{name}. Ya están las {n}.',
		forgotLead: 'Tus Lunas se han olvidado.',
		forgotRest: 'El progreso vuelve a empezar desde cero.',
		names: {
			'night-owl': 'Ave Nocturna',
			'every-phrase': 'Cada Frase',
			scholar: 'Erudito',
			'game-night': 'Noche de Juegos',
			redacted: 'Censurado',
			'lost-kingdom': 'Reino Perdido',
			'grand-tour': 'Gran Gira',
		},
		hints: {
			nightOwl: 'Cambia entre claro y oscuro en la cabecera.',
			everyPhrase: 'Mira cómo el titular de la portada escribe todos los finales.',
			everyPhraseCalm: 'Pasa medio minuto con el titular de la portada.',
			scholar: (schools) => `Consulta las ${schools} escuelas en la página Sobre mí.`,
			gameNight: 'Consulta los dos juegos en la página Sobre mí.',
			redacted: 'Lee la memoria del proyecto final.',
			lostKingdom: 'Piérdete por algún sitio que no existe.',
			grandTour: (projects) => `Visita las ${projects} páginas de proyecto.`,
		},
	},
};

const sv: Strings = {
	languageName: 'Svenska',
	siteName: 'Enricco Gemha',
	skipToContent: 'Hoppa till innehållet',
	nav: { work: 'Projekt', about: 'Om mig' },
	footer: { privacy: 'Integritet' },
	theme: { toDark: 'Byt till mörkt tema', toLight: 'Byt till ljust tema' },
	language: { label: 'Språk', current: 'Språk: Svenska' },
	description: {
		search: 'Jag bygger iOS-appar. Jag läser en master på Brown, och innan dess var jag den första ingenjören på DAERO, en startup i Boston som gör programvara för byggbranschen.',
		preview: 'Master i entreprenörskap på Brown. Datateknik på Insper.',
		cardAlt: 'Namnet Enricco Gemha och rubriken ”Jag bygger saker.” bredvid ett foto av Enricco som ler i marinblå kostym.',
	},
	headline: {
		lead: 'Jag bygger ',
		phrases: [
			'saker',
			'iOS-appar',
			'Android-appar',
			'webbplatser',
			'system för cybersäkerhet',
			'infrastruktur i molnet',
			'dashboards för observabilitet',
			'ML-modeller',
			'robotar',
			'affärsplaner',
			'intäktsmodeller',
			'vad du än har i tankarna',
		],
		and: 'och',
		beforeAnd: ' ',
		pause: 'Pausa',
		play: 'Spela upp',
		theHeadline: ' rubriken',
	},
	status: { live: 'I drift', paused: 'Pausat', unreleased: 'Byggt, inte släppt', archived: 'Arkiverat' },
	builtWith: 'Byggt med',
	home: {
		install: 'Saker du kan installera',
		certifications: 'Certifieringar',
		work: 'Projekt',
		earlier: 'Tidigare',
		photoAlt: 'Enricco Gemha, i en OpenGiving-t-shirt och ett Behring Founders-band, visar OpenGiving på sin telefon.',
		apps: {
			opengiving: 'Köp och sälj varor och tjänster. Allt hjälper någon som behöver det.',
			'trophy-rooms': 'Håller koll på dina prestationer och din spelsamling.',
			pacbag: 'Håller koll på vad som ligger i varje väska och väger det mot flygbolagets gräns.',
			zeropunch: 'En fältapp för byggarbetslag, byggd på',
		},
	},
	about: {
		title: 'Om mig | Enricco Gemha',
		description: 'Mjukvaruingenjör från São Paulo, nu på Brown. Hur jag kom hit och vad jag arbetar med.',
		heading: 'Om mig',
		how: 'Hur jag kom hit',
		now: 'Vad jag gör nu',
		tools: 'Verktyg jag använder',
		certifications: 'Certifieringar',
		elsewhere: 'Utanför jobbet',
		portraitAlt: 'Enricco Gemha, i marinblå kostym, fotograferad utomhus framför granar.',
	},
	privacy: {
		title: 'Integritet | Enricco Gemha',
		description: 'Vad den här webbplatsen samlar in, vilket är nästan ingenting.',
		heading: 'Integritet',
		forgetMoons: 'Glöm mina Månar',
	},
	notFound: { title: 'Sidan finns inte | Enricco Gemha', description: 'Den sidan finns inte.', heading: 'Sidan finns inte' },
	project: { back: 'Tillbaka till projekten', when: 'När', myPart: 'Min del', titleSuffix: ' | Enricco Gemha' },
	certs: {
		verifyOn: 'Verifiera på',
		domainsFrom: (owner, code, guide) => `Examensområden från ${owner} ${guide} för ${code}.`,
	},
	moons: {
		title: 'Månar',
		forget: 'Glöm mina Månar',
		forgotten: 'Glömda',
		soundOff: 'Stäng av ljudet',
		soundOn: 'Sätt på ljudet',
		close: 'Stäng',
		gotMoon: 'Du fick en Måne!',
		found: 'Hittad',
		notFound: 'Inte hittad än',
		count: '{n} av {total} Månar',
		progress: '{name}. {n} av {total}.',
		complete: '{name}. Det var alla {n}.',
		forgotLead: 'Dina Månar är glömda.',
		forgotRest: 'Räkningen börjar om från noll.',
		names: {
			'night-owl': 'Nattuggla',
			'every-phrase': 'Varje Fras',
			scholar: 'Lärd',
			'game-night': 'Spelkväll',
			redacted: 'Maskerad',
			'lost-kingdom': 'Förlorat Rike',
			'grand-tour': 'Stor Rundtur',
		},
		hints: {
			nightOwl: 'Växla mellan ljust och mörkt i sidhuvudet.',
			everyPhrase: 'Se startsidans rubrik skriva ut alla slut.',
			everyPhraseCalm: 'Tillbringa en halv minut med startsidans rubrik.',
			scholar: (schools) => `Slå upp alla ${schools} skolor på sidan Om mig.`,
			gameNight: 'Slå upp båda spelen på sidan Om mig.',
			redacted: 'Läs rapporten från examensarbetet.',
			lostKingdom: 'Gå vilse någonstans som inte finns.',
			grandTour: (projects) => `Besök alla ${projects} projektsidor.`,
		},
	},
};

export const ui: Record<Locale, Strings> = { en, 'pt-BR': ptBR, 'es-ES': esES, sv };

for (const [locale, strings] of Object.entries(ui)) {
	if (strings.headline.phrases.length !== en.headline.phrases.length) {
		throw new Error(`The headline needs the same number of phrases in every language, in the same order; ${locale} differs.`);
	}
}
