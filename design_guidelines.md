# LSA Taxi - Design Guidelines

## Design Approach
**Reference-Based: Swiss Design Principles**
This project draws inspiration from classic Swiss/International Typographic Style, combined with modern web conventions from premium transportation services like Blacklane and Uber Black. The design emphasizes precision, cleanliness, and reliability—core values in both Swiss culture and professional transportation.

## Core Design Principles
1. **Precision & Grid-Based Layout**: Mathematical spacing, perfect alignment
2. **Minimal Color Palette**: Strategic use of Swiss red against neutral backgrounds
3. **Typography Hierarchy**: Clear, readable, purposeful text arrangements
4. **Functional Imagery**: Photos serve purpose, not decoration
5. **Whitespace as Design Element**: Generous breathing room between sections

## Color Palette

**Primary Colors:**
- Swiss Red: 0 85% 55% (primary actions, accents)
- Deep Charcoal: 0 0% 15% (headings, primary text)
- Neutral Gray: 0 0% 45% (body text, secondary elements)

**Background Colors:**
- Pure White: 0 0% 100% (main background)
- Light Gray: 0 0% 97% (alternating sections)
- Dark Overlay: 0 0% 10% with 60% opacity (over hero image)

**Accent & Status:**
- Black: 0 0% 0% (navigation, footer)
- Success Green: 142 71% 45% (form confirmation)
- Border Gray: 0 0% 88% (dividers, form inputs)

## Typography

**Font Stack:**
- Primary: 'Inter', system-ui, -apple-system, sans-serif
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Hierarchy:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- Section Headers: text-3xl md:text-4xl, font-bold, mb-4
- Subsections: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, leading-relaxed
- Small Text: text-sm, font-medium

## Layout System

**Spacing Primitives:**
Use Tailwind units: 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Section vertical padding: py-16 md:py-24 lg:py-32
- Card padding: p-6 md:p-8
- Element spacing: gap-8 md:gap-12 between major elements

**Container Strategy:**
- Max width: max-w-7xl mx-auto for content containers
- Full-width: Hero, footer, contact map sections
- Content width: px-4 md:px-6 lg:px-8 for horizontal padding

**Grid Patterns:**
- Services: grid-cols-1 md:grid-cols-3 gap-8
- Fleet: grid-cols-1 md:grid-cols-3 gap-6
- Form: grid-cols-1 md:grid-cols-2 gap-6 for inputs

## Component Specifications

### Navigation Bar
- Fixed/sticky at top with backdrop-blur-md and bg-black/90
- Height: h-16 md:h-20
- Logo left, navigation links center/right
- Smooth scroll behavior to all sections
- Mobile: hamburger menu at md breakpoint

### Hero Section
- Full viewport height: min-h-screen with flex centering
- Background: Large Swiss city image (Birmingham cityscape or Geneva lake view) with dark overlay
- Content: Centered white text with red accent button
- CTA button: bg-red-600 hover:bg-red-700, blurred background (backdrop-blur-sm bg-white/10) for outline variant if used
- Tagline below heading in text-xl text-gray-200

### Services Cards
- White background cards with subtle shadow: shadow-lg hover:shadow-xl transition
- Icon at top (4rem size) in Swiss red color
- Card: rounded-xl, p-8, border border-gray-200
- Hover: transform scale-105 transition-transform duration-300

### Fleet Section
- Card design: Image top, details below
- Vehicle images: aspect-video object-cover rounded-t-xl
- Card bottom: p-6 with vehicle name and brief specs
- Background: Light gray section (bg-gray-50)

### Booking Form
- Two-column layout on desktop, stacked on mobile
- Input styling: border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg p-3
- Labels: text-sm font-medium text-gray-700 mb-2
- Submit button: Full-width bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg
- Validation errors: text-red-600 text-sm mt-1

### About Section
- Single column, centered text with max-w-3xl
- Leading paragraph with text-lg
- Swiss flag or location icon as accent element

### Contact Section
- Two-column: Map (60%) | Contact Info (40%)
- Map: Google Maps embed, rounded-lg, min-h-96
- Contact info: Stacked with icons, white background card with p-8
- Stack to single column on mobile

### Footer
- Dark background: bg-black text-white
- Three-column grid on desktop: Logo | Quick Links | Contact
- Copyright centered below, text-gray-400
- Padding: py-12

## Interactive Elements

**Buttons:**
- Primary: bg-red-600 px-8 py-3 rounded-lg font-semibold
- Outline: border-2 border-white text-white (with backdrop-blur-sm when over images)
- Hover: Slight scale transform-gpu and color darkening
- Disable animations: Only subtle color transitions

**Cards:**
- Hover elevation: shadow-lg to shadow-xl
- Subtle scale: hover:scale-105
- Transition: duration-300 ease-in-out

**Form Interactions:**
- Focus states: ring-2 ring-red-500
- Success message: Slide-in from top, bg-green-50 border-green-200 p-4 rounded-lg

## Images Section

**Hero Background:**
- Large panoramic image of Birmingham cityscape at dusk/evening
- Alternative: Geneva lakefront with Jet d'Eau and Alps
- Requirements: High resolution (1920px+ width), professional quality
- Placement: Full-screen background with overlay

**Fleet Images:**
- Three vehicle photos: Luxury sedan (Mercedes S-Class), Spacious van (Mercedes V-Class), Executive sedan (BMW 5-Series)
- Style: Professional studio shots, 3/4 angle, white/light background
- Dimensions: 800x600px minimum, aspect-ratio 4:3

**Service Icons:**
- Use FontAwesome or Lucide icons
- Airport: plane icon, City: taxi/car icon, Business: briefcase icon
- Size: 4rem (64px), color: Swiss red

**Additional Visual Assets:**
- Swiss Alps background for About section (subtle, faded)
- Company logo: Clean sans-serif wordmark with Swiss cross element
- Map marker: Custom red pin for Birmingham location

## Accessibility & Performance
- All images have descriptive alt text
- Color contrast ratio 4.5:1 minimum for text
- Keyboard navigation support for all interactive elements
- Form labels properly associated with inputs
- Mobile touch targets minimum 44x44px
- Lazy loading for images below fold

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (two columns where appropriate)
- Desktop: > 1024px (full multi-column layouts)