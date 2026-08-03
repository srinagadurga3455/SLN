/**
 * PLANTS DATABASE
 *
 * Categories used for SEO landing pages:
 *  - flowering, ornamental, fruit, avenue, indoor, outdoor, garden,
 *    medicinal, tree, lawn, hedge, bonsai
 *
 * Each plant may belong to several categories via `categories[]`
 * (the primary one is stored in `category` for backwards-compatible filters).
 */

const toSlug = (name) =>
  name.toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const plant = (data) => ({
  slug: toSlug(data.name),
  care: {
    sunlight: 'Full sun to partial shade',
    watering: 'Water regularly, keep soil moist but not waterlogged',
    soil: 'Well-drained garden soil mixed with compost',
    growth: 'Varies by variety',
    ...(data.care || {}),
  },
  faqs: [],
  related: [],
  ...data,
})

export const plantsData = [
  // Flowering Plants
  plant({
    name: 'Rose',
    teluguName: 'గులాబీ',
    category: 'flowering',
    categories: ['flowering', 'garden', 'outdoor', 'ornamental'],
    image: '/images/plants/rose.webp',
    description: 'Classic garden favorite available in many colors — red, pink, yellow and white.',
    care: {
      sunlight: 'Minimum 6 hours of direct sunlight daily',
      watering: 'Water deeply 2-3 times a week; avoid wetting leaves',
      soil: 'Rich, loamy soil with good drainage and organic compost',
      growth: 'Grows 1.2-1.8 m tall depending on variety',
      bloom: 'Blooms through most of the year in Kadiyam climate',
      tips: 'Prune in early winter and feed with organic manure monthly for continuous flowering.',
    },
    faqs: [
      { q: 'Which rose variety is best for the Kadiyam climate?', a: 'Hybrid tea and desi (local) roses grow very well in Kadiyam’s warm climate. Desi roses are more disease-resistant and bloom profusely.' },
      { q: 'How often should roses be watered in summer?', a: 'Water daily during peak summer, preferably in the early morning. Mulch around the base to retain soil moisture.' },
    ],
  }),
  plant({
    name: 'Hibiscus',
    teluguName: 'దాసాని పువ్వు',
    category: 'flowering',
    categories: ['flowering', 'garden', 'outdoor', 'medicinal'],
    image: '/images/plants/hibiscus.webp',
    description: 'Vibrant red and pink blooms used in pujas, hair care and traditional remedies.',
    care: {
      sunlight: 'Full sun for best flowering',
      watering: 'Water daily in summer, alternate days in winter',
      soil: 'Well-drained loamy soil rich in organic matter',
      growth: 'Grows as a shrub up to 2-3 m',
      bloom: 'Flowers round the year',
      tips: 'Pinch growing tips to encourage bushy growth and more blooms.',
    },
    faqs: [
      { q: 'Is hibiscus a good plant for home gardens?', a: 'Yes. Hibiscus is easy to grow, flowers throughout the year and is an excellent choice for home gardens in Kadiyam.' },
    ],
  }),
  plant({
    name: 'Jasmine',
    teluguName: 'మల్లె',
    category: 'flowering',
    categories: ['flowering', 'garden', 'outdoor', 'ornamental'],
    image: '/images/plants/jasmine.webp',
    description: 'Fragrant white jasmine (malle) climber, prized for garlands and evening fragrance.',
    care: {
      sunlight: 'Full sun to partial shade',
      watering: 'Regular watering; keep soil evenly moist',
      soil: 'Sandy loam soil with good drainage',
      growth: 'Vigorous climber, can cover a trellis in one season',
      bloom: 'Blooms heavily in summer and monsoon',
      tips: 'Train on a trellis or fence and prune after each flowering cycle.',
    },
    faqs: [
      { q: 'When does jasmine bloom in Kadiyam?', a: 'Jasmine (malle) blooms mainly in summer and the monsoon months in Kadiyam, filling the garden with fragrance in the evenings.' },
    ],
  }),
  plant({
    name: 'Dasturi',
    teluguName: 'దస్తూరి',
    category: 'flowering',
    categories: ['flowering', 'medicinal', 'outdoor'],
    image: '/images/plants/dasturi.webp',
    description: 'Medicinal flowering plant with trumpet-shaped blooms.',
    care: {
      sunlight: 'Full sun',
      watering: 'Moderate watering',
      soil: 'Any well-drained soil',
      growth: 'Grows 1-1.5 m tall',
      bloom: 'Blooms during monsoon and winter',
    },
    faqs: [],
  }),
  plant({
    name: 'Bougainvillea',
    teluguName: 'బోగన్విల్లా',
    category: 'ornamental',
    categories: ['ornamental', 'flowering', 'outdoor', 'garden'],
    image: '/images/plants/bougainvillea.webp',
    description: 'Vibrant, colorful ornamental climber perfect for gardens, walls and boundaries.',
    care: {
      sunlight: 'Full sun (6+ hours) for intense color',
      watering: 'Water sparingly; let soil dry between waterings',
      soil: 'Any well-drained soil; thrives in slightly poor soil',
      growth: 'Fast-growing climber reaching 3-8 m',
      bloom: 'Blooms heavily in dry months',
      tips: 'Less water and more sun produce the brightest bracts.',
    },
    faqs: [
      { q: 'Why is my bougainvillea not flowering?', a: 'Bougainvillea flowers best when slightly stressed — reduce watering and ensure it gets at least 6 hours of direct sunlight daily.' },
    ],
  }),

  // Ornamental & Indoor
  plant({
    name: 'Areca Palm',
    teluguName: 'అరికా',
    category: 'indoor',
    categories: ['indoor', 'ornamental', 'garden'],
    image: '/images/plants/areca-palm.webp',
    description: 'Elegant indoor palm that purifies air and adds a tropical touch to homes and offices.',
    care: {
      sunlight: 'Bright, indirect light; keep away from harsh afternoon sun',
      watering: 'Keep soil slightly moist; mist leaves regularly',
      soil: 'Well-drained potting mix rich in organic matter',
      growth: 'Grows 2-3 m indoors over time',
      tips: 'Wipe leaves monthly to keep them dust-free and healthy.',
    },
    faqs: [
      { q: 'Is areca palm good for indoors?', a: 'Yes. Areca palm is one of the best indoor air-purifying plants and thrives in bright, indirect light inside homes and offices.' },
    ],
  }),
  plant({
    name: 'Ficus Bonsai',
    teluguName: 'ఫైకస్ బోన్సాయ్',
    category: 'bonsai',
    categories: ['indoor', 'bonsai', 'ornamental'],
    image: '/images/plants/ficus-bonsai.webp',
    description: 'Miniature tree art for indoor decoration.',
    care: {
      sunlight: 'Bright indirect light',
      watering: 'Water when topsoil feels dry',
      soil: 'Bonsai soil mix with good drainage',
      growth: 'Kept small by regular pruning and root trimming',
      tips: 'Repot every 2-3 years and trim roots to maintain the miniature form.',
    },
    faqs: [],
  }),
  plant({
    name: 'Ficus Hedge',
    teluguName: 'ఫైకస్ కంచె',
    category: 'hedge',
    categories: ['hedge', 'garden', 'outdoor', 'indoor'],
    image: '/images/plants/ficus-hedge.webp',
    description: 'Dense evergreen hedge for formal gardens and privacy screens.',
    care: {
      sunlight: 'Partial to full sun',
      watering: 'Regular watering until established',
      soil: 'Moist, fertile, well-drained soil',
      growth: 'Trims neatly into formal hedges 0.5-2 m',
      tips: 'Trim twice a year to keep a dense, formal shape.',
    },
    faqs: [],
  }),
  plant({
    name: 'Rosemary',
    teluguName: 'రోజ్మేరీ',
    category: 'hedge',
    categories: ['hedge', 'medicinal', 'garden', 'indoor'],
    image: '/images/plants/rosemary.webp',
    description: 'Aromatic herb perfect for borders, pots and culinary use.',
    care: {
      sunlight: 'Full sun',
      watering: 'Low water; let soil dry between waterings',
      soil: 'Well-drained, slightly alkaline soil',
      growth: 'Bushy herb up to 1 m',
      tips: 'Harvest sprigs regularly to encourage new growth.',
    },
    faqs: [],
  }),

  // Fruit Plants
  plant({
    name: 'Mango',
    teluguName: 'మామిడి',
    category: 'fruit',
    categories: ['fruit', 'tree', 'outdoor', 'garden'],
    image: '/images/plants/mango.webp',
    description: 'King of fruits. Grafted varieties (Banginapalli, Rasalu, Totapuri) bear fruit faster than seed-grown trees.',
    care: {
      sunlight: 'Full sun',
      watering: 'Water young trees weekly; reduce once established',
      soil: 'Deep, well-drained loamy soil',
      growth: 'Grafted trees grow 3-8 m; manageable with pruning',
      bloom: 'Flowers in winter, fruit by early summer',
      tips: 'Grafted mango trees from Kadiyam nurseries fruit in 3-4 years, not 8-10.',
    },
    faqs: [
      { q: 'Which grafted mango variety is best for Kadiyam?', a: 'Banginapalli and Rasalu (Banganapalle and Rasalu) are the most popular grafted varieties around Kadiyam — they fruit faster and taste excellent.' },
      { q: 'How long does a grafted mango tree take to fruit?', a: 'Grafted mango trees start bearing fruit in about 3-4 years, whereas seed-grown trees can take 8-10 years.' },
    ],
  }),
  plant({
    name: 'Lemon',
    teluguName: 'నిమ్మ',
    category: 'fruit',
    categories: ['fruit', 'garden', 'outdoor', 'medicinal'],
    image: '/images/plants/lemon.webp',
    description: 'High-yielding citrus tree with fruit used for juice, pickles and household remedies.',
    care: {
      sunlight: 'Full sun',
      watering: 'Regular watering; avoid waterlogging',
      soil: 'Well-drained soil, slightly acidic',
      growth: 'Grows 3-4 m',
      bloom: 'Flowers and fruits through the year',
      tips: 'Feed with citrus fertilizer in spring and monsoon.',
    },
    faqs: [
      { q: 'Can lemon trees grow in pots?', a: 'Yes. Dwarf lemon varieties grow well in large pots (18-24 inch) on terraces and balconies with full sunlight.' },
    ],
  }),
  plant({
    name: 'Guava',
    teluguName: 'జామ',
    category: 'fruit',
    categories: ['fruit', 'garden', 'outdoor', 'tree'],
    image: null,
    description: 'Hardy tropical fruit tree, easy to grow and rich in vitamin C.',
    care: {
      sunlight: 'Full sun',
      watering: 'Regular watering; drought tolerant once established',
      soil: 'Wide tolerance; best in well-drained soil',
      growth: 'Grows 3-6 m',
      bloom: 'Fruits twice a year',
    },
    faqs: [],
  }),

  // Avenue & Tree Plants
  plant({
    name: 'Alstonia (Devil Tree)',
    teluguName: 'అలస్టోనియా',
    category: 'avenue',
    categories: ['avenue', 'tree', 'outdoor', 'medicinal'],
    image: '/images/plants/alstonia.webp',
    description: 'Tall evergreen tree with whorled leaves, ideal for avenue planting and landscaping.',
    care: {
      sunlight: 'Full sun',
      watering: 'Moderate; drought tolerant once established',
      soil: 'Grows well in most soils',
      growth: 'Tall avenue tree up to 15-25 m',
      tips: 'Commonly used along roadsides for shade and clean vertical form.',
    },
    faqs: [],
  }),
  plant({
    name: 'Neem',
    teluguName: 'వేప',
    category: 'avenue',
    categories: ['avenue', 'medicinal', 'tree', 'outdoor'],
    image: '/images/plants/neem.webp',
    description: 'Medicinal tree with natural pest-repelling properties; a village pharmacy in a tree.',
    care: {
      sunlight: 'Full sun',
      watering: 'Low water once established',
      soil: 'Adapts to poor, sandy and dry soils',
      growth: 'Fast-growing tree up to 15-20 m',
      tips: 'Neem leaves and oil are natural pesticides for home gardens.',
    },
    faqs: [
      { q: 'What are the benefits of planting neem trees?', a: 'Neem provides dense shade, purifies the air, and its leaves, bark and oil have natural medicinal and pest-repelling properties.' },
    ],
  }),
]

// Category configuration for display & SEO routes
export const categories = {
  flowering: {
    name: 'Flower Plants',
    icon: '🌺',
    slug: 'flower-plants',
  },
  ornamental: {
    name: 'Ornamental Plants',
    icon: '🌿',
    slug: 'ornamental-plants',
  },
  fruit: {
    name: 'Fruit Plants',
    icon: '🥭',
    slug: 'fruit-plants',
  },
  avenue: {
    name: 'Avenue Plants',
    icon: '🌳',
    slug: 'avenue-plants',
  },
  indoor: {
    name: 'Indoor Plants',
    icon: '🪴',
    slug: 'indoor-plants',
  },
  outdoor: {
    name: 'Outdoor Plants',
    icon: '🌻',
    slug: 'outdoor-plants',
  },
  garden: {
    name: 'Garden Plants',
    icon: '🌼',
    slug: 'garden-plants',
  },
  medicinal: {
    name: 'Medicinal Plants',
    icon: '💚',
    slug: 'medicinal-plants',
  },
  tree: {
    name: 'Tree Plants',
    icon: '🌳',
    slug: 'tree-plants',
  },
  lawn: {
    name: 'Lawn Grass',
    icon: '🌱',
    slug: 'lawn-plants',
  },
  hedge: {
    name: 'Hedge Plants',
    icon: '🎋',
    slug: 'hedge-plants',
  },
  bonsai: {
    name: 'Bonsai Plants',
    icon: '🪴',
    slug: 'bonsai-plants',
  },
}

export const getPlantBySlug = (slug) =>
  plantsData.find((p) => p.slug === slug) || null

export const getPlantsByCategory = (categoryKey) =>
  plantsData.filter(
    (p) => p.category === categoryKey || (Array.isArray(p.categories) && p.categories.includes(categoryKey))
  )

export const getRelatedPlants = (plant, limit = 3) => {
  const related = plant.related.map(getPlantBySlug).filter(Boolean)
  if (related.length >= limit) return related.slice(0, limit)
  const sameCategory = plantsData
    .filter((p) => p.slug !== plant.slug && p.categories?.some((c) => plant.categories?.includes(c)))
    .slice(0, limit - related.length)
  return [...related, ...sameCategory]
}

export const categoriesWithPlants = Object.keys(categories)
  .filter((key) => getPlantsByCategory(key).length > 0)
  .map((key) => ({
    key,
    ...categories[key],
    plants: getPlantsByCategory(key),
  }))

export default plantsData
