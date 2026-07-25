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
  {
    name: 'Dasturi',
    teluguName: 'దస్తూరి',
    category: 'flowering',
    image: '/images/gallery/dasturi.png',
    description: 'Medicinal flowering plant with trumpet-shaped blooms'
  },
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
    name: 'Neem',
    teluguName: 'వేప',
    category: 'avenue',
    image: '/images/gallery/Neem.jpg',
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
