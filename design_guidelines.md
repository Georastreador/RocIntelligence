# ROC Intelligence - Design Guidelines

## Design Approach
**Reference-Based Minimalism** inspired by Linear's typography precision, Stripe's restraint, and Apple's spatial mastery, creating a futuristic tech aesthetic with generous whitespace and purposeful elements.

## Core Design Principles
- **Digital Minimalism**: Every element serves a clear purpose - no decorative excess
- **Futuristic Sophistication**: Tech-forward visual language through gradients, depth, and precision
- **Intentional Space**: Generous breathing room amplifies impact of key elements
- **Seamless Navigation**: Fluid transitions between sections create cohesive experience

## Color Palette

### Dark Mode Primary
- **Background Base**: 8 12% 8% (deep charcoal with subtle blue undertone)
- **Surface Layer**: 220 15% 12% (elevated elements)
- **Primary Accent**: 200 90% 55% (vibrant cyan for CTAs and key highlights)
- **Secondary Accent**: 280 70% 60% (electric purple for subtle accents)
- **Text Primary**: 0 0% 98% (near-white for headings)
- **Text Secondary**: 220 10% 65% (muted blue-gray for body text)

### Gradient Applications
- **Hero Background Overlay**: Linear gradient from 220 20% 10% to transparent, layered over futuristic imagery
- **Accent Gradients**: Subtle 200-280 hue shift for interactive elements and depth cues

## Typography

### Font System
- **Primary**: 'Inter' via Google Fonts - all weights 300-700
- **Display**: 'Space Grotesk' for "ROC Intelligence" logo/brand - weight 600-700

### Scale
- **Hero Title**: 5xl (48px) to 7xl (72px) on desktop, weight 700, tracking tight (-0.02em)
- **Section Headers**: 3xl to 4xl, weight 600
- **Body Text**: base (16px) to lg (18px), weight 400, leading relaxed (1.75)
- **Button Text**: sm to base, weight 500, uppercase tracking (0.05em)

## Layout System

### Spacing Primitives
Primary units: **4, 8, 12, 16, 24, 32** (Tailwind: p-4, p-8, p-12, p-16, p-24, p-32)

### Viewport Strategy
- **Hero Section**: Full viewport height (100vh) with centered content
- **Second Section**: Natural height based on content (py-24 to py-32)

### Container Strategy
- **Max Width**: max-w-6xl for content containment
- **Hero Content**: max-w-3xl for optimal readability
- **Horizontal Padding**: px-6 (mobile) to px-12 (desktop)

## Component Design

### Hero Section
**Composition**:
- Full-screen futuristic background image (dark, tech-themed with circuit patterns, abstract digital networks, or holographic interfaces)
- Dark gradient overlay (opacity 60-70%) for text legibility
- Centered vertical alignment
- Brand identifier "ROC Intelligence" as primary focus
- Tagline/subtitle describing the intelligence platform (weight 300, text-lg, text-secondary)
- Single prominent CTA button with scroll behavior
- Subtle scroll indicator at bottom (animated chevron or text)

**Background Image**: Tech-forward composition featuring deep blues, purples, and cyan accents - abstract digital networks, AI visualization patterns, or sleek technological interfaces. Should feel cutting-edge without overwhelming minimalist aesthetic.

### Primary CTA Button (Hero)
- Solid background with primary cyan (200 90% 55%)
- Rounded corners (rounded-lg)
- Generous padding (px-8 py-4)
- Text: "Explorar Plataforma" or "Conhecer Soluções"
- Subtle glow effect (box-shadow with cyan hue)
- Smooth hover lift transform (translateY -2px)

### Second Section - Application Access

**Layout**: 
- Full-width container with centered content
- Single focused element (the app link/button)
- Minimal supporting text above or below

**Icon Button Design**:
- Large clickable card (min 320px wide, py-12 px-8)
- Centered layout with icon above text
- Icon: Custom or from library representing AI/analytics (brain, chart bars, sparkles, cpu)
- Icon size: w-16 h-16 with primary cyan color
- Title: "Analise_CSVs_IA_I2A2" in bold (text-xl, weight 600)
- Subtitle: Brief description of functionality (e.g., "Análise Inteligente de Dados CSV")
- Background: Surface layer (220 15% 12%) with subtle border
- Hover state: Slight scale (1.02) and enhanced glow
- Arrow or external link icon indicating redirect

**Interaction**: Opens external URL in new tab

## Animations & Interactions

**Approach**: Minimal, purposeful motion
- Hero fade-in on load (opacity 0 to 1, duration 800ms)
- Smooth scroll behavior between sections (CSS scroll-behavior: smooth)
- Button hover: Subtle lift and glow enhancement (200ms ease)
- Card hover: Scale 1.02 with shadow increase (300ms ease)
- NO complex scroll-triggered animations or parallax

## Navigation

**Scroll CTA**: Clicking hero button smoothly scrolls to second section using anchor link navigation

## Accessibility

- Maintain dark theme consistently across all sections
- Ensure 4.5:1 contrast ratio minimum for all text
- Interactive elements have clear focus states (outline with primary cyan)
- Semantic HTML structure for screen readers

## Images

**Hero Background Image**:
- **Placement**: Full viewport background for hero section
- **Style**: Futuristic technology theme - options include:
  - Abstract digital network with glowing nodes and connections
  - AI/data visualization with flowing particles
  - Geometric tech patterns with depth and dimension
  - Holographic interface elements
- **Color Scheme**: Deep blues (220-240), purples (260-280), cyans (180-200) with black base
- **Treatment**: Dark overlay (60-70% opacity) ensures text legibility
- **Position**: Background-position center, background-size cover

**Icon for Application Button**: AI/analytics related (chart-bar, brain, sparkles, cpu-chip from Heroicons or similar library)