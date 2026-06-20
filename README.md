# Kiki's Cleanup Service

A single-page marketing site for Kiki's Cleanup Service, specializing in
post-party cleanup and Airbnb/short-term-rental turnover cleaning.

## Stack

- React + Vite
- Tailwind CSS v4
- Framer Motion (scroll reveals & micro-interactions)
- lucide-react (icons)

## Getting Started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint      # run eslint
```

## Project Structure

```
src/
  components/
    ui/              shared primitives (Button, Reveal, SectionHeading, PlaceholderImage)
    Navbar.jsx
    Hero.jsx
    Services.jsx
    HowItWorks.jsx
    WhyKikis.jsx
    Pricing.jsx
    Testimonials.jsx
    Gallery.jsx
    BookingForm.jsx
    Footer.jsx
  App.jsx            assembles all sections
  index.css           Tailwind import + theme tokens
```

Images are loaded from Unsplash as placeholders and gracefully fall back to a
labeled color block (`PlaceholderImage`) if the network request fails.
