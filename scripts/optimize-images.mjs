/**
 * Image optimization script.
 *
 * Converts all images in public/images to modern, compressed formats:
 *  - WebP + JPEG with responsive max-width
 *  - Source files are NOT deleted — optimized files use descriptive names
 *
 * Run: npm run images:optimize
 */
import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'

const IMAGE_DIRS = [
  'public/images/plants',
  'public/images/gallery',
  'public/images/Araku',
  'public/images/hyd-shankarapalli',
  'public/images/nirmal',
  'public/images/rjy',
  'public/images/extraas',
  'public/images/rem',
]

const SRC_EXT = ['.jpg', '.jpeg', '.png']

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(full)))
    } else {
      files.push(full)
    }
  }
  return files
}

async function main() {
  let optimized = 0
  let skipped = 0
  let failed = 0

  for (const dir of IMAGE_DIRS) {
    let files = []
    try {
      files = await walk(dir)
    } catch {
      continue
    }

    for (const file of files) {
      const ext = path.extname(file).toLowerCase()
      if (!SRC_EXT.includes(ext)) continue
      // Skip already-optimized outputs to avoid re-processing loops
      if (file.endsWith('.webp') || /\.opt\.(jpg|jpeg|png)$/.test(file)) continue

      const size = (await stat(file)).size
      try {
        const pipeline = sharp(file)
        const meta = await pipeline.metadata()

        // Resize longest edge to 800px for display images; keep hero/gallery up to 1600
        const maxDim = file.includes('/plants/') || file.includes('/gallery/') ? 800 : 1600
        if (meta.width > maxDim || meta.height > maxDim) {
          pipeline.resize({ width: maxDim, height: maxDim, fit: 'inside', withoutEnlargement: true })
        }

        const base = file.slice(0, file.lastIndexOf('.'))
        const webpOut = `${base}.webp`
        await pipeline.clone().rotate().webp({ quality: 78, effort: 4 }).toFile(webpOut)

        // Only write a JPEG sibling when it is meaningfully smaller than the source
        const jpegOut = `${base}.opt.jpg`
        const jpegBuf = await pipeline.clone().rotate().jpeg({ quality: 78, mozjpeg: true }).toBuffer()
        if (jpegBuf.length < size * 0.9) {
          await sharp(jpegBuf).toFile(jpegOut)
        }

        optimized += 1
      } catch (err) {
        failed += 1
        console.error(`Failed: ${file} — ${err.message}`)
      }
    }
  }

  console.log(`\nDone. Optimized: ${optimized} | Skipped: ${skipped} | Failed: ${failed}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
