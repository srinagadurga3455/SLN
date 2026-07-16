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

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/siva-lalitha-nursery
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── /public
│   ├── logo.png
│   ├── /images
│   │   ├── hero-placeholder.jpg (Replace with actual aerial nursery photo)
│   │   ├── /gallery
│   │   └── /plants
│   └── /videos
│       └── nursery-aerial.mp4 (Optional: Add real drone footage)
├── /src
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── /data
│   │   └── plantsData.js      (Edit this to add/remove plants)
│   └── /components
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── HeroBackground.jsx  (Cinematic background with video/image support)
│       ├── About.jsx
│       ├── PlantsSection.jsx
│       ├── PlantCard.jsx
│       ├── ServicesSection.jsx
│       ├── Gallery.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── WhatsAppButton.jsx
└── README.md
```

## ✏️ How to Edit Plants

To add or remove plants, simply edit the `src/data/plantsData.js` file:

```javascript
{
  name: 'Mango',
  teluguName: 'మామిడి',
  category: 'fruit',
  image: '/images/plants/mango.jpg',
  description: 'King of fruits, various grafted varieties available'
}
```

**Categories available:**
- `ornamental` - Ornamental garden plants
- `flowering` - Flowering plants
- `fruit` - Fruit plants
- `avenue` - Avenue & landscaping trees
- `lawn` - Lawn grass & turf
- `bonsai` - Bonsai & indoor plants
- `hedge` - Hedge & border plants

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
