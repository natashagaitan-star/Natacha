export type ArtworkStatus = "available" | "sold";

export type Artwork = {
  slug: string;
  title: string;
  collection: string;
  year: string;
  /** Where the work was created */
  place?: string;
  medium: string;
  /** e.g. 20 × 16 in */
  dimensions: string;
  dimensionsCm: string;
  /** Omitted = price on request (concierge acquisition) */
  price?: number;
  status: ArtworkStatus;
  /** Limited-edition archival print offering, if any */
  print?: { price: number; edition: number; size: string };
  image: string;
  /** width / height — used for layout + CLS-safe sizing */
  ratio: number;
  alt: string;
  /** One-line whisper shown in galleries */
  line: string;
  /** Artist statement, told on the work's page */
  story: string[];
  featured?: boolean;
};

export const artworks: Artwork[] = [
  {
    slug: "a-journey-into-his-mind",
    title: "A Journey Into His Mind",
    collection: "inner-landscapes",
    year: "2025",
    place: "Hawaiian Gardens, California",
    medium: "Acrylic on canvas",
    dimensions: "16 × 20 in",
    dimensionsCm: "40.6 × 50.8 cm",
    status: "available",
    image: "/art/a-journey-into-his-mind.jpg",
    ratio: 1600 / 1301,
    alt: "A vermilion starburst form with golden centres reaching across a deep cobalt field, beside a charcoal panel traced with dotted white pathways like the map of a mind.",
    line: "The invisible architecture of thought.",
    featured: true,
    story: [
      "A Journey Into His Mind is a visual exploration of consciousness, inner worlds, and the unseen forces that shape human experience.",
      "Through abstract symbolism and intuitive composition, the painting invites viewers to reflect on memory, perception, emotion, and the invisible architecture of thought.",
    ],
  },
  {
    slug: "the-pain-of-my-mother",
    title: "The Pain of My Mother",
    collection: "family-inheritance",
    year: "2023",
    place: "Laguna Beach, California",
    medium: "Oil on canvas",
    dimensions: "22 × 28 in",
    dimensionsCm: "55.9 × 71.1 cm",
    status: "available",
    image: "/art/the-pain-of-my-mother.jpg",
    ratio: 1235 / 1600,
    alt: "Black cats with amber eyes gathered in a golden halo above a tombstone marked R.I.P., a spilled red glass, and the word ENOUGH, in a storm of violet and grey oils.",
    line: "What is inherited, and what is released.",
    featured: true,
    story: [
      "The Pain of My Mother is an exploration of inheritance, grief, love, and the invisible emotional landscapes passed between generations.",
      "Through dreamlike symbolism and raw expression, the work confronts the complexity of the mother archetype — the relationship between creation and destruction, protection and pain, endings and rebirth.",
      "The piece exists as a visual release: a place where memory, shadow, and transformation meet.",
    ],
  },
  {
    slug: "father",
    title: "Father",
    collection: "family-inheritance",
    year: "2023",
    place: "Laguna Beach, California",
    medium: "Oil on canvas",
    dimensions: "20 × 24 in",
    dimensionsCm: "50.8 × 61 cm",
    status: "available",
    image: "/art/father.jpg",
    ratio: 1600 / 1213,
    alt: "A sunlit house held in a flowering tree on one side and a grey world of money, crosses, and broken hearts on the other, joined by one root system beneath.",
    line: "The worlds we come from, and the ones we build.",
    featured: true,
    story: [
      "Father is a reflection on origin, memory, and the emotional architecture of family.",
      "Through symbolic landscapes and opposing natural forces, the work examines the worlds we come from and the ones we ultimately create for ourselves.",
    ],
  },
  {
    slug: "its-a-boys-world",
    title: "It's a Boy's World",
    collection: "family-inheritance",
    year: "2024–2026",
    medium: "Oil on canvas",
    dimensions: "20 × 16 in",
    dimensionsCm: "50.8 × 40.6 cm",
    status: "available",
    image: "/art/its-a-boys-world.jpg",
    ratio: 1600 / 1227,
    alt: "A dense, playful field of games and creatures — a green face, tic-tac-toe marks, birds, a red heart, spirals and suns — crowded edge to edge in saturated colour.",
    line: "Some things are loved. Others are possessed.",
    story: [
      "Some things are loved. Others are possessed. The distance between the two can shape a lifetime.",
    ],
  },
  {
    slug: "only-human",
    title: "Only Human",
    collection: "marks-we-leave",
    year: "2024",
    place: "Laguna Beach, California",
    medium: "Oil on canvas",
    dimensions: "12 × 9 in",
    dimensionsCm: "30.5 × 22.9 cm",
    status: "available",
    image: "/art/only-human.jpg",
    ratio: 1600 / 1213,
    alt: "Pale handprints pressed into a midnight-violet field above, and a single deep-rose handprint pressed into a field of warm amber below.",
    line: "A hand raised to say: I was here.",
    featured: true,
    story: [
      "Only Human is an exploration of presence, expression, and the desire to be seen.",
      "Through the symbolism of the hand — a universal gesture of reaching, creating, and connecting — the work reflects the human declaration of existence: a reminder of identity, individuality, and the marks we leave behind.",
      "Contrasting fields of warmth and darkness create a meditation on duality: presence and absence, the physical and the spiritual, what we hold onto and what we release.",
    ],
  },
  {
    slug: "why-are-you-here",
    title: "Why Are You Here",
    collection: "marks-we-leave",
    year: "2023",
    place: "Laguna Beach, California",
    medium: "Oil on canvas",
    dimensions: "16 × 12 in",
    dimensionsCm: "40.6 × 30.5 cm",
    status: "available",
    image: "/art/why-are-you-here.jpg",
    ratio: 1600 / 1361,
    alt: "An open hand rising against washed violet, each finger becoming something else — a bird, a flame, a river, a tree growing from the fingertip.",
    line: "One of the oldest questions, asked in paint.",
    story: [
      "Why Are You Here explores one of humanity's oldest questions: existence, purpose, and the search for meaning.",
      "Through the symbolism of the human hand — our first tool of creation, connection, and expression — the work reflects the marks we leave behind and the unseen exchanges between ourselves and others.",
    ],
  },
  {
    slug: "heading-north",
    title: "Heading North",
    collection: "marks-we-leave",
    year: "2023",
    place: "Laguna Beach, California",
    medium: "Oil on canvas",
    dimensions: "12 × 9 in",
    dimensionsCm: "30.5 × 22.9 cm",
    status: "available",
    image: "/art/heading-north.jpg",
    ratio: 1600 / 1262,
    alt: "A single footprint in ocean blues and greens stepping across a field of burnished bronze, trailing warmth behind it.",
    line: "The quiet decision to keep walking.",
    story: [
      "Heading North is a meditation on movement, instinct, and the unseen guidance that carries us forward.",
      "The work explores the quiet decision to keep walking — transforming uncertainty into trust, and trusting the direction of one's own path.",
    ],
  },
  {
    slug: "youre-just-a-painting-on-my-wall-now",
    title: "You're Just a Painting on My Wall Now",
    collection: "love-loss",
    year: "2023",
    place: "Laguna Beach, California",
    medium: "Acrylic on canvas",
    dimensions: "20 × 16 in",
    dimensionsCm: "50.8 × 40.6 cm",
    status: "available",
    image: "/art/youre-just-a-painting-on-my-wall-now.jpg",
    ratio: 1600 / 1351,
    alt: "A warm amber world and a deep blue starfield divided across one canvas — rings interlocking, a red sun cooling, a small framed picture hanging quietly within the painting.",
    line: "What once undid me now hangs quietly.",
    story: [
      "An exploration of heartbreak, memory, and transformation.",
      "A reflection on the moment a person, a chapter, or a feeling that once defined us becomes something we can finally observe from a distance.",
    ],
  },
  {
    slug: "its-not-that-complicated",
    title: "It's Not That Complicated",
    collection: "love-loss",
    year: "2023",
    place: "Laguna Beach, California",
    medium: "Acrylic on canvas",
    dimensions: "20 × 16 in",
    dimensionsCm: "50.8 × 40.6 cm",
    status: "available",
    image: "/art/its-not-that-complicated.jpg",
    ratio: 1600 / 1179,
    alt: "A luminous heart of red and molten yellow filling a black field, ribbons of white and orange moving around it, small geometric forms waiting at the edges.",
    line: "Love was never the complicated part.",
    featured: true,
    story: [
      "It's Not That Complicated explores the contrast between the simplicity of love and the complexity of the human experience.",
      "Centred around a luminous heart surrounded by movement, geometric forms, and abstract symbolism, the painting examines the stories, fears, and emotional structures we build around something that may have always been simple.",
    ],
  },
  // ——— Photograph pending — uncomment when the photo of "Unbound" arrives ———
  // {
  //   slug: "unbound",
  //   title: "Unbound",
  //   collection: "inner-landscapes",
  //   year: "2025",
  //   place: "Laguna Beach, California",
  //   medium: "Acrylic on canvas",
  //   dimensions: "20 × 16 in",
  //   dimensionsCm: "50.8 × 40.6 cm",
  //   status: "available",
  //   image: "/art/unbound.jpg",
  //   ratio: 4 / 3,
  //   alt: "Unbound, an acrylic painting by Natasha Valentina.",
  //   line: "Beyond the worlds we are given.",
  //   story: [
  //     "Unbound is an exploration of liberation, transformation, and the invisible structures we move through.",
  //     "A reflection on breaking inherited patterns and discovering what exists beyond the worlds we are given, the work speaks to personal evolution, freedom, and the courage to create a new path.",
  //   ],
  // },
];

export const artworkBySlug = (slug: string) =>
  artworks.find((a) => a.slug === slug);

export const byCollection = (slug: string) =>
  artworks.filter((a) => a.collection === slug);

export const featured = artworks.filter((a) => a.featured);

export const available = artworks.filter((a) => a.status === "available");

export const sold = artworks.filter((a) => a.status === "sold");

export const prints = artworks.filter((a) => a.print);

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

export const countWord = (n: number) =>
  [
    "Zero", "One", "Two", "Three", "Four", "Five", "Six",
    "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
  ][n] ?? String(n);

export const related = (a: Artwork, n = 3) => {
  const sameCollection = artworks.filter(
    (x) => x.slug !== a.slug && x.collection === a.collection,
  );
  const rest = artworks.filter(
    (x) => x.slug !== a.slug && x.collection !== a.collection,
  );
  return [...sameCollection, ...rest].slice(0, n);
};
