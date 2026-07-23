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
    slug: "family-inheritance",
    title: "Family & Inheritance",
    line: "The worlds we come from, and the ones we make.",
    note: "These are the hardest rooms in the house, painted anyway. Fathers, mothers, childhood — the emotional architecture we are handed before we can read the blueprints. The works in this collection use houses, roots, storms, and symbols to say what family rarely says out loud. They were painted as release, and they read that way: honest, unguarded, and finally at peace with being seen.",
  },
  {
    slug: "love-loss",
    title: "Love & Loss",
    line: "What the heart builds, keeps, and finally lets go.",
    note: "A heart painted the size of the canvas, because that is the size it feels. These works trace the full arc — the luminous simplicity of love, the structures we build around it, and the strange afternoon when what once undid you becomes something you can look at calmly, the way you look at a painting on a wall.",
  },
  {
    slug: "marks-we-leave",
    title: "The Marks We Leave",
    line: "Hands, footprints, and the proof of being here.",
    note: "The oldest art on Earth is a handprint on a cave wall, and this collection stands in that lineage without apology. Hands pressed into warmth and darkness, a footprint mid-step, fingers that flower into other lives — each work is a declaration of presence. I was here. I touched things. I kept walking.",
  },
  {
    slug: "inner-landscapes",
    title: "Inner Landscapes",
    line: "The invisible architecture of thought.",
    note: "Maps of places that exist only from the inside. These works chart consciousness the way older painters charted coastlines — dotted pathways, rooms of feeling, weather systems of memory and perception. They are painted intuitively and read intuitively: you do not decode them, you recognise them.",
  },
];

export const collectionBySlug = (slug: string) =>
  collections.find((c) => c.slug === slug);
