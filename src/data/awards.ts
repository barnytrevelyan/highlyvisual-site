// Awards — verbatim from /filming-1 on the live highlyvisual.com.
// Captured 2026-05-21.

export interface Award {
  year: string;
  award: string;
  body: string;        // awarding body
  production: string;  // production it was awarded to
  productionHouse: string;
  distributor?: string;
  operatorRole: string;
  status: 'won' | 'nominated';
}

export const awards: Award[] = [
  {
    year: '2021',
    award: 'Outstanding Cinematography for a Non-Fiction Programme',
    body: 'Primetime Creative Arts Emmy Awards',
    production: 'David Attenborough: A Life on Our Planet',
    productionHouse: 'Silverback Films',
    distributor: 'Netflix',
    operatorRole: 'Honored by the Television Academy for his role in Additional Cinematography',
    status: 'won',
  },
  {
    year: '2022',
    award: 'Best Cinematography (docuseries)',
    body: 'Critics Choice Documentary Awards',
    production: 'Our Great National Parks',
    productionHouse: 'Wild Space Productions · Higher Ground',
    distributor: 'Netflix',
    operatorRole: 'Recognised as part of the cinematography team',
    status: 'won',
  },
  {
    year: '2023',
    award: 'Outstanding Travel, Adventure and Nature Program',
    body: 'Daytime Emmy Awards',
    production: 'Wild Babies',
    productionHouse: 'Netflix',
    operatorRole: 'Drone Operator (Kenya elephant sequence)',
    status: 'won',
  },
  {
    year: '2023',
    award: 'Animal Behaviour — Long Form',
    body: 'Jackson Wild Media Awards',
    production: 'Our Planet 2: World on the Move',
    productionHouse: 'Silverback Films',
    distributor: 'Netflix',
    operatorRole: 'Drone Operator',
    status: 'won',
  },
  {
    year: '2024',
    award: 'Outstanding Cinematography for a Non-Fiction Programme (nominated)',
    body: 'Primetime Emmy Awards',
    production: 'Our Planet 2: World on the Move',
    productionHouse: 'Silverback Films',
    distributor: 'Netflix',
    operatorRole: 'Drone Operator',
    status: 'nominated',
  },
  {
    year: '2024',
    award: 'News and Documentary Emmy Awards (four nominations)',
    body: 'News and Documentary Emmys',
    production: 'Incredible Animal Journeys',
    productionHouse: 'Plimsoll Productions',
    distributor: 'National Geographic · Disney+',
    operatorRole: 'Drone Operator',
    status: 'nominated',
  },
];

// Production credits — operator's full filmography, verbatim from the live site cards + augmented from research.
export interface Credit {
  title: string;
  productionHouse: string;
  distributor?: string;
  role: string;
  year: string;
  cardImage: string;  // file in /public/img/
  url?: string;       // case-study URL on the rebuild, if it exists
  lane: 'natural-history' | 'fixing' | 'commercial';
}

// Credits — only those with confirmed card images live in the visual grid.
// Credits without card art are listed in the typographic table on /credits/ but not in the homepage grid.

export const credits: Credit[] = [
  { title: 'A Life on Our Planet', productionHouse: 'Silverback Films', distributor: 'Netflix', role: 'Drone Operator', year: '2020', cardImage: '/img/credit-a-life-on-our-planet.jpg', url: '/work/a-life-on-our-planet/', lane: 'natural-history' },
  { title: 'Our Great National Parks', productionHouse: 'Wild Space Productions · Higher Ground', distributor: 'Netflix', role: 'Drone Operator', year: '2022', cardImage: '/img/credit-our-great-national-parks.jpg', url: '/work/our-great-national-parks/', lane: 'natural-history' },
  { title: 'Secrets of the Elephants', productionHouse: 'National Geographic', distributor: 'National Geographic · Disney+', role: 'Drone Operator', year: '2023', cardImage: '/img/credit-secrets-of-elephants.jpg', url: '/work/secrets-of-the-elephants/', lane: 'natural-history' },
  { title: 'Dynasties II', productionHouse: 'BBC Studios Natural History Unit', distributor: 'BBC', role: 'Drone Operator', year: '2022', cardImage: '/img/credit-dynasties-ii.jpg', url: '/work/dynasties-ii/', lane: 'natural-history' },
  { title: 'Seven Worlds, One Planet', productionHouse: 'BBC Studios Natural History Unit', distributor: 'BBC', role: 'Drone Operator', year: '2019', cardImage: '/img/credit-seven-worlds.jpg', url: '/work/seven-worlds-one-planet/', lane: 'natural-history' },
  { title: 'The Green Planet', productionHouse: 'BBC Studios Natural History Unit', distributor: 'BBC', role: 'Drone Operator', year: '2022', cardImage: '/img/credit-the-green-planet.jpg', lane: 'natural-history' },
  { title: 'Our Planet II', productionHouse: 'Silverback Films', distributor: 'Netflix', role: 'Drone Operator', year: '2023', cardImage: '/img/credit-our-planet-ii.webp', lane: 'natural-history' },
  { title: 'A Perfect Planet', productionHouse: 'Silverback Films', distributor: 'BBC · Sony Earth', role: 'Drone Operator', year: '2021', cardImage: '/img/credit-perfect-planet.jpg', lane: 'natural-history' },
  { title: 'Our Changing Planet', productionHouse: 'BBC Studios', distributor: 'BBC', role: 'Drone Operator', year: '2022', cardImage: '/img/credit-our-changing-planet.jpg', lane: 'natural-history' },
  { title: 'Breaking Boundaries', productionHouse: 'Silverback Films', distributor: 'Netflix', role: 'Drone Operator', year: '2021', cardImage: '/img/credit-breaking-boundaries.jpg', lane: 'natural-history' },
  { title: 'Legacy', productionHouse: 'Yann Arthus-Bertrand', distributor: 'Theatrical', role: 'Drone Operator', year: 'Various', cardImage: '/img/credit-legacy.jpg', lane: 'natural-history' },
  { title: 'Tiny World', productionHouse: 'Plimsoll Productions', distributor: 'Apple TV+ (narrated by Paul Rudd)', role: 'Drone Operator', year: '2020', cardImage: '/img/credit-tiny-world.jpg', lane: 'natural-history' },
  { title: 'Ecosphere', productionHouse: 'Silverback / XM2', distributor: 'Apple TV+', role: 'Drone Operator', year: '2023', cardImage: '/img/credit-ecosphere.jpg', lane: 'natural-history' },
  { title: 'The Story of Us', productionHouse: 'Asylum Entertainment', distributor: 'National Geographic', role: 'Drone Operator (with Morgan Freeman)', year: 'Various', cardImage: '/img/credit-story-of-us.jpg', lane: 'natural-history' },
  { title: 'The Fearless Chef', productionHouse: 'Wildbeast Productions', distributor: 'National Geographic · Channel 4', role: 'Drone Operator · Aerial · Timelapse', year: 'Various', cardImage: '/img/credit-fearless-chef.jpg', url: '/work/the-fearless-chef/', lane: 'commercial' },
  { title: 'Seat at the Table', productionHouse: 'YouTube Originals', distributor: 'YouTube', role: 'Drone Operator', year: 'Various', cardImage: '/img/credit-seat-at-the-table.jpg', lane: 'commercial' },
  { title: 'Cheli & Peacock Mobile Safaris', productionHouse: 'Cheli & Peacock', distributor: 'Brand film', role: 'Producer · DP · Drone Operator', year: '2023', cardImage: '/img/credit-cheli-peacock.jpg', url: '/work/cheli-peacock/', lane: 'commercial' },
  { title: 'Canniverse', productionHouse: 'Silk Road Visual + Kenya Tourism Board', distributor: 'Fulldome / immersive', role: 'Documentary photography consultant', year: '2024–', cardImage: '/img/hero-4-silkroad.png', url: '/work/silk-road-canniverse/', lane: 'fixing' },
  { title: 'Kasas Kenya', productionHouse: 'Kasas Air Charter', distributor: 'Brand film', role: 'Producer · Director · DOP · Drone Operator', year: '2026', cardImage: '/img/sup-2-kasas-kenya.jpg', url: '/work/kasas-kenya/', lane: 'commercial' },
];

// Additional production credits — drone-operator and aerial-cinematography contributions
// surfaced from the operator's previous-work card grid. Listed text-only on /credits/ until
// per-card promo art is captured.
export interface TextCredit {
  title: string;
  productionHouse?: string;
  distributor?: string;
  role: string;
  year: string;
  lane: 'natural-history' | 'fixing' | 'commercial';
}
export const additionalCredits: TextCredit[] = [
  { title: 'Incredible Animal Journeys', productionHouse: 'Plimsoll Productions', distributor: 'National Geographic · Disney+', role: 'Drone Operator', year: '2023', lane: 'natural-history' },
  { title: 'Queens', productionHouse: 'Wildstar Films', distributor: 'National Geographic · Disney+ · Hulu', role: 'Drone Operator', year: '2024', lane: 'natural-history' },
  { title: 'Secret World of Sound', productionHouse: 'Humble Bee Films', distributor: 'Sky Original · BBC Earth', role: 'Drone Operator', year: '2024', lane: 'natural-history' },
  { title: 'Planet Earth III', productionHouse: 'BBC Studios Natural History Unit', distributor: 'BBC', role: 'Drone Operator', year: '2023', lane: 'natural-history' },
  { title: 'Africa from Above', productionHouse: 'Off the Fence', role: 'Drone Operator', year: 'Various', lane: 'natural-history' },
  { title: 'Wild Babies', productionHouse: 'Plimsoll Productions', distributor: 'Netflix', role: 'Drone Operator', year: '2022', lane: 'natural-history' },
  { title: 'Poacher', productionHouse: 'Plan B Entertainment', distributor: 'Amazon Prime Video', role: 'Aerial cinematography (Kenya unit)', year: '2024', lane: 'natural-history' },
  { title: 'Prodigies', distributor: 'Apple TV+', role: 'Drone Operator', year: 'Various', lane: 'natural-history' },
  { title: 'Earth at Night in Color', productionHouse: 'Offspring Films', distributor: 'Apple TV+ (narrated by Tom Hiddleston)', role: 'Drone Operator', year: '2020', lane: 'natural-history' },
  { title: 'Equator from the Air', productionHouse: 'BBC', distributor: 'BBC', role: 'Aerial cinematography', year: 'Various', lane: 'natural-history' },
  { title: 'Earth from Space', productionHouse: 'BBC Studios Natural History Unit', distributor: 'BBC', role: 'Drone Operator', year: '2019', lane: 'natural-history' },
  { title: 'Endangered Species', productionHouse: 'Lionsgate', distributor: 'Theatrical', role: 'Aerial cinematography (Kenya unit)', year: '2021', lane: 'commercial' },
  { title: 'Rendez-vous en terre inconnue', productionHouse: 'France 2', distributor: 'France TV', role: 'Drone Operator (Kenya unit)', year: 'Various', lane: 'natural-history' },
  { title: 'STE Collar Project', productionHouse: 'Save the Elephants', role: 'Producer · DP · Drone Operator', year: '2024', lane: 'commercial' },
  { title: 'Wildlife Works — Simon Kipsang', productionHouse: 'Wildlife Works', role: 'Producer · DP · Drone Operator', year: '2024', lane: 'commercial' },
];
