# Siva Lalitha Nursery - Website

Modern, responsive one-page website for **SIVA LALITHA NURSERY** - Landscapers and Suppliers, located in Kadiyam, Andhra Pradesh.

## 🌿 About

A professional website built with React, Vite, and Tailwind CSS showcasing the nursery's plant collection and landscaping services. Features bilingual plant names (English and Telugu) for better local reach.

## 🚀 Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Helmet** - SEO meta tags

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Prerender all routes to static HTML (SEO)
npm run prerender

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/siva-lalitha-nursery
├── index.html               # Shell meta tags, fonts, favicon, LCP preconnects
├── package.json             # react-snap prerender config (SEO)
├── vite.config.js           # ES2019 build target (prerender-compatible)
├── vercel.json              # Vercel SPA rewrites + caching headers
├── /public
│   ├── robots.txt
│   ├── sitemap.xml          # All 40+ SEO URLs
│   ├── _redirects           # Netlify SPA fallback
│   ├── _headers             # Netlify caching
│   └── /images
│       ├── /plants          # Optimized WebP plant images (descriptive names)
│       ├── /gallery         # Project / gallery photos
│       └── ...
├── /scripts
│   └── optimize-images.mjs  # `npm run images:optimize` (WebP conversion)
└── /src
    ├── main.jsx             # HelmetProvider
    ├── App.jsx              # React Router + lazy-loaded pages
    ├── siteConfig.js        # Business NAP (name, address, phone) — edit here
    ├── Seo.jsx              # Per-page title/meta/OG/canonical/JSON-LD
    ├── structuredData.js    # LocalBusiness, Product, FAQ, Breadcrumb, Article, Service schema
    ├── /data
    │   ├── plantsData.js    # Plant catalog + care info (edit to add plants)
    │   ├── seoContent.js    # Category & service page copy (Kadiyam-focused)
    │   └── blogData.js      # Blog articles
    ├── /components          # Shared UI (Navbar, Footer, cards, FAQ, CTAs)
    └── /pages               # One component per URL route
```

## 🗺️ SEO Pages (routes)

| URL | Purpose |
|---|---|
| `/` | Home — hero, about, work, plants, services, FAQ, contact |
| `/plant-nursery-in-kadiyam` | Primary local landing page ("Plant Nursery in Kadiyam") |
| `/plants` | All plants hub |
| `/plants/:category` | Category pages (flower-plants, fruit-plants, indoor-plants, etc.) |
| `/plants/:plant` | Individual plant pages with care + FAQs + related plants |
| `/services`, `/services/landscaping` | Services + Landscaping in Kadiyam |
| `/wholesale-plants` | Wholesale plant nursery page |
| `/blog`, `/blog/:slug` | Blog index + articles |
| `/about`, `/contact`, `/faq` | Support pages |

## 🚀 SEO Features

- **Prerendered HTML** — `npm run prerender` (react-snap) generates static HTML for every route so Google sees full content without executing JS. Run it locally after `npm run build`; Vercel never runs it.
- **Per-page metadata** — every route sets unique title, meta description, canonical, Open Graph and Twitter cards via `src/Seo.jsx`.
- **Structured data** — LocalBusiness, Organization, WebSite, Product, Breadcrumb, FAQ and Article JSON-LD.
- **Sitemap + robots** — `sitemap.xml` lists every URL; `robots.txt` allows Google, Bing and AI engines.
- **Image optimization** — run `npm run images:optimize` to convert images to WebP.
- **Code splitting** — interior pages are lazy-loaded to keep the home bundle small.

## ✏️ How to Edit Plants

To add or remove plants, simply edit the `src/data/plantsData.js` file:

```javascript
{
  name: 'Mango',
  teluguName: 'మామిడి',
  category: 'fruit',
  categories: ['fruit', 'tree', 'outdoor', 'garden'],
  image: '/images/plants/mango.webp',
  description: 'King of fruits, various grafted varieties available',
  care: {
    sunlight: 'Full sun',
    watering: 'Water young trees weekly',
    soil: 'Deep, well-drained loamy soil',
    growth: 'Grows 3-8 m',
    bloom: 'Flowers in winter, fruit by summer',
    tips: 'Grafted varieties fruit in 3-4 years'
  },
  faqs: [{ q: 'Question?', a: 'Answer.' }]
}
```

The plant slug is auto-generated from the name, and its page, schema and
related-plant links update automatically. Re-run `npm run build` and
`npm run prerender` to regenerate the static pages and `npm run images:optimize`
for any new images.

**Categories available** (each maps to an SEO landing page):
`flowering`, `ornamental`, `fruit`, `avenue`, `indoor`, `outdoor`, `garden`,
`medicinal`, `tree`, `lawn`, `hedge`, `bonsai`

## 🎬 Hero Background

The hero section supports both video and image backgrounds with cinematic effects:

### To Add Real Drone Footage:
1. Place your video file in `/public/videos/nursery-aerial.mp4`
2. In `src/components/Hero.jsx`, uncomment the line:
   ```jsx
   videoSrc="/videos/nursery-aerial.mp4"
   ```
3. The video will:
   - Autoplay muted and loop
   - Pause when scrolled out of view (saves resources)
   - Fall back to image on mobile devices
   - Respect user's `prefers-reduced-motion` setting

### Current Setup (Image with Ken Burns Effect):
- Uses a placeholder aerial image with slow zoom/pan animation
- 80-second loop with gentle movement
- Automatic fallback for users with reduced motion preference
- Dark green gradient overlay for text readability

### Recommended Video Specs:
- Format: MP4 (H.264)
- Resolution: 1920x1080 or 1280x720
- Duration: 20-40 seconds (will loop)
- File size: Under 5MB (compress with HandBrake or similar)
- Frame rate: 24-30fps

## 🖼️ Adding Images

### Your Real Project Photos:
1. **Araku Festival Photos**: Place your actual photos here:
   - `/public/images/gallery/araku-fest-1.jpg` (Roadside tree plantation work)
   - `/public/images/gallery/araku-fest-2.jpg` (Team at festival venue)

2. **Plant Images**: Place plant images in `/public/images/plants/`
3. **Other Gallery Photos**: Add more project photos in `/public/images/gallery/`
4. **Hero Background**: Replace `/public/images/hero-background.jpg` with aerial nursery shot

### Image Optimization Tips:
- Compress images before uploading (use TinyPNG or similar)
- Recommended size: Gallery images 1200x800px, Plant images 800x600px
- Format: JPG for photos, PNG for images with transparency
- Keep file sizes under 500KB for fast loading

## 🎨 Design System

### Colors
- **Leaf Green**: #2D5016 (main brand color)
- **Soil Brown**: #4A3426 (secondary)
- **Marigold**: #E8930C (accent - calls to action)
- **Clay**: #F8F6F2 (background)

### Typography
- **Display (Headings):** Merriweather (serif)
- **Body (Text):** Inter (sans-serif)

### Signature Elements
- **Plant Tags**: Cards styled like nursery pot labels with orange accent strip
- **Leaf Vein Dividers**: Subtle decorative element under section headings
- **Ken Burns Effect**: Slow, cinematic zoom/pan on hero background

## 📱 Features

- ✅ Fully responsive design (mobile-first)
- ✅ Bilingual plant names (English + Telugu)
- ✅ Click-to-call buttons (prominent)
- ✅ Floating WhatsApp button
- ✅ Contact form with WhatsApp integration
- ✅ Google Maps integration
- ✅ SEO optimized
- ✅ Cinematic hero with video/image support
- ✅ Accessibility: respects reduced motion preferences
- ✅ Performance: lazy loading, video pause when off-screen

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `dist`

## 📞 Contact Information

**Phone Numbers:**
- +91 95028 35577 (Primary)
- +91 97053 68999
- +91 94933 41557

**WhatsApp:** +91 95028 35577

**Email:** nagu.kamireddy999@gmail.com

**Location:** Veeravaram Road, Kadiyam, E.G. Dist, Andhra Pradesh

**Owner:** Kamireddy Nagu

## 🎯 Performance Tips

1. Compress all images before uploading (use TinyPNG or similar)
2. Keep video files under 5MB
3. Use WebP format for images when possible
4. The hero background automatically optimizes based on device:
   - Desktop: Video (if provided) or animated image
   - Mobile: Static image (saves bandwidth)
   - Reduced motion: Static image (respects accessibility)

## 📄 License

© 2024 Siva Lalitha Nursery. All rights reserved.

---

Made with care for Kadiyam's green spaces 🌱
