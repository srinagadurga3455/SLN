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
const hrefs = new Set()
for (const f of files) {
  const s = fs.readFileSync(f, 'utf8')
  for (const m of s.matchAll(/href="([^"]+)"/g)) hrefs.add(m[1])
}

const missing = []
for (const h of hrefs) {
  if (
    h.startsWith('http') ||
    h.startsWith('tel:') ||
    h.startsWith('mailto:') ||
    h.startsWith('wa.me') ||
    h.startsWith('#') ||
    h.startsWith('https')
  ) continue
  const clean = h.replace(/^\//, '').split('#')[0].split('?')[0]
  if (!clean) continue
  const target = path.join('dist', clean)
  const asFile = fs.existsSync(target)
  const asDir = fs.existsSync(path.join(target, 'index.html'))
  if (!asFile && !asDir) missing.push(h)
}
console.log('internal hrefs checked:', hrefs.size)
console.log('MISSING:', missing.length ? missing.join(', ') : 'none')
