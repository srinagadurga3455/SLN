# Gallery Images

## How to Add Your Photos

Replace the placeholder files with your actual project photos:

1. **araku-fest-1.jpg** - Replace with the roadside tree plantation photo (team planting trees)
2. **araku-fest-2.jpg** - Replace with the festival team photo (team with traditional performers)

## Image Requirements

- **Format:** JPG or JPEG
- **Size:** Recommended 1200x800 pixels
- **File Size:** Keep under 500KB (compress with TinyPNG if needed)
- **Naming:** Use lowercase with hyphens (e.g., project-name-1.jpg)

## Adding More Project Photos

To add more completed project photos:

1. Copy your image to this folder
2. Add it to the `projects` array in `src/components/Gallery.jsx`:

```javascript
{
  src: '/images/gallery/your-photo.jpg',
  alt: 'Description of the work',
  category: 'Public Work', // or 'Home Garden', 'Commercial', etc.
  description: 'Detailed description of the project'
}
```

The gallery will automatically show a "See More" button if you have more than 4 photos.
