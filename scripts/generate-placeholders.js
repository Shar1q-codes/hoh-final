const fs = require('fs')
const path = require('path')

const images = [
  'hyderabad-skyline.jpg',
  'crowd-celebration.jpg',
  'community-leaders.jpg',
  'innovators.jpg',
  'educators.jpg',
  'healthcare.jpg',
  'judges-silhouettes.jpg',
  'event-stage.jpg',
  'jury-1.jpg',
  'jury-2.jpg',
  'jury-3.jpg',
  'jury-4.jpg',
  'jury-5.jpg',
  'jury-6.jpg',
  'guest-1.jpg',
  'guest-2.jpg',
  'guest-3.jpg',
  'advisory-1.jpg',
  'advisory-2.jpg',
  'advisory-3.jpg',
  'advisory-4.jpg',
  'sponsor-1.jpg',
  'sponsor-2.jpg',
  'sponsor-3.jpg',
  'sponsor-4.jpg',
  'sponsor-5.jpg',
  'sponsor-6.jpg',
]

const placeholderText = {
  'hyderabad-skyline.jpg': 'Hyderabad Skyline',
  'crowd-celebration.jpg': 'Crowd Celebration',
  'community-leaders.jpg': 'Community Leaders',
  'innovators.jpg': 'Innovators',
  'educators.jpg': 'Educators',
  'healthcare.jpg': 'Healthcare Heroes',
  'judges-silhouettes.jpg': 'Judges Silhouettes',
  'event-stage.jpg': 'Event Stage',
  'jury-1.jpg': 'Dr. Sarah Ahmed',
  'jury-2.jpg': 'Prof. Rajesh Kumar',
  'jury-3.jpg': 'Dr. Maya Patel',
  'jury-4.jpg': 'Mr. Vikram Singh',
  'jury-5.jpg': 'Ms. Priya Sharma',
  'jury-6.jpg': 'Dr. Arun Reddy',
  'guest-1.jpg': 'Chief Minister',
  'guest-2.jpg': 'Mayor of Hyderabad',
  'guest-3.jpg': 'Cultural Minister',
  'advisory-1.jpg': 'Dr. Ravi Shankar',
  'advisory-2.jpg': 'Ms. Ananya Reddy',
  'advisory-3.jpg': 'Dr. Karthik Verma',
  'advisory-4.jpg': 'Prof. Meera Patel',
  'sponsor-1.jpg': 'TechCorp',
  'sponsor-2.jpg': 'Global Industries',
  'sponsor-3.jpg': 'City Bank',
  'sponsor-4.jpg': 'Innovate Solutions',
  'sponsor-5.jpg': 'Future Group',
  'sponsor-6.jpg': 'Heritage Foundation',
}

// Create SVG placeholder
const createPlaceholder = (text) => `
<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#1a1a1a"/>
  <text x="50%" y="50%" font-family="Arial" font-size="48" fill="#D4AF37" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>
`

// Ensure directory exists
const imagesDir = path.join(__dirname, '../public/assets/images')
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true })
}

// Generate placeholders
images.forEach((image) => {
  const svg = createPlaceholder(placeholderText[image])
  fs.writeFileSync(path.join(imagesDir, image.replace('.jpg', '.svg')), svg)
  console.log(`Generated placeholder for ${image}`)
}) 