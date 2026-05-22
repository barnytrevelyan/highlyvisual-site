// Verbatim testimonials from highlyvisual.com homepage carousel.
// Captured 2026-05-21 from operator-supplied screenshots of the live site.
// Operator-confirmed all six remain usable (intake Q5).

export interface Testimonial {
  id: string;
  speaker: string;
  role: string;
  production: string;
  distributor?: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'sally-thomson-iaj',
    speaker: 'Sally Thomson',
    role: "PD, 'Chasing the African Rains'",
    production: 'Incredible Animal Journeys',
    distributor: 'Nat Geo / Disney+',
    quote: "We worked with Barny for 'Incredible Animal Journeys' for Nat Geo/Disney+ (Emmy nominated). Barny captured some amazing material for us in Kenya and Tanzania of elephants, flamingo and zebra for the episode 'Chasing The African Rains'. I found his experience of working in with these animals invaluable. He was highly skilled at following the animals, flying close at times - but also taking care not to stress the animals or affect their behaviour. He worked with us both as part of a team and remotely and his drone work played an important part in helping to tell our stories in a visually exciting and immersive way.",
  },
  {
    id: 'sally-cryer-wild-babies',
    speaker: 'Sally Cryer',
    role: 'PD, Wild Babies',
    production: 'Wild Babies',
    distributor: 'Netflix',
    quote: "During the Covid lockdown Barny filmed some stunning drone aerials in Kenya for our elephant sequence in Netflix's Wild Babies. It was a unique opportunity to capture footage of these animals when they were at their most relaxed. Barny was extremely professional, liaising on our behalf with the Director of the park to gain a filming permit and organising his own travel, food and accommodation. When filming, Barny always kept the drone at a respectable distance from the wildlife and as well as the animals, he was also able to capture some spectacular scenics. At the end of each day Barny would methodically update production on his progress and send over highlights of his footage. It was a great pleasure working with Barny and I would thoroughly recommend him for wildlife filming – in particular as a highly-skilled drone operator.",
  },
  {
    id: 'tom-whitworth-fearless-chef',
    speaker: 'Tom Whitworth',
    role: 'Director, The Fearless Chef',
    production: 'The Fearless Chef / Extreme Chef',
    distributor: 'National Geographic · Channel 4',
    quote: "I've had the pleasure of working with Barny over the course of a ten part x 1hr/30min adventure cooking series, \"The Fearless Chef/Extreme Chef\" for National Geographic and Channel 4. He is an incredibly gifted and impressive drone pilot as well as timelapse and aerial photographer, who would always go the extra yard for the perfect shot. The series was far richer for his contributions, allowing us to widen the scope of our locations and material, and providing the edit with footage that was inherently cinematic. His work ethic is unparalleled too. I would highly recommend him!",
  },
  {
    id: 'kiran-jethwa-fearless-chef',
    speaker: 'Kiran Jethwa',
    role: 'Presenter, The Fearless Chef',
    production: 'The Fearless Chef',
    distributor: 'National Geographic',
    quote: "Barny is an incredible drone pilot who never misses a shot. The value of his accuracy when running tight timelines and in variable weather conditions is priceless. Professional, personable and punctual, would highly recommend him to anyone and the quality of his work is on full display on the hit Nat Geo series, The Fearless Chef.",
  },
  {
    id: 'barny-revill-earth-from-space',
    speaker: 'Barny Revill',
    role: 'Series Director, Earth From Space',
    production: 'BBC Earth From Space',
    distributor: 'BBC',
    quote: "Along with having a great name, Barny is a great drone operator. He gets it and delivers. Sounds easy but not always the case. And along with that he knows the lay of the land and can be invaluable in securing permits and permissions. He's a great person to have on your team.",
  },
  {
    id: 'lydia-baines-dynasties-2',
    speaker: 'Lydia Baines',
    role: 'Producer, Dynasties 2 — Elephant',
    production: 'Dynasties II',
    distributor: 'BBC',
    quote: "Barny did some remote drone filming for Elephant Dynasties in Kenya, and got some brilliant footage. He followed remote direction well and got some really key and special footage of our elephant family. I wouldn't hesitate to work with him again.",
  },
];

export function getTestimonialsByLane(lane: 'natural-history' | 'commercial' | 'all' = 'all'): Testimonial[] {
  if (lane === 'all') return testimonials;
  if (lane === 'commercial') return testimonials.filter((t) => t.production.includes('Fearless'));
  return testimonials.filter((t) => !t.production.includes('Fearless'));
}

export function getTestimonialBySlug(slug: string): Testimonial | undefined {
  const map: Record<string, string> = {
    'incredible-animal-journeys': 'sally-thomson-iaj',
    'wild-babies': 'sally-cryer-wild-babies',
    'dynasties-ii': 'lydia-baines-dynasties-2',
    'earth-from-space': 'barny-revill-earth-from-space',
    'the-fearless-chef': 'tom-whitworth-fearless-chef',
    'fearless-chef': 'kiran-jethwa-fearless-chef',
  };
  const id = map[slug];
  return testimonials.find((t) => t.id === id);
}
