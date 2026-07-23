export type Post = {
  slug: string;
  title: string;
  date: string;
  /** ISO date for <time> + metadata */
  iso: string;
  topic: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "the-symbols-that-keep-returning",
    title: "The Symbols That Keep Returning",
    date: "June 2026",
    iso: "2026-06-14",
    topic: "Process",
    excerpt:
      "Hands, hearts, houses, suns, pathways. I stopped choosing them years ago — now I just answer the door.",
    body: [
      "Every painter has a vocabulary, whether or not she chose it. Mine announced itself early and has never really changed: hands, hearts, houses, suns and moons, roots, pathways. For a while I worried this was repetition. Then I understood it is closer to a language — the same words, saying new things each time they are arranged.",
      "The hand came first. It is the oldest mark humans ever made on a wall, and it is still the most honest one. A hand says: I was here, I touched things, I reached for someone. When I pressed my own hands into the paint for Only Human, I was doing what someone did on a cave wall forty thousand years ago, for what I have to assume were the same reasons.",
      "The houses are always two houses — the one you came from and the one you are building. The hearts are always larger than anatomy allows, because feelings do not respect scale. And the pathways, dotted across dark panels like maps of thought, are there because I have never once known where I was going, and painting is how I walk anyway.",
    ],
  },
  {
    slug: "on-painting-family",
    title: "On Painting Family",
    date: "April 2026",
    iso: "2026-04-18",
    topic: "Studio",
    excerpt:
      "Father and The Pain of My Mother were the two hardest canvases I have ever finished. They were also the two that taught me why I paint.",
    body: [
      "There is a moment before you paint your family when you have to decide whether you are making art or making an accusation. I sat with blank canvases for a long time before Father and The Pain of My Mother, until I understood the difference: an accusation wants to be right, and a painting wants to be true.",
      "So the paintings hold everything at once, the way real families do. A house glowing in a flowering tree, and a grey world of crosses and money on the same canvas, sharing one root system. Grief and mothering in the same gold halo. I did not resolve those contradictions, because they are not resolvable. I just gave them somewhere to stand where they could finally be looked at.",
      "People ask if painting these was healing, and the honest answer is: not while it was happening. While it was happening it was just hard. The healing came later, and quietly — the first time I walked past The Pain of My Mother and felt not the pain, but the painting. That distance is small, and it is everything. It is the whole reason I make this work.",
    ],
  },
  {
    slug: "notes-from-three-studios",
    title: "Notes From Three Studios",
    date: "March 2026",
    iso: "2026-03-09",
    topic: "Studio",
    excerpt:
      "Laguna Beach taught me colour. Hawaiian Gardens taught me interiority. The work carries both now.",
    body: [
      "Almost everything from 2023 and 2024 was painted in Laguna Beach, with ocean light doing half the work. You can see it in those canvases — the blues are actual Pacific blues, the warmth is the actual late-afternoon warmth that comes off the hills. I did not fully understand how much the room paints alongside you until I left it.",
      "The 2025 works came from Hawaiian Gardens, a different California entirely — inland, ordinary, quiet. Without the ocean to look at, the work turned inward, and A Journey Into His Mind is what it found there: dotted corridors, rooms of thought, an architecture you cannot photograph because it only exists from the inside.",
      "I am painting somewhere new again now, and I have stopped being precious about it. The studio changes, the light changes, the work absorbs it all and keeps going. Wherever the easel stands, the subject has never really moved: it was always the interior weather, and that travels with me.",
    ],
  },
  {
    slug: "why-i-leave-the-words-in",
    title: "Why I Leave the Words In",
    date: "February 2026",
    iso: "2026-02-08",
    topic: "Process",
    excerpt:
      "Sometimes a painting needs a word the way a scream needs air. I've stopped painting over them.",
    body: [
      "If you look closely at some of my canvases you will find words in them — a plea, a name for what happened, sometimes just ENOUGH in letters that could not stay quiet. Early on I painted over them, because I thought fine art was supposed to be wordless. I do not believe that anymore.",
      "The words arrive at the same temperature as the paint. When a feeling is too direct for symbolism, it comes out as language, and sanding it away always felt like asking the painting to be more polite than the life that made it. The tradition agrees with me, from cave walls to Basquiat: when the mark needs to speak, let it.",
      "So now the words stay, half-buried, the way they are in a person. You find them the way you find anything true about someone — by standing close, and by looking a little longer than is comfortable.",
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
