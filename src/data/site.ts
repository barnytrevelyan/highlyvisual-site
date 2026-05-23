// Sitewide content — the canonical strings used across the site.
// All operator-confirmed or lifted verbatim from the live highlyvisual.com pages
// (captured 2026-05-21).

export const site = {
  name: 'Highly Visual',
  tagline: 'Natural-history and aerial cinematography from Nairobi.',
  description:
    'CAA-licensed drone operator and cinematographer for BBC NHU, Silverback Films, Plimsoll, Offspring, Nat Geo and Disney+. KFCB-registered fixer for international productions visiting East Africa. Established 2002, 14+ countries.',
  url: 'https://www.highlyvisual.com',
  email: 'info@highlyvisual.com',
  phone: '+254 701 397 911',
  whatsapp: 'https://wa.me/254701397911',
  location: 'Nairobi, Kenya',
  founded: 2002,
  social: {
    instagram: 'https://www.instagram.com/highlyvisualke',
    facebook: 'https://www.facebook.com/HighlyVisualEA',
    linkedin: 'https://www.linkedin.com/in/barny-trevelyan-johnson-a7770629',
    vimeo: 'https://vimeo.com/user10135626',
    youtube: 'https://www.youtube.com/channel/UCVF7zJB-SFLV6aWQ7sK1zSw',
    imdb: 'https://www.imdb.com/name/nm8536047/',
    talentManager: 'https://www.thetalentmanager.com/talent/58210',
  },
  sister: {
    hire: {
      url: 'https://hirevisual.com',
      tag: 'Cinema-grade rental',
      desc: 'DJI Inspire 3 · Sony FX6 · FX3 · A7R5 · Atomos · Sound Devices · full lighting and audio kits. Nairobi.',
    },
    stock: {
      url: 'https://stock.highlyvisual.com',
      tag: '4K+ broadcast stock archive',
      desc:
        'Aerial, long-lens wildlife, East African ecology — 2,700+ clips and growing. Licensed for broadcast; discounted rates for African productions, students and NGOs.',
    },
  },
  // The 10-house list shown on the homepage strip; the broader client list lives on About.
  productionHouses: [
    'BBC Natural History Unit',
    'Silverback Films',
    'Plimsoll Productions',
    'Offspring Films',
    'Studio Silverback',
    'National Geographic',
    'Disney+',
    'Netflix',
    'Silk Road Visual',
    'Kenya Tourism Board',
    'Apple TV+',
    'Channel 4',
  ],
  // Brand pillars — operator's own framing from /filming-1 (live site About page)
  pillars: [
    {
      title: 'Ethical and conservation-aligned',
      body:
        'Every project adheres to strict environmental guidelines, minimising impact on wildlife and ecosystems.',
    },
    {
      title: 'Compliant and locally connected',
      body:
        'KFCB-registered local film agent. Compliance with local laws including permits and wildlife-protection regulations is the floor, not the goal.',
    },
    {
      title: 'Locally embedded',
      body:
        'Strong relationships with local communities and conservation organisations support ethical storytelling on every shoot.',
    },
  ],
  countries: [
    'Kenya', 'Tanzania', 'United Kingdom', 'Uganda', 'Rwanda', 'Botswana', 'South Africa',
    'Madagascar', 'Namibia', 'Ethiopia', 'Mozambique', 'Zambia', 'Democratic Republic of Congo',
    'India',
  ],
  parks: [
    'Maasai Mara', 'Mara Triangle', 'Tsavo East', 'Tsavo West', 'Amboseli',
    'Samburu', 'Shaba', 'Lake Bogoria', 'Lake Naivasha', 'Lake Magadi',
    'Nairobi National Park', 'Mount Kenya', 'Reteti Elephant Sanctuary', 'Namunyak Conservancy',
    'Rukinga (Tsavo)', 'Watamu Coast',
  ],
  // Kit list (operator-supplied via TalentManager profile + the rental catalogue at hirevisual.com)
  kit: {
    drones: [
      'DJI Inspire 3 (RAW, full sensor)',
      'DJI Inspire 2 with X5S',
      'DJI Mavic 3 Cine',
      'DJI Mavic 2 Pro',
    ],
    cinemaCameras: [
      'Sony FX6',
      'Sony FX3',
      'Sony PXW-FS7',
      'Sony A7R5',
    ],
    lenses: [
      'Sony 200-600mm',
      'Sigma 24-70mm f/2.8 ART',
      'Sony 70-200mm f/4',
      'Sony G-Master prime set',
    ],
    sound: [
      'Sound Devices MixPre-3 mk2',
      'Rode NTG4+',
      'Rode Blimp · DJI Mic v1 · Shure MVL · Audio-Technica Pro70',
    ],
    other: [
      'DJI RS3 / RS2 Pro Gimbal',
      'Atomos Ninja V+ · Shinobi 5"',
      'Vortex 10×42 binoculars',
      'CineEye 2 Pro image-transmission',
    ],
  },
  press: [
    {
      outlet: 'PetaPixel',
      year: 2023,
      title:
        "The Making of Nat Geo's Visual Spectacle 'Incredible Animal Journeys'",
      url:
        'https://petapixel.com/2023/11/27/the-making-of-nat-geos-visual-spectacle-incredible-animal-journeys/',
    },
    {
      outlet: 'RED Digital Cinema',
      year: 2024,
      title: 'Incredible Animal Journeys — Episode-by-Episode case study',
      url: 'https://www.red.com/stories/incredible-animal-journeys',
    },
    {
      outlet: 'Silk Road Visual / FinancialContent',
      year: 2025,
      title:
        'Silk Road Visual and Kenya Tourism Board reach Canniverse co-creation agreement',
      url:
        'https://markets.financialcontent.com/stocks/article/getnews-2025-11-5-going-global-in-east-africa-silkroad-visual-and-kenya-tourism-board-reach-culture-tourism-co-creation-agreement',
    },
    {
      outlet: 'Silk Road Visual',
      year: 2025,
      title: '中国丝路视觉与肯尼亚国家旅游局达成文旅共创合作 (Chinese)',
      url: 'https://www.silkroadcg.com/news/202510291001.html',
    },
  ],
  // Hero rotator stills — operator-owned, mixed lanes.
  // When operator supplies the Natural History Showreel Vimeo URL, set heroVideoUrl below
  // and the hero will use the iframe instead of the rotator.
  hero: {
    rotator: [
      {
        src: '/img/bts-launching-mavic.jpg',
        alt: 'Barny silhouetted launching a Mavic 3 Cine over mist and golden-hour East African landscape',
      },
      {
        src: '/img/hero-1-drone-bob-poole.jpg',
        alt: 'DJI Inspire 2 silhouetted against East African sunrise above a kitted Land Rover Defender',
      },
      {
        src: '/img/hero-2-serval.jpg',
        alt: 'Serval cat in tall grass, long lens, direct eye contact',
      },
      {
        src: '/img/bts-elephants-sunset.jpg',
        alt: 'Aerial of elephant herd moving through Tsavo red-earth landscape at sundown',
      },
    ],
    // Natural History Reel 2024 — operator's actual showreel.
    // Vimeo ID 912593351 · 2:55 · uploaded 2024-02-13.
    videoUrl: 'https://player.vimeo.com/video/912593351?background=1&autoplay=1&muted=1&loop=1&autopause=0&playsinline=1' as string | null,
    title: 'Natural-history and aerial cinematography from Nairobi.',
    sub:
      'CAA-licensed drone operator and cinematographer for BBC NHU, Silverback Films, Plimsoll, Offspring, Nat Geo and Disney+. KFCB-registered fixer. 14+ countries. Established 2002.',
    cta: { label: 'See the work', href: '/work/' },
  },
};
