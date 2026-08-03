/**
 * Blog articles — SEO-ready starter content targeting
 * home gardening, flowering plants, fruit plants, gardening tips,
 * landscaping ideas and seasonal planting.
 */

const article = (data) => ({
  image: data.image || '/images/gallery/logo.jpeg',
  author: 'Siva Lalitha Nursery',
  ...data,
})

export const blogPosts = [
  article({
    slug: 'best-plants-for-home-garden',
    title: 'Best Plants for Home Garden in Andhra Pradesh (2026 Guide)',
    metaDescription:
      'Discover the best plants for home gardens in Andhra Pradesh — flowering, fruit, herbs and shade plants that thrive in the coastal climate of Kadiyam.',
    publishedAt: '2026-01-12',
    updatedAt: '2026-07-20',
    category: 'Garden Plants',
    excerpt:
      'Not sure what to plant in your Andhra Pradesh garden? Here are the flowering plants, fruit trees, herbs and ornamentals that thrive in Kadiyam\'s warm, humid climate.',
    keywords: 'best plants for home garden, home garden plants Kadiyam, garden plants Andhra Pradesh',
    sections: [
      { heading: 'Start with what thrives in your climate', body: 'Kadiyam and the East Godavari region enjoy a warm, humid tropical climate with good rainfall. The best home garden plants here are sun-loving, heat-tolerant species that establish quickly during the monsoon. At Siva Lalitha Nursery we recommend matching plants to your space — sunny terrace, shaded balcony or open garden.' },
      { heading: 'Flowering plants for year-round color', body: 'Roses, hibiscus and jasmine flower generously in Andhra Pradesh homes. Bougainvillea covers walls in vibrant color with minimal care, while marigolds and other seasonal annuals keep flower beds lively through the monsoon. Planting a mix of shrubs and annuals gives you blooms in every season.' },
      { heading: 'Fruit plants for a home orchard', body: 'Grafted mango, lemon and guava are the best fruit plants for Andhra Pradesh home gardens. Grafted varieties bear fruit in 3-4 years instead of 8-10, and a dwarf lemon grows happily in a large pot on a terrace. Papaya and pomegranate are two more easy winners.' },
      { heading: 'Herbs and medicinal plants in the kitchen garden', body: 'Tulsi, curry leaf, coriander, mint and aloe vera grow easily in Kadiyam home gardens. These low-maintenance plants give you fresh, chemical-free ingredients and home remedies right outside the kitchen door.' },
      { heading: 'Buying healthy plants from a nursery', body: 'Healthy saplings have firm stems, glossy leaves and no visible pests. Visit Siva Lalitha Nursery on Veeravaram Road, Kadiyam, and our team will help you choose plants suited to your sunlight and space — with honest care advice included.' },
    ],
    faqs: [
      { q: 'What is the easiest plant to grow at home in Andhra Pradesh?', a: 'Marigold, hibiscus, money plant and curry leaf are among the easiest, most forgiving plants for Andhra Pradesh homes — they tolerate heat and need minimal fuss.' },
      { q: 'Which fruit plant grows fastest at home?', a: 'Grafted papaya and lemon are among the fastest-fruiting plants for home gardens, often producing within the first year or two.' },
    ],
  }),
  article({
    slug: 'top-flowering-plants',
    title: 'Top Flowering Plants for Andhra Pradesh Gardens',
    metaDescription:
      'The top flowering plants for Andhra Pradesh — rose, hibiscus, jasmine, bougainvillea and more. Best picks for gardens in Kadiyam from Siva Lalitha Nursery.',
    publishedAt: '2026-02-03',
    updatedAt: '2026-07-20',
    category: 'Flower Plants',
    excerpt:
      'From fragrant jasmine to vibrant bougainvillea, these are the flowering plants that give Andhra Pradesh gardens their signature color and scent.',
    keywords: 'top flowering plants, flowering plants Andhra Pradesh, best flower plants Kadiyam',
    sections: [
      { heading: 'Why flower plants belong in every garden', body: 'Flowering plants add color, fragrance and life to any outdoor space, and attract bees and butterflies that keep the garden ecosystem healthy. In Andhra Pradesh\'s warm climate, most flowering plants bloom generously with the right sun and water.' },
      { heading: 'Roses — the classic choice', body: 'Roses are the most loved flowering plant in Indian gardens. Hybrid tea and desi rose varieties both do well in Kadiyam. Give them six hours of sun, prune after flowering, and feed with organic manure monthly for continuous blooms.' },
      { heading: 'Hibiscus and jasmine for puja and fragrance', body: 'Hibiscus flowers are essential for daily puja and traditional hair care, while jasmine (malle) fills the evening garden with fragrance. Both are hardy, pest-resistant and bloom through most of the year.' },
      { heading: 'Bougainvillea for walls and boundaries', body: 'Bougainvillea is the workhorse of Andhra Pradesh gardens — it covers walls, fences and pergolas in brilliant color with almost no care. Water it less and give it full sun for the brightest display.' },
      { heading: 'Seasonal annuals for continuous blooms', body: 'Marigolds, zinnias and balsam keep beds colorful through the monsoon. Sow or buy seedlings at the start of the rainy season at Kadiyam nurseries for a spectacular show.' },
    ],
    faqs: [
      { q: 'Which flowering plant blooms all year in India?', a: 'Hibiscus, rose and bougainvillea bloom throughout the year in Indian climates, making them the best choices for continuous garden color.' },
      { q: 'Which flower plant is best for fragrance?', a: 'Jasmine (malle) is the most fragrant flowering plant for Andhra Pradesh gardens, especially in the summer evenings when its blooms open.' },
    ],
  }),
  article({
    slug: 'best-fruit-plants',
    title: 'Best Fruit Plants to Grow in Kadiyam — Grafted Mango, Lemon & More',
    metaDescription:
      'Best fruit plants for Kadiyam and East Godavari — grafted mango, lemon, guava and sapota. Fast-bearing saplings at Siva Lalitha Nursery.',
    publishedAt: '2026-03-10',
    updatedAt: '2026-07-20',
    category: 'Fruit Plants',
    excerpt:
      'Grow your own mango, lemon and guava. A practical guide to the best fruit plants for Kadiyam\'s climate and why grafted varieties win.',
    keywords: 'best fruit plants Kadiyam, fruit tree saplings, grafted mango',
    sections: [
      { heading: 'Why Kadiyam is ideal for fruit plants', body: 'Kadiyam\'s hot summers, warm winters and reliable monsoon make it one of the best places in Andhra Pradesh to grow tropical fruit. Local nurseries like ours have perfected grafted saplings that are suited to the district\'s soil and water.' },
      { heading: 'Grafted mango — start with the king', body: 'Banginapalli and Rasalu are the popular grafted mango varieties around Kadiyam. Grafting means the tree inherits the parent\'s fruit quality and starts bearing in 3-4 years. Plant in full sun with plenty of space to grow.' },
      { heading: 'Lemon and guava — easy annual fruiters', body: 'Lemon trees fruit several times a year and do well in large pots. Guava is almost indestructible and gives two harvests annually. Both are excellent first fruit trees for new gardeners.' },
      { heading: 'Space-saving fruit plants for small gardens', body: 'Dwarf varieties of lemon, papaya and pomegranate grow happily in containers, making fruit gardening possible even on terraces and balconies in Rajamahendravaram and Kadiyam.' },
      { heading: 'Care basics for healthy fruit trees', body: 'Fruit trees need full sun, regular watering while young, and yearly organic feeding. Mulching retains soil moisture and prevents weeds. Ask our nursery team about irrigation for orchard-scale planting.' },
    ],
    faqs: [
      { q: 'How long does a grafted mango tree take to bear fruit?', a: 'A grafted mango tree typically starts bearing fruit in 3-4 years, compared to 8-10 years for a seed-grown tree.' },
      { q: 'Can fruit plants grow in pots on a terrace?', a: 'Yes — dwarf lemon, papaya, pomegranate and guava all grow well in large pots (18-24 inches) on terraces with full sunlight and regular feeding.' },
    ],
  }),
  article({
    slug: 'gardening-tips',
    title: 'Gardening Tips for Beginners in Kadiyam (Easy-to-Follow Guide)',
    metaDescription:
      'Beginner gardening tips for Kadiyam — soil prep, watering, sunlight, organic fertilizer and pest control for a thriving Andhra Pradesh garden.',
    publishedAt: '2026-04-05',
    updatedAt: '2026-07-20',
    category: 'Gardening Tips',
    excerpt:
      'New to gardening? These practical, no-nonsense tips on soil, watering, sunlight and feeding will help you grow a healthy garden in Kadiyam.',
    keywords: 'gardening tips, beginner gardening Kadiyam, home garden tips Andhra Pradesh',
    sections: [
      { heading: 'Know your soil', body: 'Most Kadiyam soils drain reasonably well but benefit from added compost and organic matter. Dig in decomposed cow dung or compost before planting, and keep beds slightly raised for better drainage during the monsoon.' },
      { heading: 'Water at the right time', body: 'Water early morning or late evening to reduce evaporation in the summer heat. Deep, less-frequent watering builds stronger roots than light daily sprinkling. Mulch with dried leaves to hold moisture.' },
      { heading: 'Match plants to sunlight', body: 'Sun-loving flowering plants need 6+ hours of direct sun, while ferns and areca palms prefer shade. Observe how sunlight moves across your garden before deciding where each plant goes.' },
      { heading: 'Feed organically, seasonally', body: 'Use compost, vermicompost and cow dung manure every 2-3 months. Neem cake keeps the soil healthy and discourages pests naturally — perfect for Kadiyam gardens.' },
      { heading: 'Prune and deadhead regularly', body: 'Removing spent flowers (deadheading) pushes plants to bloom again. Prune roses and hedges after flowering seasons to keep plants compact and productive.' },
    ],
    faqs: [
      { q: 'How often should I water my garden in summer?', a: 'In Kadiyam\'s summer, water daily in the early morning or evening. Mulching and partial shade for sensitive plants reduce water stress significantly.' },
      { q: 'What is the best organic fertilizer for home gardens?', a: 'Decomposed cow dung compost and vermicompost are the best all-round organic fertilizers for home gardens, with neem cake to keep pests away.' },
    ],
  }),
  article({
    slug: 'landscaping-ideas',
    title: 'Landscaping Ideas for Kadiyam Homes & Farmhouses',
    metaDescription:
      'Landscaping ideas for Kadiyam — lawns, hedges, avenue trees and water-wise garden designs from Siva Lalitha Nursery\'s project experience.',
    publishedAt: '2026-05-15',
    updatedAt: '2026-07-20',
    category: 'Landscaping',
    excerpt:
      'From manicured lawns to avenue tree-lined driveways — practical landscaping ideas inspired by projects our team has delivered across Andhra Pradesh.',
    keywords: 'landscaping ideas, garden design Kadiyam, landscape design Andhra Pradesh',
    sections: [
      { heading: 'Start with a plan, not a purchase', body: 'Great landscapes begin on paper. Map your garden\'s sunlight, drainage and existing trees before choosing plants. A simple plan saves money and prevents costly mistakes later.' },
      { heading: 'Frame the space with hedges', body: 'Formal ficus hedges define boundaries and create a clean, structured look, while rosemary borders add fragrance along pathways. Hedges also provide privacy without walls.' },
      { heading: 'Add height with avenue trees', body: 'Alstonia and neem line driveways with dignified shade, as we did for roadside plantation projects. Choose non-invasive species and plant them away from structures and drains.' },
      { heading: 'Lawn as the centrepiece', body: 'A Mexican or Pearl grass lawn anchors the garden and cools the surrounding air. Level the ground, enrich the soil and lay turf in the monsoon for the fastest establishment.' },
      { heading: 'Water-wise landscaping', body: 'Group plants by water needs, use drip irrigation for flower beds and trees, and let drought-tolerant species like bougainvillea and neem take care of dry corners.' },
    ],
    faqs: [
      { q: 'How much does it cost to landscape a small garden in Kadiyam?', a: 'Costs vary with garden size and plant selection. Contact Siva Lalitha Nursery for a free site assessment and transparent quote — we handle everything from design to planting.' },
      { q: 'What makes a good farm house landscape?', a: 'A good farm house landscape balances lawns, native trees, flowering beds and functional zones (entrance, seating, kitchen garden) while using low-maintenance, climate-suited plants.' },
    ],
  }),
  article({
    slug: 'seasonal-plants',
    title: 'Seasonal Plants for Kadiyam — What to Plant Each Season',
    metaDescription:
      'A season-by-season planting calendar for Kadiyam — monsoon flowering plants, winter vegetables, summer fruit trees and more from Siva Lalitha Nursery.',
    publishedAt: '2026-06-20',
    updatedAt: '2026-07-20',
    category: 'Seasonal Plants',
    excerpt:
      'A practical planting calendar for Kadiyam: what to plant in the monsoon, winter and summer so your garden looks good and yields well all year.',
    keywords: 'seasonal plants, planting calendar Kadiyam, monsoon plants Andhra Pradesh',
    sections: [
      { heading: 'Monsoon (June–September): the golden window', body: 'The rainy season is the best time to plant in Kadiyam. Flowering annuals like marigold and balsam, fruit saplings, and lawns all establish quickly in natural moisture. Trees planted now have months of rain ahead to settle roots.' },
      { heading: 'Winter (October–February): flowers and vegetables', body: 'Winter brings roses, chrysanthemums, and fragrant jasmine at their best. It is also the season for vegetables like tomato, brinjal, chilli and leafy greens, plus the flowering of many grafted fruit trees that leads to a summer harvest.' },
      { heading: 'Summer (March–May): prepare and protect', body: 'Summer is for planting heat-loving bougainvillea, hibiscus and drought-tolerant trees like neem. Deep mulch, shade nets for young plants, and early-morning watering keep the garden alive through the peak heat.' },
      { heading: 'Year-round essentials', body: 'Tulsi, aloe vera, curry leaf and areca palm grow year-round in Kadiyam. Building a base of evergreens keeps your garden looking full even between seasonal flowerings.' },
      { heading: 'Buy season-ready plants locally', body: 'For healthy, climate-acclimatised plants each season, visit Siva Lalitha Nursery on Veeravaram Road, Kadiyam. We stock seasonal flowering plants and advise on what to plant next.' },
    ],
    faqs: [
      { q: 'Which season is best for planting trees in Andhra Pradesh?', a: 'The monsoon (June-September) is the best time to plant trees in Andhra Pradesh because natural rainfall helps them establish strong roots before summer.' },
      { q: 'What can I plant in the winter in Kadiyam?', a: 'Winter is ideal for roses, chrysanthemums, jasmine, and vegetable crops like tomato, chilli and leafy greens in Kadiyam gardens.' },
    ],
  }),
]

export const getBlogPostBySlug = (slug) =>
  blogPosts.find((post) => post.slug === slug) || null
