1. OVERVIEW
Design Philosophy

Premium, editorial, “AI studio” aesthetic.

High contrast: off-white vs deep black, clean surfaces.

Generous whitespace and restrained color.

Serif for storytelling, sans-serif for clarity and UI.

Circular video treatments as a core brand motif.

Motion is deliberate: smooth, cinematic, never gimmicky.

Target Aesthetic

Feels like a frontier AI lab + creative studio.

Editorial/magazine layout with strong vertical rhythm.

Apple-level calmness and polish.

Cinematic video showcase with minimal chrome.

Soft parallax, subtle scale, and glassy, blurred surfaces.

2. COLOR PALETTE
Core Tokens
/* Backgrounds */
--bg-light: #F5F5F5;          /* Main light sections */
--bg-white: #FFFFFF;          /* Cards, hero surfaces */
--bg-black: #000000;          /* Dark sections, hero text */
--bg-off-black: #0A0A0A;      /* Slightly softer black for large areas */

/* Text Colors */
--text-primary-dark: #000000;  /* Main text on light bg */
--text-primary-light: #FFFFFF; /* Main text on dark bg */
--text-secondary: #6B6B6B;     /* Subheadings, descriptions */
--text-tertiary: #999999;      /* Inactive labels, placeholders */

Accent & Interactive
--accent-primary: #000000;     /* Primary CTAs, active indicators */
--accent-hover: #1A1A1A;       /* Hover state, softened black */

/* Overlays & Glass */
--overlay-light: rgba(255, 255, 255, 0.05);
--overlay-dark: rgba(0, 0, 0, 0.05);
--overlay-strong-dark: rgba(0, 0, 0, 0.35); /* Video overlays */
--overlay-glass: rgba(255, 255, 255, 0.8);  /* Header glassmorphism */

Semantic Minimal Set
--status-active: #000000;      /* Active dot in "How it works" */
--status-inactive: #E5E5E5;    /* Inactive dot */

Patterns & Gradients
--pattern-lines: rgba(0, 0, 0, 0.03);      /* Subtle geometric lines */
--gradient-fade: linear-gradient(180deg, transparent 0%, #000000 100%);
--gradient-soft: linear-gradient(135deg,
  rgba(0, 0, 0, 0.03),
  rgba(0, 0, 0, 0.10)
);


Usage:

Light sections: --bg-light or --bg-white with --text-primary-dark.

Dark sections (Gallery, Logo Animation, Footer): --bg-black / --bg-off-black with --text-primary-light.

Surfaces (cards, hero pill, sticky sidebar): --bg-white on light, #111111 on dark.

3. TYPOGRAPHY
Font Families
--font-serif: 'Canela', 'Tiempos Text', 'Georgia', serif;   /* Display */
--font-sans: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'SF Mono', 'Consolas', monospace;

Weights
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;  /* Rare, for key emphasis */

Type Scale
/* Hero */
--text-hero: 72px;
--text-hero-line-height: 1.1;
--text-hero-weight: 400;
--text-hero-letter-spacing: -0.02em;

/* Section Heading (H1) */
--text-h1: 56px;
--text-h1-line-height: 1.15;
--text-h1-weight: 400;
--text-h1-letter-spacing: -0.015em;

/* Subheading (H2) */
--text-h2: 42px;
--text-h2-line-height: 1.2;
--text-h2-weight: 400;

/* Card / Area titles (H3, H4) */
--text-h3: 32px;
--text-h3-line-height: 1.3;
--text-h3-weight: 500;

--text-h4: 24px;
--text-h4-line-height: 1.4;
--text-h4-weight: 500;

/* Body */
--text-body-lg: 20px;
--text-body-lg-line-height: 1.6;
--text-body-lg-weight: 400;

--text-body: 18px;
--text-body-line-height: 1.65;
--text-body-weight: 400;

--text-body-sm: 16px;
--text-body-sm-line-height: 1.5;
--text-body-sm-weight: 400;

/* UI / Navigation / Buttons */
--text-nav: 16px;
--text-nav-line-height: 1.5;
--text-nav-weight: 500;

--text-button: 16px;
--text-button-line-height: 1.5;
--text-button-weight: 500;

/* Micro / Badges */
--text-caption: 14px;
--text-caption-line-height: 1.4;
--text-caption-weight: 500;

--text-micro: 12px;
--text-micro-line-height: 1.4;
--text-micro-weight: 500;
--text-micro-letter-spacing: 0.03em;
--text-micro-transform: uppercase;

Typical Combinations

Hero:

.hero-title {
  font-family: var(--font-serif);
  font-size: var(--text-hero);
  font-weight: var(--text-hero-weight);
  line-height: var(--text-hero-line-height);
  letter-spacing: var(--text-hero-letter-spacing);
}

.hero-title em {
  font-style: italic;          /* "to" in the hero */
}

.hero-subtitle {
  font-family: var(--font-sans);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-regular);
  line-height: var(--text-body-lg-line-height);
  color: var(--text-secondary);
}


Section Titles:

.section-heading {
  font-family: var(--font-serif);
  font-size: var(--text-h1);
  font-weight: var(--weight-regular);
  line-height: var(--text-h1-line-height);
  letter-spacing: var(--text-h1-letter-spacing);
}


Body Copy:

.body-text {
  font-family: var(--font-sans);
  font-size: var(--text-body);
  font-weight: var(--weight-regular);
  line-height: var(--text-body-line-height);
  color: var(--text-primary-dark);
}


Navigation & Buttons:

Sans-serif, 16px, 500, minimal letter spacing.

Optional all-caps for small badges like “HEDRA FOR BUSINESS”.

4. SPACING SYSTEM
Base Grid
--space-unit: 8px; /* 8px grid */

Scale
--space-xs: 4px;      /* 0.5 unit */
--space-sm: 8px;      /* 1 unit */
--space-md: 16px;     /* 2 units */
--space-lg: 24px;     /* 3 units */
--space-xl: 32px;     /* 4 units */
--space-2xl: 48px;    /* 6 units */
--space-3xl: 64px;    /* 8 units */
--space-4xl: 96px;    /* 12 units */
--space-5xl: 128px;   /* 16 units */
--space-6xl: 160px;   /* 20 units */

Layout & Sections
--container-max-width: 1280px;

--container-padding-desktop: 48px;
--container-padding-tablet: 32px;
--container-padding-mobile: 24px;

--section-padding-y-desktop: 128px;
--section-padding-y-tablet: 96px;
--section-padding-y-mobile: 64px;

--grid-gap: 24px;
--component-gap: 24px;
--card-padding: 32px;


Patterns:

Sections: 96–128px vertical padding on desktop.

Grid gaps: 24px standard, 16px tight, 32px spacious.

Hierarchy: bigger spacing between major sections, tighter within cards.

5. LAYOUT & GRIDS

Global container: centered, max-width: 1280px, side padding responsive.

Hero: 40/60 split (text/video) on desktop, stacked on mobile.

How it works:

Left sticky column (sidebar nav).

Right scrollable column (content, video).

Community gallery:

Masonry-style / Pinterest-style grid with horizontal scroll/drag.

Trusted logos:

2 x 3 grid on desktop, stacked on mobile.

Footer:

3–4 columns on desktop, stacked on small screens.

6. COMPONENT STYLES
6.1 Header / Navigation
.header {
  position: fixed;
  inset-inline: 0;
  top: 0;
  z-index: 100;
  padding: 20px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.nav-link {
  font-family: var(--font-sans);
  font-size: var(--text-nav);
  font-weight: var(--text-nav-weight);
  color: var(--text-primary-dark);
  text-decoration: none;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.2s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #000000;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover::after {
  width: 100%;
}

6.2 Buttons

Primary (Black, CTA):

.btn-primary {
  padding: 14px 28px;
  border-radius: 999px;  /* pill */
  font-family: var(--font-sans);
  font-size: var(--text-button);
  font-weight: var(--text-button-weight);
  line-height: var(--text-button-line-height);
  background: var(--accent-primary);
  color: #FFFFFF;
  border: none;
  cursor: pointer;

  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out, background 0.2s ease-out;
}

.btn-primary:hover {
  background: var(--accent-hover);
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.btn-primary:active {
  transform: scale(1.0);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
}


Secondary (Light/Pill hero suggestion button):

.btn-secondary {
  padding: 14px 24px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: var(--text-button);
  font-weight: var(--text-button-weight);
  background: #E8E8E8;
  color: #000000;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out, background 0.2s ease-out;
}

.btn-secondary:hover {
  background: #D8D8D8;
  transform: scale(1.03);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}


Text Button / Links:

.btn-text {
  padding: 8px 0;
  background: transparent;
  border: none;
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  cursor: pointer;
  position: relative;
  transition: color 0.2s ease;
}

.btn-text::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #000000;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-text:hover::after {
  width: 100%;
}

6.3 Cards

Logo / Trusted By Card:

.logo-card {
  padding: 48px 32px;
  border-radius: 16px;
  background: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-card:hover {
  background: #EBEBEB;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}


Content Card:

.content-card {
  padding: 32px;
  border-radius: 16px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.content-card:hover {
  border-color: rgba(0, 0, 0, 0.12);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

6.4 Circular Video Containers

Core visual signature.

.circular-video {
  width: 600px;
  height: 600px;
  border-radius: 50%;
  clip-path: circle(50% at 50% 50%);
  overflow: hidden;
  border: 2px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
  position: relative;
}

.circular-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


Use scaled-down variants for tablet/mobile.

6.5 “How It Works” Sidebar

Left column: sticky vertical navigation with dots and text.

.hiw-sidebar {
  position: sticky;
  top: 120px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.hiw-step {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.hiw-step-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--status-inactive);
  margin-top: 8px;
}

.hiw-step-dot--active {
  background: var(--status-active);
}

.hiw-step-text {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.5;
}

6.6 Community Gallery (Drag / Scroll Grid)

Dark background, horizontal drag, hover scaling.

.gallery-grid {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(220px, 1fr);
  gap: 24px;
  overflow-x: auto;
  padding-bottom: 16px;
  scroll-snap-type: x mandatory;
}

.gallery-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: #111111;
  scroll-snap-align: start;
  cursor: grab;
  transition: transform 0.25s ease-out, box-shadow 0.25s ease-out;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
}

7. SHADOWS & ELEVATION

Define a small, reusable set:

--shadow-subtle: 0 10px 30px rgba(0, 0, 0, 0.05);
--shadow-medium: 0 20px 40px rgba(0, 0, 0, 0.12);
--shadow-strong: 0 30px 60px rgba(0, 0, 0, 0.25);


Cards & pills: --shadow-subtle.

Hero circular video: --shadow-strong.

Hover states for CTAs and gallery cards: bump up one level.

On dark backgrounds, be careful: reduce shadow opacity and sometimes use inner glows instead.

8. ANIMATIONS & TRANSITIONS
Global Principles

Easing: cubic-bezier(0.16, 1, 0.3, 1) or ease-out.

Durations: 150–400ms for UI; 600–1200ms for scroll-based intro.

Scroll Animations

Parallax (for backgrounds and decorations):

.parallax {
  transform: translateY(calc(var(--scroll) * 0.5));
}


Fade + Slide In:

Start: opacity: 0; transform: translateY(24px) scale(0.98);

End: opacity: 1; transform: translateY(0) scale(1);

Trigger when ~20% in viewport using Intersection Observer or Framer Motion.

Stagger: 50–100ms per item in grids and logo rows.

Hover Effects

Links: underline slides in from left.

Buttons: scale(1.03–1.05) plus upgrade shadow.

Cards: scale(1.03) and slight lift.

Gallery videos: play on hover, pause on mouseleave.

Video Behavior

Hero video: crossfade clips every 4–5s.

Section demos: auto-play when at least 50% in viewport.

Gallery: muted auto-play on hover only.

9. BORDER RADIUS

Simple, consistent radius tokens:

--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-pill: 999px;


Buttons: --radius-pill.

Cards: --radius-lg or --radius-xl for hero/video cards.

Inputs: --radius-md.

Circular elements: border-radius: 50% + clip-path circle.

10. OPACITY & TRANSPARENCY

Used to create depth and softness:

Header: bg-white at 0.8–0.95 + blur.

Overlays on video: 0.35–0.6 black gradient.

Disabled states: opacity: 0.6, cursor: not-allowed.

Useful values:

0.04, 0.06, 0.1, 0.35, 0.6, 0.8.

11. COMMON TAILWIND CSS USAGE
Tailwind Config Sketch
// tailwind.config.js (conceptual)
module.exports = {
  theme: {
    extend: {
      colors: {
        hedra: {
          light: '#F5F5F5',
          dark: '#000000',
          surface: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['Canela', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        subtle: '0 10px 30px rgba(0,0,0,0.05)',
        medium: '0 20px 40px rgba(0,0,0,0.12)',
        strong: '0 30px 60px rgba(0,0,0,0.25)',
      },
    },
  },
};

Class Patterns

Containers:

max-w-content mx-auto px-6 md:px-8

Sections:

py-20 md:py-24 lg:py-32

Grids:

grid gap-6 md:grid-cols-2 lg:grid-cols-3

Headings:

font-display text-4xl md:text-5xl lg:text-[4.5rem] leading-tight

Body:

font-sans text-lg text-neutral-600

Buttons:

Primary:

inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm md:text-base font-medium text-white shadow-subtle transition-transform transition-shadow duration-200 ease-out hover:scale-105 hover:shadow-strong

Header:

fixed inset-x-0 top-0 z-50 border-b bg-white/70 backdrop-blur-xl

Sticky Sidebar:

sticky top-24 space-y-6

Gallery:

grid grid-flow-col auto-cols-[minmax(220px,1fr)] gap-6 overflow-x-auto pb-4 snap-x snap-mandatory

12. EXAMPLE COMPONENT REFERENCE CODE (REACT + TAILWIND)
12.1 Header
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        'border-b border-transparent',
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-neutral-200'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:h-20 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-medium text-white">
            ●
          </div>
          <span className="font-display text-xl">Hedra</span>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-800 md:flex">
          {['Enterprise', 'Pricing', 'Company'].map((item) => (
            <Link key={item} href={#${item.toLowerCase()}} className="relative pb-1">
              <span className="nav-link inline-block">{item}</span>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
            Log in
          </button>
          <button className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white shadow-subtle transition-transform duration-200 hover:scale-105 hover:shadow-strong">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}

12.2 Hero
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hedra-light py-20 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-content flex-col items-center gap-16 px-6 lg:flex-row lg:items-center lg:gap-24">
        {/* Left: Text */}
        <div className="w-full space-y-6 lg:w-2/5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-xs font-medium text-white">
            ●
          </div>
          <h1 className="font-display text-4xl leading-tight md:text-5xl lg:text-[4.5rem] lg:leading-[1.05]">
            Creative spark <span className="italic">to</span> captivating content
          </h1>
          <p className="font-sans text-lg text-neutral-600">
            Unlock your storytelling superpowers with Hedra Studio...
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex flex-1 items-center justify-between rounded-full bg-neutral-100 px-5 py-3 text-sm font-medium text-neutral-800 shadow-subtle transition-transform duration-200 hover:scale-105 hover:shadow-medium">
              <span>Create a podcast with an influencer</span>
              <span className="text-xs opacity-70">⟲</span>
            </button>
            <button className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-subtle transition-transform duration-200 hover:scale-105 hover:shadow-strong">
              Try now
            </button>
          </div>
        </div>

        {/* Right: Circular Video */}
        <div className="relative flex w-full justify-center lg:w-3/5">
          <div className="relative h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-black/5 to-black/20 p-1 md:h-[26rem] md:w-[26rem] lg:h-[30rem] lg:w-[30rem]">
            <div className="h-full w-full overflow-hidden rounded-full bg-black/90">
              <video className="h-full w-full object-cover" autoPlay muted loop>
                {/* <source src="/videos/hero-1.mp4" type="video/mp4" /> */}
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}