/**
 * PLANTS DATABASE
 * 
 * To add a new plant, simply add a new object to this array with:
 * - name: English name
 * - teluguName: Telugu name
 * - category: one of the predefined categories below
 * - image: path to image (e.g., '/images/plants/plantname.jpg')
 * - description: short description (optional)
 * 
 * Categories:
 * - ornamental
 * - flowering
 * - fruit
 * - avenue
 * - lawn
 * - bonsai
 * - hedge
 */

export const plantsData = [
  // Ornamental Garden Plants
  {
    name: 'Bougainvillea',
    teluguName: 'బోగన్విల్లా',
    category: 'ornamental',
    image: '/images/gallery/bouganvillea.jpg',
    description: 'Vibrant, colorful ornamental climber perfect for gardens and walls'
  },
  {
    name: 'Areca Palm',
    teluguName: 'అరికా',
    category: 'ornamental',
    image: '/images/gallery/Areca palm.jpg',
    description: 'Elegant palm for indoor and outdoor decoration'
  },

  // Flowering Plants
  {
    name: 'Rose',
    teluguName: 'గులాబీ',
    category: 'flowering',
    image: '/images/gallery/redrose.jpg',
    description: 'Classic garden favorite available in many colors'
  },

  // Avenue & Landscaping Trees
  {
    name: 'Alstonia (Devil Tree)',
    teluguName: 'అలస్టోనియా',
    category: 'avenue',
    image: '/images/gallery/alastonia.jpg',
    description: 'Tall evergreen tree with whorled leaves, ideal for avenues and landscaping'
  },

  // Bonsai & Indoor Plants
  {
    name: 'Ficus Bonsai',
    teluguName: 'ఫైకస్ బోన్సాయ్',
    category: 'bonsai',
    image: '/images/gallery/bonsai.jpg',
    description: 'Miniature tree art for indoor decoration'
  },

  // Hedge & Border Plants
  {
    name: 'Ficus Hedge',
    teluguName: 'ఫైకస్ కంచె',
    category: 'hedge',
    image: '/images/gallery/ficus.jpg',
    description: 'Dense evergreen hedge for formal gardens'
  },
  {
    name: 'Rosemary',
    teluguName: 'రోజ్మేరీ',
    category: 'hedge',
    image: '/images/gallery/rosemary.jpg',
    description: 'Aromatic herb perfect for borders and culinary use'
  },

  // Additional Plants (Show More)
  {
    name: 'Hibiscus',
    teluguName: 'మందారం',
    category: 'flowering',
    image: 'https://images.unsplash.com/photo-1570192823318-92ca4e1b5498?q=80&w=800&auto=format&fit=crop',
    description: 'Traditional flowering plant with large, showy blooms'
  },
  {
    name: 'Jasmine',
    teluguName: 'మల్లె',
    category: 'flowering',
    image: 'https://images.unsplash.com/photo-1599059611080-4dbb27e3ec0c?q=80&w=800&auto=format&fit=crop',
    description: 'Fragrant white flowers, sacred and decorative'
  },
  {
    name: 'Money Plant',
    teluguName: 'మనీ ప్లాంట్',
    category: 'ornamental',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop',
    description: 'Popular indoor climber believed to bring prosperity'
  },
  {
    name: 'Snake Plant',
    teluguName: 'పాము మొక్క',
    category: 'ornamental',
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb4?q=80&w=800&auto=format&fit=crop',
    description: 'Low-maintenance indoor plant with air-purifying qualities'
  },
  {
    name: 'Mango',
    teluguName: 'మామిడి',
    category: 'fruit',
    image: 'https://images.unsplash.com/photo-1605055693034-6f3a4bbb482f?q=80&w=800&auto=format&fit=crop',
    description: 'King of fruits, various grafted varieties available'
  },
  {
    name: 'Guava',
    teluguName: 'జామ',
    category: 'fruit',
    image: 'https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?q=80&w=800&auto=format&fit=crop',
    description: 'Easy-to-grow fruit tree with high vitamin C'
  },
  {
    name: 'Lemon',
    teluguName: 'నిమ్మకాయ',
    category: 'fruit',
    image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?q=80&w=800&auto=format&fit=crop',
    description: 'Essential citrus tree for every kitchen garden'
  },
  {
    name: 'Neem',
    teluguName: 'వేప',
    category: 'avenue',
    image: 'https://images.unsplash.com/photo-1615220368334-1e89c95b71dc?q=80&w=800&auto=format&fit=crop',
    description: 'Medicinal tree with natural pest-repelling properties'
  },
]

// Category configuration for display
export const categories = {
  ornamental: { name: 'Ornamental Plants', icon: '🌿' },
  flowering: { name: 'Flowering Plants', icon: '🌺' },
  fruit: { name: 'Fruit Plants', icon: '🥭' },
  avenue: { name: 'Avenue Trees', icon: '🌳' },
  lawn: { name: 'Lawn Grass', icon: '🌱' },
  bonsai: { name: 'Indoor & Bonsai', icon: '🪴' },
  hedge: { name: 'Hedge Plants', icon: '🎋' },
}
