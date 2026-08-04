const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE = path.join(process.cwd(), 'components/data/products.ts');
const PRODUCTS_FOLDER = path.join(process.cwd(), 'public/products');

const images = fs.readdirSync(PRODUCTS_FOLDER)
.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
.sort();

console.log(`Found ${images.length} images`);

let content = fs.readFileSync(PRODUCTS_FILE, 'utf8');
let imgIndex = 0;

// Find products p043 and up, and add/replace image field
content = content.replace(/(id:\s*"p\d{3}"[\s\S]*?stock:\s*true),/g, (match) => {
  const idMatch = match.match(/id:\s*"p(\d{3})"/);
  if (idMatch && parseInt(idMatch[1]) >= 43) {
    if (imgIndex < images.length) {
      const imgPath = `/products/${images[imgIndex]}`;
      imgIndex++;
      console.log(`✅ Adding image to ${idMatch[0]}`);
      
      // If image field exists, replace it. If not, add it before stock
      if (match.includes('image:')) {
        return match.replace(/image:\s*"[^"]*"/, `image: "${imgPath}"`);
      } else {
        return match.replace('stock: true', `image: "${imgPath}", stock: true`);
      }
    }
  }
  return match;
});

fs.writeFileSync(PRODUCTS_FILE, content, 'utf8');
console.log(`✅ Done! Updated ${imgIndex} products`);