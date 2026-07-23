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
    slug: "painting-by-moonlight-literally",
    title: "Painting by Moonlight, Literally",
    date: "June 2026",
    iso: "2026-06-14",
    topic: "Studio",
    excerpt:
      "For the Moon Rituals series I turned the studio lights off and let the work be judged by the only critic it was made for.",
    body: [
      "There is a long tradition of painters chasing the north light, and a much shorter tradition of painters turning all the lights off entirely. For the final passes on Milk of the Moon, I worked during the full moon with the studio dark and the skylight uncovered. Not for romance — for accuracy. A painting about moonlight that only works under gallery bulbs is a painting that lies.",
      "What I learned: moonlight is not blue. It is barely a colour at all — it is a permission. Values survive it; chroma mostly doesn't. The ivory column at the centre of the painting was repainted three times because under the moon it kept disappearing into its own background, being too polite about itself.",
      "I do not recommend this as a working method. I lost a good brush in the dark and drank a glass of water that turned out to be medium. But the painting stopped lying, and that was the assignment.",
    ],
  },
  {
    slug: "what-i-mean-when-i-say-intuition",
    title: "What I Mean When I Say Intuition",
    date: "May 2026",
    iso: "2026-05-02",
    topic: "Process",
    excerpt:
      "The least mystical thing in my practice is the part everyone assumes is the most mystical.",
    body: [
      "People imagine intuition as lightning — a message from elsewhere, arriving complete. In the studio it is much homelier than that. It is the accumulated pattern-memory of ten thousand hours of looking, surfacing as a feeling of wrongness about a rose madder that is two degrees too cool.",
      "I trust it the way you trust a very old dog. It does not explain itself, it is occasionally asleep, and it is almost never wrong about strangers. When a composition resists for days and then a voice with no vocabulary says lower the horizon, I have learned to just lower the horizon.",
      "The mystical part, if you want one, is this: the voice gets clearer the more you obey it. Every time I override it with cleverness, it goes quiet for a week. Every time I follow it, the next painting comes easier. Whatever that feedback loop is — craft, spirit, nervous system — I have stopped needing to name it. I just keep the channel open and the brushes clean.",
    ],
  },
  {
    slug: "a-defense-of-astrology-for-skeptics",
    title: "A Defence of Astrology, for Skeptics",
    date: "March 2026",
    iso: "2026-03-21",
    topic: "Astrology",
    excerpt:
      "You do not have to believe the planets arrange your life to understand why I paint them.",
    body: [
      "Here is what a birth chart actually is, stripped of everything contentious: a map of the sky at the moment you arrived, drawn according to rules older than most nations. It says — before anything else — you happened at a particular time, and the universe was doing something specific when you did. As a technology for making a single human life feel located, I know of nothing better.",
      "When I painted Saturn Return, I was not asserting a mechanism. I was marking a threshold the way people have always marked thresholds — with an image, made carefully, at some cost. The astrology gave me the occasion and the iconography. The painting did the rest.",
      "So no, I will not argue with your skepticism; some of my favourite collectors share it. The paintings do not require belief. They require only the thing astrology and art both traffic in, which is attention — to cycles, to timing, to the suspicion that your life has a shape and the shape has a sky over it.",
    ],
  },
  {
    slug: "the-cosmic-garden-is-coming",
    title: "The Cosmic Garden Is Growing",
    date: "February 2026",
    iso: "2026-02-08",
    topic: "Collections",
    excerpt:
      "Notes toward the next body of work: night-blooming, seed-scattered, and louder than anything I have made before.",
    body: [
      "Every series I have made until now has been quiet. The Cosmic Garden is not going to be. The first canvases are already refusing the studio's usual manners — vermilion where I planned dusk, seed-centres of raw ochre laid on thick enough to cast shadows. I keep stepping back and laughing, which historically is the best sign there is.",
      "The premise, if a garden can have one: the botanical and the astronomical are the same subject at different distances. A seed head and a star cluster are one drawing. A flower opening at night and a nebula are one event, patient and sudden at once.",
      "Two works from the series — The Night Bloom and Sleepwalker's Garden — are finished and in the gallery now. The rest are still becoming. If you want first word when they bloom, the letter below is where I whisper first.",
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
