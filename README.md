# LIVORA Interior Studio — React Web Application

> **Premium interior design studio website** built with React, Vite, and Tailwind CSS v4.
> Dark luxury aesthetic · Gold accents · Glassmorphism · Real AI-generated interior photos.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🏗 Project Architecture

```
LIVORA INTERIOR STUDIO/
├── public/
│   ├── hero.jpg          # Luxury living room (AI generated)
│   ├── bedroom.jpg       # Master bedroom (AI generated)
│   ├── kitchen.jpg       # Modular kitchen (AI generated)
│   ├── wardrobe.jpg      # Walk-in wardrobe (AI generated)
│   └── office.jpg        # Executive office (AI generated)
│
└── src/
    ├── main.jsx          # React entry point
    ├── App.jsx           # Root component — assembles all sections
    ├── index.css         # Global styles, Tailwind v4, animations, CSS variables
    ├── theme.js          # Centralised design tokens (colours, radii, etc.)
    │
    ├── components/
    │   ├── Logo.jsx          # SVG gold geometric L-mark logo
    │   ├── Loader.jsx        # Full-screen animated intro loader
    │   ├── Navbar.jsx        # Sticky glassmorphism nav with mobile menu
    │   ├── Hero.jsx          # Split-screen hero: manifesto + luxury photo
    │   ├── About.jsx         # Story section with bedroom photo + stats
    │   ├── Services.jsx      # Tabbed service cards (glassmorphism)
    │   ├── Portfolio.jsx     # Filterable image grid with hover overlays
    │   ├── WhyUs.jsx         # 6-feature grid + CTA
    │   ├── Philosophy.jsx    # Dark quote band
    │   ├── Testimonials.jsx  # Swiper carousel testimonials
    │   ├── FAQ.jsx           # Accordion FAQ
    │   ├── Contact.jsx       # Contact form + map embed
    │   ├── Footer.jsx        # Multi-column footer with links
    │   └── FloatingButtons.jsx # Fixed WhatsApp + Call buttons
    │
    ├── data/
    │   ├── services.js       # All service content by tab
    │   ├── portfolio.js      # Portfolio projects with image paths
    │   ├── testimonials.js   # Client reviews
    │   └── faqs.js           # FAQ questions & answers
    │
    └── hooks/
        ├── useScrollReveal.js  # IntersectionObserver scroll animations
        └── useNavScroll.js     # Navbar scroll-based style changes
```

---

## 🎨 Design System

### Colours (from `theme.js`)
| Token | Value | Usage |
|---|---|---|
| `bgPrimary` | `#0B1020` | Main navy background |
| `bgSecondary` | `#111111` | Alternating charcoal sections |
| `bgDark` | `#090C16` | Footer |
| `bgCard` | `rgba(255,255,255,0.03)` | Glassmorphism cards |
| `gold` | `#B08D57` | Primary accent — buttons, headings, borders |
| `goldLight` | `#D4B06A` | Hover accent |
| `textPrimary` | `#FFFFFF` | Headings |
| `textSecondary` | `#CFC7BA` | Body text |

### Typography
- **Headings** — `Playfair Display` (serif, via Google Fonts)
- **Body / UI** — `Inter` (sans-serif, via Google Fonts)

### Key CSS Classes (from `index.css`)
| Class | Effect |
|---|---|
| `.livora-card` | Glassmorphism card with hover lift |
| `.reveal` | Fade-up on scroll |
| `.reveal-left` | Slide-in from left on scroll |
| `.reveal-right` | Slide-in from right on scroll |
| `.portfolio-item` | Zoom-on-hover image container |

---

## ✅ Completed Features

- [x] Vite + React + Tailwind CSS v4 project setup
- [x] Professional component-based architecture
- [x] Centralised theme tokens (`theme.js`)
- [x] CSS variables from design spec (`--livora-primary`, `--livora-gold`, etc.)
- [x] Animated full-screen intro Loader
- [x] Sticky glassmorphism Navbar with mobile hamburger menu
- [x] SVG LIVORA gold logo mark
- [x] Bold split-screen Hero — *"WE DON'T DO AVERAGE. WE DO AWESOME."*
- [x] Hero luxury interior photo (AI generated, `/public/hero.jpg`)
- [x] About section with real bedroom photo + stats
- [x] Tabbed Services section (Residential, Kitchen, Wardrobe, Commercial, Bathroom)
- [x] Filterable Portfolio grid with real interior images + hover overlays
- [x] Why Us section with 6-feature glassmorphism cards
- [x] Philosophy quote band (dark contrast section)
- [x] Testimonials Swiper carousel (auto-play)
- [x] Accordion FAQ component
- [x] Contact form with validation + Google Maps embed
- [x] Multi-column Footer with links, socials, contact details
- [x] Fixed floating WhatsApp + Call buttons
- [x] Scroll-reveal animations (IntersectionObserver)
- [x] AI-generated interior photos for: living room, bedroom, kitchen, wardrobe, office
- [x] Proper `package.json` with all dependencies

---

## 🔄 Pending / In Progress

- [ ] Real photography — replace AI images with actual LIVORA project photos
- [ ] Contact form backend — integrate EmailJS or Formspree for real email sending
- [ ] WhatsApp deep link — update phone number in FloatingButtons.jsx, Navbar.jsx, WhyUs.jsx, Contact.jsx if it changes
- [ ] Google Maps embed — update Contact.jsx with exact studio coordinates
- [ ] Favicon — add /public/favicon.ico
- [ ] SEO meta tags — add <title>, <meta description>, Open Graph tags in index.html
- [ ] Mobile responsiveness — improve Navbar and Hero for phones < 768px
- [ ] More portfolio projects — add more categories and images

---

## 💡 Suggestions for Next Steps

### High Priority
1. **Mobile CSS** — Add responsive styles for split-screen hero and 2-column grids. Use @media (max-width: 768px) in index.css.
2. **Real contact form** — Integrate EmailJS for backendless email sending.
3. **Favicon + OG image** — Add favicon.ico and og-image.jpg in /public/ and update index.html.

### Medium Priority
4. **Framer Motion** — Add page transitions and staggered card animations.
5. **More portfolio images** — Add 6–12 more project photos and update portfolio.js.
6. **Video Hero** — Add ambient interior video to hero section.
7. **i18n / Multi-language** — Add Malayalam and Hindi support with react-i18next.

### Low Priority / Polish
8. **Dark/Light mode toggle** — Add theme toggle button to Navbar.
9. **Swiper breakpoints** — Add slidesPerView: 2 for tablets in Testimonials.
10. **Analytics** — Add Google Analytics or Plausible.
11. **Deployment** — Deploy to Vercel, Netlify, or cPanel.

---

## 📦 Dependencies

See package.json for full list. Key dependencies:
- react, react-dom, vite, @vitejs/plugin-react
- tailwindcss, @tailwindcss/vite
- swiper, framer-motion, react-icons
- @react-three/fiber, @react-three/drei

---

## 📞 Contact Details in Code

| Detail   | Current Value                | Files to Update |
|----------|-----------------------------|-----------------|
| WhatsApp | +918921179724                | Navbar.jsx, Hero.jsx, WhyUs.jsx, Contact.jsx, Footer.jsx, FloatingButtons.jsx |
| Email    | info@livorainteriorstudio.com| Contact.jsx, Footer.jsx |
| Address  | Sultan Bathery, Wayanad, Kerala | Contact.jsx, Footer.jsx, Navbar.jsx |

---

*Built with ❤️ for LIVORA Interior Studio · Sultan Bathery, Wayanad, Kerala*
