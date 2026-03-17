# Component Update Guide - Master Design System

## Universal Component Structure

Every section should now follow this pattern:

```jsx
export default function SectionName() {
  return (
    <section id="section-id">  {/* Use #about, #services, #portfolio, #contact, etc */}
      <div className="container">
        
        {/* SECTION HEADING */}
        <div className="section-title">
          <span className="label">Section Label</span>
          <h2>Main Heading</h2>
          <div className="divider"></div>
        </div>

        {/* SECTION CONTENT */}
        <div>
          ...your content here...
        </div>

      </div>
    </section>
  )
}
```

---

## Component-by-Component Updates

### Hero.jsx
```jsx
<section id="hero">
  <div className="container">
    <div className="hero-content">
      <div>
        {/* content left */}
      </div>
      <img src="..." alt="..." />
    </div>
  </div>
</section>
```

### About.jsx
```jsx
<section id="about">
  <div className="container">
    <div className="section-title">
      <span className="label">ABOUT</span>
      <h2>Our Story</h2>
      <div className="divider"></div>
    </div>
    
    <div className="about-grid">
      <div>{/* Left content */}</div>
      <img src="..." alt="..." />
    </div>
  </div>
</section>
```

### Services.jsx
```jsx
<section id="services">
  <div className="container">
    <div className="section-title">
      <span className="label">SERVICES</span>
      <h2>Our Premium Services</h2>
      <div className="divider"></div>
    </div>

    <div className="services-grid">
      {services.map((service) => (
        <div key={service.id} className="livora-card">
          {/* card content */}
        </div>
      ))}
    </div>
  </div>
</section>
```

### Portfolio.jsx
```jsx
<section id="portfolio">
  <div className="container">
    <div className="section-title">
      <span className="label">PORTFOLIO</span>
      <h2>Our Projects</h2>
      <div className="divider"></div>
    </div>

    <div className="portfolio-grid">
      {projects.map((project) => (
        <img key={project.id} src={project.image} alt={project.name} />
      ))}
    </div>
  </div>
</section>
```

### Testimonials.jsx
```jsx
<section id="testimonials">
  <div className="container">
    <div className="section-title">
      <span className="label">TESTIMONIALS</span>
      <h2>What Our Clients Say</h2>
      <div className="divider"></div>
    </div>

    <div className="testimonial-grid">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="livora-card">
          {/* testimonial content */}
        </div>
      ))}
    </div>
  </div>
</section>
```

### FAQ.jsx
```jsx
<section id="faq">
  <div className="container">
    <div className="section-title">
      <span className="label">FAQ</span>
      <h2>Frequently Asked Questions</h2>
      <div className="divider"></div>
    </div>

    <div className="faq-container">
      {faqs.map((faq) => (
        <div key={faq.id} className="livora-card">
          {/* faq item */}
        </div>
      ))}
    </div>
  </div>
</section>
```

### Contact.jsx
```jsx
<section id="contact">
  <div className="container">
    <div className="section-title">
      <span className="label">CONTACT</span>
      <h2>Get In Touch</h2>
      <div className="divider"></div>
    </div>

    <div className="contact-grid">
      <div>
        {/* Contact info left */}
      </div>
      <form>
        {/* Contact form right */}
      </form>
    </div>
  </div>
</section>
```

### Footer.jsx
```jsx
<footer>
  <div className="container">
    <div className="footer-grid">
      <div>{/* Column 1 */}</div>
      <div>{/* Column 2 */}</div>
      <div>{/* Column 3 */}</div>
      <div>{/* Column 4 */}</div>
    </div>
  </div>
</footer>
```

---

## Key Rules to Remember

1. **Every section uses `.container`** - No exceptions
2. **Section ID attributes** - Apply color background automatically
3. **Section headings** - Use `.section-title` pattern everywhere
4. **Grids** - Use specific grid classes (services-grid, portfolio-grid, etc.)
5. **Cards** - Use `.livora-card` for consistent styling
6. **Mobile** - Responsive breakpoints handle automatically (768px, 480px)

---

## Color Background Automation

The background colors are applied automatically via section IDs:

```css
#hero { background: transparent; }
#about { background: var(--bg-beige); }
#services { background: var(--bg-white); }
#portfolio { background: var(--bg-beige); }
#testimonials { background: var(--bg-white); }
#faq { background: var(--bg-beige); }
#contact { background: var(--bg-white); }
footer { background: var(--charcoal); }
```

Just use the correct ID and styling applies automatically!

---

## Premium Spacing Reference

- **Section Padding**: 110px vertical
- **Container Width**: max(1280px, 92%)
- **Grid Gaps**: 30px (services), 24px (portfolio), 60px (contact), 70px (about)
- **Heading Bottom Margin**: 70px
- **Floating Button Distance**: 24px from edges

---

## Next Steps

1. Update each component to use `.container` wrapper
2. Add `.section-title` structure to all section headings
3. Use correct section IDs for color background
4. Test responsive design at 768px and 480px breakpoints
5. Build: `npm run build` to verify all styles apply correctly

