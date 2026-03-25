# LIVORA Interior Studio — Premium React Web Application

[![Production Ready](https://img.shields.io/badge/Status-Production--Ready-success.svg?style=for-the-badge)](https://livorainteriorstudio.com)
[![React](https://img.shields.io/badge/React-19-blue.svg?style=for-the-badge&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind--CSS-v4-38B2AC.svg?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF.svg?style=for-the-badge&logo=vite)](https://vitejs.dev)

> **"We don't do average. We do awesome."** — A bespoke digital experience for Sultan Bathery's leading interior design studio.

LIVORA Interior Studio is a high-end, professionally architected web application designed to showcase luxury interior services. Built with a focus on visual excellence, performance, and a "Beige-Luxury" design system.

---

## ✨ Key Features

- 💎 **Premium Aesthetic**: Modern "Beige-Luxury" design system with gold accents and high-quality photography.
- 📱 **Fully Responsive**: Meticulously optimized for Desktop (1440px), Laptop (1024px), Tablet (768px), and Mobile (480px).
- 🚀 **Performance First**: Ultra-fast load times using Vite and optimized React 19 components.
- 🎨 **Unified Design System**: Centralized tokens for colors, spacing, and vertical rhythm.
- ✉️ **Real Contact Backend**: Integrated with **EmailJS** for instant lead notification.
- 🎭 **Smooth Interactions**: Framer Motion transitions and Intersection Observer for reveal-on-scroll effects.
- 🖼️ **Interactive Portfolio**: Filterable project showcase with professional hover overlays.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev) |
| **Build Tool** | [Vite 8](https://vitejs.dev) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) + Vanilla CSS |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Carousels** | [Swiper.js](https://swiperjs.com/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) |
| **Backend** | [EmailJS](https://www.emailjs.com/) |

---

## 🏗️ Project Architecture

```text
LIVORA INTERIOR STUDIO/
├── src/
│   ├── components/       # Reusable UI components (Hero, Navbar, Services, etc.)
│   ├── data/             # Content files for portfolio, services, and FAQ
│   ├── hooks/            # Custom hooks for scroll effects and navigation
│   ├── theme.js          # Design system tokens (colors, shadows, etc.)
│   ├── index.css         # Global styles/Tailwind configurations
│   └── App.jsx           # Main application entry and section layout
├── public/               # Static assets (Luxury interior photos, icons)
├── EMAILJS_SETUP.md      # Integration guide for form backend
├── DESIGN_SYSTEM_GUIDE.md # Documentation of master layout rules
└── README.md             # You are here
```

---

## 🚀 Quick Start

### 1. Installation
```bash
# Clone the repository
git clone https://github.com/alfredroy1016/LIVORA-STUDIO.git

# Navigate to directory
cd "LIVORA INTERIOR STUDIO"

# Install dependencies
npm install --legacy-peer-deps
```

### 2. Development
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

---

## 🎨 Design System

Our design language is rooted in **Professional Luxury**. We use a rhythmic color palette that alternates between sections to guide the user's eye.

- **Primary Background**: `#F8F6F0` (Elegant Beige)
- **Secondary Background**: `#FFFFFF` (Pure White)
- **Accent**: `#B08D57` (Signature LIVORA Gold)
- **Typography**:
  - *Headings*: **Playfair Display** (Classic Serif)
  - *Body*: **Inter** (Clean Modern Sans-Serif)

---

## 📞 Business Integration

The application is localized for **Sultan Bathery, Wayanad, Kerala**.

| Feature | Status | Implementation |
| :--- | :--- | :--- |
| **WhatsApp Chat** | ✅ Active | Deep-linked floating action button |
| **Direct Call** | ✅ Active | Mobile-optimized call link |
| **Contact Form** | ✅ Setup Ready | Uses EmailJS (see `EMAILJS_SETUP.md`) |
| **Studio Map** | ✅ Active | Embedded Google Maps location |

---

## ✅ Deployment

The project is ready for deployment to any static hosting provider (Vercel, Netlify, etc.) or cPanel. Simply upload the contents of the `dist/` directory after running the build command.

---

*Built with precision for **LIVORA Interior Studio** • 2026*
