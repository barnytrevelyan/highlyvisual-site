// Vimeo videos — operator-supplied URLs 2026-05-21 (overnight build session).
// All canonical IDs confirmed via Vimeo oEmbed.

export interface VimeoVideo {
  id: string;
  hash?: string;
  title: string;
  description: string;
  duration: number;
  uploadDate: string;
  thumbnail: string;
  category: 'showreel' | 'stock-teaser' | 'commercial' | 'conservation';
  url: string;
  // Background player URL — autoplays muted on loop with no controls for use as hero / card background
  backgroundUrl: string;
  // Standard embed URL — for case-study video sections (controls visible, click to play)
  embedUrl: string;
}

const playerUrl = (id: string, hash?: string, background = false) => {
  const params = new URLSearchParams();
  if (hash) params.set('h', hash);
  if (background) {
    params.set('background', '1');
    params.set('autoplay', '1');
    params.set('muted', '1');
    params.set('loop', '1');
    params.set('autopause', '0');
    params.set('playsinline', '1');
  }
  const qs = params.toString();
  return `https://player.vimeo.com/video/${id}${qs ? '?' + qs : ''}`;
};

export const heroShowreel: VimeoVideo = {
  id: '912593351',
  title: 'Natural History Reel 2024',
  description:
    "I've been privileged to work on some amazing projects in recent years — here are my filming highlights from just a few of them.",
  duration: 175,
  uploadDate: '2024-02-13',
  thumbnail: '/img/bts-launching-mavic.jpg',
  category: 'showreel',
  url: 'https://vimeo.com/user10135626/nh-showreel24',
  backgroundUrl: playerUrl('912593351', undefined, true),
  embedUrl: playerUrl('912593351'),
};

export const videos: VimeoVideo[] = [
  heroShowreel,
  {
    id: '795492631',
    title: 'Long Lens Archive Teaser',
    description:
      'Long-lens wildlife video archive — a 73-second walkthrough of telephoto coverage from across Kenya.',
    duration: 73,
    uploadDate: '2023-02-03',
    thumbnail: '/img/body-crested-crane.jpg',
    category: 'stock-teaser',
    url: 'https://vimeo.com/795492631',
    backgroundUrl: playerUrl('795492631', undefined, true),
    embedUrl: playerUrl('795492631'),
  },
  {
    id: '795508007',
    title: 'Aerial Stock Footage Teaser',
    description:
      "Aerial stock footage from Kenya — a 67-second walkthrough of the drone archive feeding stock.highlyvisual.com.",
    duration: 67,
    uploadDate: '2023-02-03',
    thumbnail: '/img/bts-elephants-aerial.jpg',
    category: 'stock-teaser',
    url: 'https://vimeo.com/795508007',
    backgroundUrl: playerUrl('795508007', undefined, true),
    embedUrl: playerUrl('795508007'),
  },
  {
    id: '1007171637',
    title: 'STE Collar Project',
    description:
      'Save the Elephants — collar project documentation. 4-minute observational piece on the conservation operation.',
    duration: 258,
    uploadDate: '2024-09-07',
    thumbnail: '/img/wildlife-amboseli-elephant.jpg',
    category: 'conservation',
    url: 'https://vimeo.com/1007171637',
    backgroundUrl: playerUrl('1007171637', undefined, true),
    embedUrl: playerUrl('1007171637'),
  },
  {
    id: '1004040980',
    hash: 'eba9cb36ec',
    title: 'Simon Kipsang — Going Solo with Wildlife Works',
    description:
      "Profile film for Wildlife Works' ranger Simon Kipsang — 91 seconds of solo-tracking conservation work in Tsavo.",
    duration: 91,
    uploadDate: '2024-08-29',
    thumbnail: '/img/bts-elephants-sunset.jpg',
    category: 'commercial',
    url: 'https://vimeo.com/1004040980/eba9cb36ec',
    backgroundUrl: playerUrl('1004040980', 'eba9cb36ec', true),
    embedUrl: playerUrl('1004040980', 'eba9cb36ec'),
  },
  {
    id: '1106721568',
    title: 'Kasas Kenya',
    description:
      'Charter · ACMI · Special Missions — solo-end-to-end commercial film for Kasas Air Charter.',
    duration: 153,
    uploadDate: '2025-08-02',
    thumbnail: '/img/sup-2-kasas-kenya.jpg',
    category: 'commercial',
    url: 'https://vimeo.com/1106721568',
    backgroundUrl: playerUrl('1106721568', undefined, true),
    embedUrl: playerUrl('1106721568'),
  },
  {
    id: '808308047',
    hash: 'a4c4c3dd40',
    title: 'Cheli & Peacock Mobile Safaris',
    description:
      'Brand film for Cheli & Peacock Mobile Safaris — 84-second piece on the safari operation\'s mobile-camp offering.',
    duration: 84,
    uploadDate: '2023-03-15',
    thumbnail: '/img/credit-cheli-peacock.jpg',
    category: 'commercial',
    url: 'https://vimeo.com/808308047/a4c4c3dd40',
    backgroundUrl: playerUrl('808308047', 'a4c4c3dd40', true),
    embedUrl: playerUrl('808308047', 'a4c4c3dd40'),
  },
];

export function getVideoById(id: string): VimeoVideo | undefined {
  return videos.find((v) => v.id === id);
}

export function getVideosByCategory(category: VimeoVideo['category']): VimeoVideo[] {
  return videos.filter((v) => v.category === category);
}

// Slug map — what videos play on which case-study pages
export const caseStudyVideos: Record<string, string> = {
  'kasas-kenya': '1106721568',
  'cheli-peacock': '808308047',
  'wildlife-works': '1004040980',
  'ste-collar-project': '1007171637',
};
