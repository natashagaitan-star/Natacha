export type Collection = {
  slug: string;
  title: string;
  /** Short poetic line shown under the title */
  line: string;
  /** Longer curatorial note for the collection page */
  note: string;
};

export const collections: Collection[] = [
  {
    slug: "celestial",
    title: "Celestial",
    line: "Star maps, returning planets, and the comfort of vast things.",
    note: "The Celestial works began as a way of keeping time. Each painting holds a sky that existed once — a transit, a return, a night worth remembering — rendered not as astronomy but as feeling. These are skies you have stood beneath without knowing their names.",
  },
  {
    slug: "divine-feminine",
    title: "Divine Feminine",
    line: "The body as vessel, the vessel as altar.",
    note: "These figures are not portraits. They are the shapes women make when no one is watching — holding, carrying, resting, rising. Painted in clay and rose against the dark, they honour the quiet authority of intuition and the sacredness of simply being a body in the world.",
  },
  {
    slug: "dream-state",
    title: "Dream State",
    line: "What the sleeping mind keeps, and what it lets go.",
    note: "Painted in the hour after waking, before the dream dissolves. The Dream State works are attempts at honesty with a language that resists it — soft fields, floating forms, doors that open onto weather. Nothing here is invented. All of it was seen, briefly.",
  },
  {
    slug: "sacred-nature",
    title: "Sacred Nature",
    line: "Rivers that know the way. Trees that listen.",
    note: "Nature painted not as landscape but as relative — older, patient, faintly amused. These works come from long walks taken slowly, from sitting with a single tree until it stopped being scenery. The land holds memory. These paintings are receipts.",
  },
  {
    slug: "cosmic-garden",
    title: "Cosmic Garden",
    line: "Night-blooming things beneath a dotted sky.",
    note: "The Cosmic Garden grows where the astronomical and the botanical refuse to stay separate — flowers with the gravity of suns, seeds arranged like constellations. It is the most joyful ground in the studio: saturated, generous, a little wild, painted with the windows open.",
  },
  {
    slug: "moon-rituals",
    title: "Moon Rituals",
    line: "Phases, offerings, and the discipline of soft light.",
    note: "A devotional series. Each work marks a phase — not just of the moon, but of a life lived in cycles rather than lines. Milk light, ivory circles, the patience of waxing and the mercy of waning. These paintings are quietest in the collection, and they know it.",
  },
];

export const collectionBySlug = (slug: string) =>
  collections.find((c) => c.slug === slug);
