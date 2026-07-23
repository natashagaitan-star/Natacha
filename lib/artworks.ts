export type ArtworkStatus = "available" | "sold";

export type Artwork = {
  slug: string;
  title: string;
  collection: string;
  year: number;
  medium: string;
  /** e.g. 36 × 48 in */
  dimensions: string;
  dimensionsCm: string;
  price: number;
  status: ArtworkStatus;
  /** Limited-edition archival print offering, if any */
  print?: { price: number; edition: number; size: string };
  image: string;
  /** width / height — used for layout + CLS-safe sizing */
  ratio: number;
  alt: string;
  /** One-line whisper shown in galleries */
  line: string;
  /** The story behind the piece, told on its page */
  story: string[];
  featured?: boolean;
};

export const artworks: Artwork[] = [
  {
    slug: "the-night-bloom",
    title: "The Night Bloom",
    collection: "cosmic-garden",
    year: 2026,
    medium: "Acrylic on canvas",
    dimensions: "36 × 48 in",
    dimensionsCm: "91 × 122 cm",
    price: 2600,
    status: "available",
    print: { price: 180, edition: 50, size: "18 × 24 in" },
    image: "/art/the-night-bloom.svg",
    ratio: 3 / 4,
    alt: "A vermilion flower with golden seed-centres blooming across a deep cobalt night ground scattered with dotted stars.",
    line: "Some flowers wait for the dark to open.",
    featured: true,
    story: [
      "This painting arrived the way the best ones do — all at once, and then very slowly. The flower came first, in a single evening: vermilion, urgent, taking up more of the canvas than politeness allows. The night around it took three months.",
      "I kept returning to the blue, deepening it, letting it hold the bloom the way night holds anything luminous — without comment. The gold centres are seeds and stars at the same time, because in the garden I was dreaming of, there is no difference.",
    ],
  },
  {
    slug: "she-holds-the-moon",
    title: "She Holds the Moon",
    collection: "divine-feminine",
    year: 2026,
    medium: "Acrylic and raw pigment on canvas",
    dimensions: "40 × 50 in",
    dimensionsCm: "102 × 127 cm",
    price: 3200,
    status: "available",
    image: "/art/she-holds-the-moon.svg",
    ratio: 4 / 5,
    alt: "A rose and clay coloured female figure cradling a glowing ochre moon against a midnight blue field.",
    line: "Not lifting it. Not keeping it. Holding it.",
    featured: true,
    story: [
      "The figure in this work is every woman I have watched carry something enormous as though it were ordinary. Her posture took the longest — I painted her arms eleven times. Too high and she was straining; too low and she was careless.",
      "The moon she holds is painted in seven layers of ochre and gold, so that it seems lit from inside. She is not illuminated by it. She is the reason it stays lit.",
    ],
  },
  {
    slug: "first-quarter",
    title: "First Quarter",
    collection: "moon-rituals",
    year: 2025,
    medium: "Acrylic on canvas",
    dimensions: "24 × 36 in",
    dimensionsCm: "61 × 91 cm",
    price: 1800,
    status: "sold",
    print: { price: 140, edition: 50, size: "12 × 18 in" },
    image: "/art/first-quarter.svg",
    ratio: 2 / 3,
    alt: "A vertical band of moon phases in ivory and lavender descending through a deep indigo sky pricked with stars.",
    line: "Halfway is a place worth marking.",
    story: [
      "Painted during a first-quarter moon, for the specific courage that phase asks of us — the moment when you have begun but cannot yet see the end. The phases descend the canvas like beads on a thread, each one a small promise.",
      "This was the first work in the Moon Rituals series, and it set the vow for all of them: soft light, honest intervals, no hurry.",
    ],
  },
  {
    slug: "saturn-return",
    title: "Saturn Return",
    collection: "celestial",
    year: 2025,
    medium: "Acrylic on canvas",
    dimensions: "48 × 48 in",
    dimensionsCm: "122 × 122 cm",
    price: 3600,
    status: "available",
    image: "/art/saturn-return.svg",
    ratio: 1,
    alt: "A great ochre ringed planet suspended in layered indigo darkness, its rings tilted like an open hand.",
    line: "Everything you built is about to be examined. Be glad.",
    featured: true,
    story: [
      "I began this square canvas the month I turned twenty-nine, which anyone who reads charts will understand immediately. Saturn asks hard questions and accepts no decorative answers, so I painted him plainly: one planet, one ring, one long dark.",
      "The rings are tilted at the angle of an open palm — an examination, but a kind one. This is the painting I stand in front of when I need to be told the truth.",
    ],
  },
  {
    slug: "the-dream-field",
    title: "The Dream Field",
    collection: "dream-state",
    year: 2026,
    medium: "Acrylic and soft pastel on canvas",
    dimensions: "36 × 28 in",
    dimensionsCm: "91 × 71 cm",
    price: 2200,
    status: "available",
    print: { price: 160, edition: 50, size: "18 × 14 in" },
    image: "/art/the-dream-field.svg",
    ratio: 9 / 7,
    alt: "Rose and terracotta blooms drifting untethered across a pale lavender and cream mist.",
    line: "Nothing here obeys gravity, and nothing minds.",
    story: [
      "There is a field I only ever visit asleep. The flowers there do not grow from the ground — they simply attend, hovering at whatever height suits them. I have tried to paint it four times. This is the attempt I kept.",
      "The mist is fourteen thin glazes of lavender over cream, sanded between layers until the surface feels like something remembered rather than seen.",
    ],
  },
  {
    slug: "river-of-knowing",
    title: "River of Knowing",
    collection: "sacred-nature",
    year: 2025,
    medium: "Acrylic on canvas",
    dimensions: "48 × 30 in",
    dimensionsCm: "122 × 76 cm",
    price: 2800,
    status: "sold",
    image: "/art/river-of-knowing.svg",
    ratio: 8 / 5,
    alt: "A deep indigo river winding through warm sand and clay landforms beneath a pale sky.",
    line: "The water was never lost. It was never even asked.",
    story: [
      "Rivers do not deliberate. They read the land once and commit. I painted this after a season of my own indecision, as an instruction to myself — the indigo channel cutting through all that warm, reasonable ground without apology.",
      "The collector who acquired this work wrote to say it hangs opposite her front door, so that leaving the house means walking toward the river. I could not have asked for a better wall.",
    ],
  },
  {
    slug: "venus-rising",
    title: "Venus Rising",
    collection: "divine-feminine",
    year: 2026,
    medium: "Acrylic and gold pigment on canvas",
    dimensions: "30 × 40 in",
    dimensionsCm: "76 × 102 cm",
    price: 2900,
    status: "available",
    image: "/art/venus-rising.svg",
    ratio: 3 / 4,
    alt: "A rose-toned figure ascending from dark water, crowned by a thin ring of gold against dusk lavender.",
    line: "She was not born from the sea. The sea was born from her.",
    featured: true,
    story: [
      "Every culture paints Venus arriving. I wanted the moment just before — the surface tension, the held breath of the water, the sky deciding what colour to be for the occasion.",
      "The halo is a single line of true gold pigment, laid on in one pass. You get one chance with a line like that. It took nine canvases of practice and then eleven seconds.",
    ],
  },
  {
    slug: "star-map-for-the-lost",
    title: "Star Map for the Lost",
    collection: "celestial",
    year: 2025,
    medium: "Acrylic on canvas",
    dimensions: "40 × 30 in",
    dimensionsCm: "102 × 76 cm",
    price: 2400,
    status: "available",
    print: { price: 160, edition: 75, size: "20 × 15 in" },
    image: "/art/star-map-for-the-lost.svg",
    ratio: 4 / 3,
    alt: "Constellations of ivory dots joined by fine gold threads across a field of deepest midnight blue.",
    line: "A chart for a sky that appears only when you need it.",
    story: [
      "The constellations in this painting do not exist. I invented each one for someone I love who was, at the time, lost in some particular way — a career, a grief, a city that had stopped fitting. Their initials are hidden in the star patterns. They know which is theirs.",
      "The connecting lines are gold thread-work done with a brush that has exactly eleven hairs. It is the most demanding painting I have ever made, and the quietest about it.",
    ],
  },
  {
    slug: "sleepwalkers-garden",
    title: "Sleepwalker's Garden",
    collection: "cosmic-garden",
    year: 2026,
    medium: "Acrylic on canvas",
    dimensions: "30 × 40 in",
    dimensionsCm: "76 × 102 cm",
    price: 2300,
    status: "available",
    image: "/art/sleepwalkers-garden.svg",
    ratio: 3 / 4,
    alt: "Dark garden foliage in deep greens and indigo, hung with glowing ochre orbs like lanterns or fruit.",
    line: "Planted by someone who was never awake to see it bloom.",
    story: [
      "As a child I walked in my sleep, and my grandmother — who did not believe in waking sleepwalkers — would simply follow me around her garden at a distance until I found my way back to bed. She said I always stopped at the same rosebush.",
      "The glowing orbs are whatever you need them to be: fruit, lanterns, small planets that lost their way. My grandmother would have called them roses and been done with it.",
    ],
  },
  {
    slug: "the-listening-tree",
    title: "The Listening Tree",
    collection: "sacred-nature",
    year: 2026,
    medium: "Acrylic on canvas",
    dimensions: "36 × 48 in",
    dimensionsCm: "91 × 122 cm",
    price: 2700,
    status: "available",
    image: "/art/the-listening-tree.svg",
    ratio: 3 / 4,
    alt: "A dark, wide-crowned tree against dusk indigo, its branches holding small ivory moons like fruit.",
    line: "Tell it anything. It has heard worse, and kept all of it.",
    story: [
      "There is a tree I have been talking to for six years. This is not a metaphor; it is a beech on the hill behind my studio, and it has heard more of my life than any person has.",
      "In the painting, its branches carry small moons instead of fruit — one for each year of our acquaintance. I will keep adding moons. The tree, I assume, will keep listening.",
    ],
  },
  {
    slug: "milk-of-the-moon",
    title: "Milk of the Moon",
    collection: "moon-rituals",
    year: 2026,
    medium: "Acrylic and raw pigment on canvas",
    dimensions: "40 × 50 in",
    dimensionsCm: "102 × 127 cm",
    price: 3400,
    status: "available",
    image: "/art/milk-of-the-moon.svg",
    ratio: 4 / 5,
    alt: "An immense ivory moon pouring a soft column of pale light into dark indigo water.",
    line: "Poured nightly. Free to anyone still awake.",
    featured: true,
    story: [
      "The generosity of moonlight is that it asks nothing. It pours whether you drink or not. I painted the column of light with milk-thin layers of ivory — thirty of them, maybe more; I stopped counting — until it held weight without losing softness.",
      "This is the largest work in the Moon Rituals series and the one I find hardest to be apart from. Whoever takes it home: leave a window uncovered for it now and then. It likes to compare notes.",
    ],
  },
  {
    slug: "between-two-dreams",
    title: "Between Two Dreams",
    collection: "dream-state",
    year: 2025,
    medium: "Acrylic on canvas",
    dimensions: "36 × 36 in",
    dimensionsCm: "91 × 91 cm",
    price: 2500,
    status: "sold",
    image: "/art/between-two-dreams.svg",
    ratio: 1,
    alt: "Two tall arched windows side by side, one opening onto deep night, the other onto a warm dawn.",
    line: "The corridor is short. You are always in it.",
    story: [
      "We wake briefly between dreams — a corridor a few seconds long with a door on either side. This painting is that corridor. One arch holds the dream you are leaving; the other, the dream that is waiting.",
      "I left the space between the windows almost empty, just breathing-room ivory, because that is what it feels like: a pause that belongs to no story at all. It sold to a couple who hung it in their bedroom, which is exactly right.",
    ],
  },
];

export const artworkBySlug = (slug: string) =>
  artworks.find((a) => a.slug === slug);

export const byCollection = (slug: string) =>
  artworks.filter((a) => a.collection === slug);

export const featured = artworks.filter((a) => a.featured);

export const available = artworks.filter((a) => a.status === "available");

export const prints = artworks.filter((a) => a.print);

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

export const related = (a: Artwork, n = 3) => {
  const sameCollection = artworks.filter(
    (x) => x.slug !== a.slug && x.collection === a.collection,
  );
  const rest = artworks.filter(
    (x) => x.slug !== a.slug && x.collection !== a.collection,
  );
  return [...sameCollection, ...rest].slice(0, n);
};
