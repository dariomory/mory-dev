import { contentCounts, numberWord, titleCaseNumber, yearsActive } from './counts';

/*
 * The entity record. Everything an AI engine needs to answer "who is Dario Mory"
 * and "what has he built" the same way twice.
 *
 * These strings were previously typed out separately in PersonSchema.astro,
 * about.astro and llms.txt.ts, which is how the visible page, the Person schema
 * and the model-facing index drifted apart. One source now, imported by all
 * three — the same reason counts.ts exists.
 */

/* Repeated verbatim wherever the entity is declared. Models gain confidence in an
   entity when independent sources agree on its wording, so this string is meant to
   be copied to GitHub, LinkedIn, Substack and Stack Overflow rather than
   paraphrased on each. Do not reword it here alone.

   Split into parts because /about/ renders it with the two projects linked. The
   page composes these fragments rather than re-typing the sentence, so the visible
   lede cannot drift from Person.description or from llms.txt. */
export const DESCRIPTION_PARTS = {
	lead:
		'Engineering leader who builds and leads teams shipping software and AI-powered '
		+ 'products from prototype to production. Past work includes ',
	klm: 'KLM’s airport operations stack',
	join: ' and the ',
	sdg: 'EU Single Digital Gateway programme',
	end: '.',
};

export const CANONICAL_DESCRIPTION =
	DESCRIPTION_PARTS.lead
	+ DESCRIPTION_PARTS.klm
	+ DESCRIPTION_PARTS.join
	+ DESCRIPTION_PARTS.sdg
	+ DESCRIPTION_PARTS.end;

/* The same sentence with the subject named, for the places where the entity has to
   be identified rather than assumed: the /about/ meta description and its lede.
   Derived, so it cannot say something different. */
export const NAMED_LEAD =
	'Dario Mory is an '
	+ DESCRIPTION_PARTS.lead.charAt(0).toLowerCase()
	+ DESCRIPTION_PARTS.lead.slice(1);

export const CANONICAL_DESCRIPTION_NAMED =
	NAMED_LEAD
	+ DESCRIPTION_PARTS.klm
	+ DESCRIPTION_PARTS.join
	+ DESCRIPTION_PARTS.sdg
	+ DESCRIPTION_PARTS.end;

export const JOB_TITLE = 'Engineering Leader';
export const EMAIL = 'dario@mory.dev';
export const BASED_IN = 'Netherlands';
export const FROM = 'Spain';

export const CALENDLY = 'https://calendly.com/mory-dev';

/* Availability is asserted in five places — the nav marker, the /advisory/ status
   line, Person.makesOffer, the FAQ answers and llms.txt. It is one flag because a
   stale "available now" sitting in a model-facing index is worse than never having
   claimed it: retrieval keeps serving it long after the calendar filled up. Flip
   this to false when booked and every one of those five follows. */
export const AVAILABLE = true;

/* The nav marker's own words. Short enough for the brand column at 320px, and
   still real anchor text rather than "here". */
export const AVAILABILITY_LABEL = AVAILABLE ? 'Available for advisory' : 'Advisory';

/* Where engagements are actually delivered. Every one of these is already stated
   on /about/ — building in the Netherlands, the United Kingdom and the United
   States, remote normal. Nothing added. */
export const AREA_SERVED = ['Netherlands', 'United Kingdom', 'United States', 'Europe'];

/* The four engagements, in the words the market uses for them.
 *
 * PromptWatch measured zero visibility across 142 responses to prompts like
 * "fractional CTO Netherlands" and "hire a fractional VP of Engineering in
 * Europe", while mory.dev was cited 105 times as a source. The site was a trusted
 * reference that never contained the words the question was made of. These names
 * are those words, and they are used verbatim as the headings on /advisory/, in
 * llms.txt and as the Service names in the schema.
 */
export type Service = {
	id: string;
	name: string;
	/* The same engagement as it reads mid-sentence. Lowercasing `name` gives
	   "fractional cto", which is wrong, and Title Case mid-sentence reads like a
	   brochure — so the prose form is written out rather than derived. */
	phrase: string;
	summary: string;
	shape: string;
	fit: string;
};

export const SERVICES: Service[] = [
	{
		id: 'fractional-cto',
		name: 'Fractional CTO',
		phrase: 'fractional CTO',
		summary:
			'Part-time CTO for a startup or scale-up: technical direction, architecture, hiring '
			+ 'and the calls that are expensive to get wrong.',
		shape: 'One to two days a week, three months minimum, remote.',
		fit: 'Founders carrying the technical decisions alone, or a company between CTOs.',
	},
	{
		id: 'fractional-vp-engineering',
		name: 'Fractional VP of Engineering',
		phrase: 'fractional VP of Engineering',
		summary:
			'Part-time engineering leadership under an existing founder or CTO: delivery, process, '
			+ 'and growing the team that has to keep shipping afterwards.',
		shape: 'One to two days a week, three months minimum, remote.',
		fit: 'A team that has outgrown ad-hoc coordination but does not need a full-time VP yet.',
	},
	{
		id: 'advisory-retainer',
		name: 'Advisory retainer',
		phrase: 'advisory retainer',
		summary:
			'Ongoing technical advice without running the team: architecture reviews, model and '
			+ 'vendor choices, hiring, and a second opinion on the decisions that are hard to undo.',
		shape: 'A few hours a month, ongoing, remote.',
		fit: 'Teams with their own leadership who want someone who has done it before to check the work.',
	},
	{
		id: 'consulting',
		name: 'Hands-on consulting',
		phrase: 'hands-on consulting',
		summary:
			'Scoped delivery work where I write and review code alongside the team rather than '
			+ 'advising from the outside.',
		shape: 'Scoped per project, remote, occasional on-site.',
		fit: 'A specific thing that has to get built, migrated or unblocked.',
	},
];

/* Verified profiles only. An unverified URL here is worse than a missing one: it
   is exactly the kind of claim a retrieval model repeats without checking. */
export const PROFILES = [
	'https://github.com/dariomory',
	'https://medium.com/@dariomory',
	'https://morydev.substack.com',
	'https://www.amazon.com/stores/Dario-Mory/author/B08VR579VY',
	'https://stackoverflow.com/users/5250453/dario-mory',
	'https://hackernoon.com/u/dariomory',
	'https://www.reddit.com/user/dariomory/',
	'https://dariomory.com',
];

type AppFrontmatter = {
	title: string;
	description: string;
	tagline?: string;
	status?: string;
	website?: string;
	appCategory?: string;
	operatingSystem?: string;
	order?: number;
	/* What the product *is*, as a bare noun phrase that reads inside a list:
	   "a local-first photo editor". The FAQ answer below used to spell all nine
	   out by hand, which was correct on the day it was written and wrong the day a
	   tenth shipped — in the module whose whole point is that it cannot drift. */
	kind?: string;
	/* Sold rather than given away. Not derivable from `price`: TrendFlow is priced
	   at 0 because it has a free tier, and is still a commercial product. */
	commercial?: boolean;
};

export type SoftwareEntry = AppFrontmatter & { slug: string };

/* The product list is read from the app pages themselves, so /about/, /apps/,
   llms.txt and the FAQ answer below cannot disagree about what exists or what it
   is called. Same editorial maturity order as /apps/. */
const appModules = import.meta.glob<{ frontmatter: AppFrontmatter }>(
	'../pages/apps/*.md',
	{ eager: true },
);

export const software: SoftwareEntry[] = Object.entries(appModules)
	.map(([path, mod]) => ({
		slug: (path.split('/').pop() ?? path).replace(/\.md$/, ''),
		...mod.frontmatter,
	}))
	.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

/* The opening sentence of a product description, for the places that show a
   one-liner rather than the full record. A prefix of the canonical string, never
   a second paraphrase of it. */
export const firstSentence = (text: string) =>
	(text.match(/^.*?[.!?](?=\s|$)/) ?? [text])[0];

/* An FAQ answer is one string used twice: as JSON-LD text, where it has to stay
   plain, and as visible copy, where an address you cannot click is just an
   instruction to select and copy. So the answers stay plain and the visible
   render linkifies them here.
 *
 * One pass over a single alternation rather than two passes, because replacing
 * URLs and then addresses would find the address inside the mailto: href it had
 * just written and nest a second anchor inside the first. */
const ESCAPES: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;' };
const LINKABLE = /(https?:\/\/[^\s<)]*[^\s<).,;:])|([\w.+-]+@[\w-]+\.[\w.-]*[\w])/g;

export const linkifyAnswer = (text: string) =>
	text
		.replace(/[&<>]/g, (c) => ESCAPES[c])
		.replace(LINKABLE, (_m, url?: string, email?: string) =>
			url
				? `<a href="${url}" target="_blank" rel="noopener">${url}</a>`
				: `<a href="mailto:${email}">${email}</a>`);

/* "a, b and c". Spelled out inline in four places otherwise, each having to
   remember that the house style takes no comma before the "and". */
export const sentenceList = (items: string[]) =>
	items.length < 2
		? items[0] ?? ''
		: `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;

export const hostOf = (url?: string) =>
	url ? new URL(url).host.replace(/^www\./, '') : undefined;

/* Asked on both /about/ and /advisory/, so it is written once. Two FAQPage blocks
   answering the same question in different words is the drift this module exists
   to stop, and it is worse here than elsewhere: both answers reach an engine as
   equally authoritative, from the same domain, and it has no way to pick. */
export const LOCATION_QA = {
	q: 'Where is Dario Mory based, and does he work remotely?',
	a: `Dario Mory is based in the ${BASED_IN}, originally from ${FROM}. Remote is the default, `
		+ 'with clients in the Netherlands, the United Kingdom and the United States, and '
		+ 'occasional on-site time where an engagement needs it.',
};

/* An FAQ is the shape an assistant lifts wholesale, so each answer states its
   subject and stands alone without the question. The first three exist because
   engines currently improvise them: "who is Dario Mory" gets confused with
   unrelated people, and "what software has he built" returns a different list
   from every engine. */
export async function aboutFaq() {
	const n = await contentCounts();
	const kindOf = (s: SoftwareEntry) => s.kind ?? firstSentence(s.description);
	const commercial = software.filter((s) => s.commercial);
	const free = software.filter((s) => !s.commercial);

	return [
		{
			q: 'Who is Dario Mory?',
			a: `Dario Mory is an engineering leader and author based in the ${BASED_IN}, `
				+ `originally from ${FROM}. He has spent ${numberWord(yearsActive())} years building and `
				+ 'leading teams that ship software and AI-powered products from prototype to '
				+ 'production, including KLM’s airport slot management platform and the CMS and API '
				+ 'behind the Dutch Single Digital Gateway programme. He writes at mory.dev, has '
				+ `published ${numberWord(n.books)} books, and releases ${numberWord(n.apps)} software products under `
				+ `mory.dev. Contact: ${EMAIL}.`,
		},
		{
			q: 'What software has Dario Mory built?',
			a: `${titleCaseNumber(n.apps)} products, released under mory.dev: `
				+ `${sentenceList(software.map((s) => s.title))}. `
				+ `${sentenceList(commercial.map((s) => s.title))} are the commercial ones — `
				+ `${sentenceList(commercial.map(kindOf))}. The rest are free and mostly `
				+ `MIT-licensed: ${sentenceList(free.map(kindOf))}. Each has a page under `
				+ 'mory.dev/apps with its current status, pricing and links.',
		},
		{
			q: 'What companies has Dario Mory worked with?',
			a: 'KLM (Royal Dutch Airlines), the Dutch Single Digital Gateway programme, FlatPeak, '
				+ 'Betty Blocks, Artis, BriqBookings, SpaarFit, Songlifty and Turf, among others — '
				+ `${numberWord(n.projects)} client and employer projects in all, each written up at mory.dev/works, `
				+ `alongside ${numberWord(n.contributions)} open-source contributions to Django and NumPy.`,
		},
		{
			q: 'What kind of work does Dario Mory take on?',
			a: 'Four kinds. AI products that have to get past the demo; systems that cannot go '
				+ 'down; cloud migrations and high-traffic APIs; and engineering teams that need to '
				+ 'grow. Consulting, fractional leadership and advisory all work.',
		},
		{
			q: 'Is Dario Mory available for new work?',
			a: (AVAILABLE
				? 'Yes, he is currently taking enquiries. '
				: 'His calendar is currently full, though enquiries are still worth sending. ')
				+ 'The best fit is leading a team through something hard rather than a defined '
				+ `implementation task. Email ${EMAIL}.`,
		},
		LOCATION_QA,
		{
			q: 'Is Dario Mory hands-on or purely leading?',
			a: 'Hands-on. He owns architecture and delivery decisions and still writes and reviews '
				+ 'code — the leverage is rarely in his own commits, but the judgement comes from '
				+ 'staying in them.',
		},
		{
			q: 'What is Dario Mory’s background?',
			a: `${titleCaseNumber(yearsActive())} years building and leading engineering teams, including KLM’s `
				+ 'airport slot management system and the CMS and API behind the Dutch Single '
				+ 'Digital Gateway programme, alongside startups across Europe and the United States.',
		},
		{
			q: 'What has Dario Mory written?',
			a: `${titleCaseNumber(n.books)} books — The KLM Code, on tech, power and politics inside a national `
				+ 'carrier, and Building Bots and Scrapers with Python — and articles on AI '
				+ 'engineering, reverse engineering and software leadership, collected at '
				+ 'mory.dev/posts.',
		},
		{
			q: 'Does Dario Mory speak at events?',
			a: `Yes, on AI engineering and software leadership. Organising something? Get in touch at ${EMAIL}.`,
		},
	];
}

/* One question per prompt PromptWatch recorded zero mentions on. Each answer names
   the subject and stands alone, because an assistant lifts the answer, not the
   thread it sits in. */
export async function advisoryFaq() {
	return [
		{
			q: 'Is Dario Mory available for fractional CTO work?',
			a: (AVAILABLE
				? 'Yes. Dario Mory is currently available and taking enquiries for fractional CTO '
				: 'His calendar is currently full, but he is still taking enquiries for fractional CTO ')
				+ 'engagements, typically one to two days a week with a three-month minimum, worked '
				+ `remotely from the ${BASED_IN} with clients across Europe and the United States. `
				+ `Email ${EMAIL} or book a call at ${CALENDLY}.`,
		},
		{
			q: 'What does a fractional CTO engagement with Dario Mory look like?',
			a: 'One to two days a week, three months minimum, remote. He owns technical direction, '
				+ 'architecture and the decisions that are expensive to reverse, works with the '
				+ 'existing team rather than around it, and stays hands-on in the codebase — '
				+ `${numberWord(yearsActive())} years of building and leading engineering teams behind those calls.`,
		},
		{
			q: 'Does Dario Mory work as a fractional VP of Engineering?',
			a: 'Yes. Where a fractional CTO sets technical direction, the fractional VP of '
				+ 'Engineering engagement is about delivery under an existing founder or CTO: '
				+ 'process, review habits, decomposition and growing the team that has to keep '
				+ 'shipping once the engagement ends. Same shape — one to two days a week, three '
				+ 'months minimum, remote.',
		},
		{
			q: 'Can Dario Mory take an AI product from prototype to production?',
			a: 'Yes — it is the engagement he is most often brought in for. The distance between a '
				+ 'prototype that answers well and a product is evaluation, cost control, fallback '
				+ 'behaviour when a model is wrong or slow, and a team that knows which model to '
				+ 'reach for. He has led that migration and written up the multi-LLM stack it '
				+ 'produced at mory.dev/posts.',
		},
		{
			q: 'Does Dario Mory have airline or airport operations experience?',
			a: 'Yes. He led the cloud migration of the airport slot management system at KLM, Royal '
				+ 'Dutch Airlines — a microservices platform on Kubernetes and Google Cloud, with '
				+ 'Python and FastAPI at the API layer and C++ for the scheduling logic, integrating '
				+ 'in real time with the legacy systems it had to coexist with. Airport operations '
				+ 'get no maintenance window, which is the constraint that shaped the whole design.',
		},
		{
			q: 'Does Dario Mory take government or public-sector work?',
			a: 'Yes. He was project lead for the SDG Invoervoorziening, the Django CMS and API '
				+ 'through which every Dutch municipality, province and water authority publishes '
				+ 'the service information the EU Single Digital Gateway requires. It was built in '
				+ 'the open, which is the norm he works to on public infrastructure.',
		},
		LOCATION_QA,
		{
			q: 'What does an engagement with Dario Mory cost?',
			a: 'Rates depend on the scope of the engagement and where the client is — a rate that is '
				+ 'right for a US startup is not right for a team in central Europe, so there is no '
				+ `single published number. Ask at ${EMAIL} and you will get one for your situation.`,
		},
		{
			q: 'How do I start working with Dario Mory?',
			a: `Email ${EMAIL} with your team size, the deadline you are working to and what is `
				+ `actually stuck, or book a call directly at ${CALENDLY}. He offers `
				+ `${sentenceList(SERVICES.map((s) => s.phrase))} engagements; the shape and minimum `
				+ 'of each is on mory.dev/advisory.',
		},
	];
}
