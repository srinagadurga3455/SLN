import fs from 'node:fs'
import path from 'node:path'

function walk(d) {
  let out = []
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name)
    if (e.isDirectory()) out = out.concat(walk(p))
    else out.push(p)
  }
  return out
}

const files = walk('dist').filter((f) => f.endsWith('.html'))
const titles = {}
let issues = []

for (const f of files) {
  const s = fs.readFileSync(f, 'utf8')
  const route = f.replace('dist', '').replace(/\\index\.html$/, '') || '/'
  const title = (s.match(/<title>([^<]*)<\/title>/) || [])[1] || ''
  const desc = s.includes('name="description"')
  const h1 = (s.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || ''
  const canonical = s.includes('rel="canonical"')
  const og = s.includes('property="og:title"')
  const jsonld = (s.match(/application\/ld\+json/g) || []).length

  if (!title) issues.push(`NO TITLE: ${route}`)
  if (!desc) issues.push(`NO DESC: ${route}`)
  if (!h1.trim()) issues.push(`NO H1: ${route}`)
  if (!canonical) issues.push(`NO CANONICAL: ${route}`)
  if (!og) issues.push(`NO OG: ${route}`)
  if (jsonld === 0) issues.push(`NO JSON-LD: ${route}`)

  titles[title] = (titles[title] || 0) + 1
}

console.log(`Pages audited: ${files.length}`)
console.log(`Duplicate titles: ${Object.entries(titles).filter(([, c]) => c > 1).length}`)
for (const [t, c] of Object.entries(titles).filter(([, c]) => c > 1)) {
  console.log(`  DUPLICATE x${c}: ${t.slice(0, 80)}`)
}
console.log(`Issues: ${issues.length}`)
issues.forEach((i) => console.log(`  ${i}`))
