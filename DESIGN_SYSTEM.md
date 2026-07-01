# Centauri Portfolio Design System

Version: 1.0  
Owner: Alex Pena  
Status: Approved direction for implementation  
Primary use: AI model handoff, design iteration, frontend implementation, and review

## 1. Source of Truth

This document defines the visual, interaction, content, and implementation system for the Centauri portfolio. Treat it as the canonical design brief.

The approved desktop frames are:

| Frame | Purpose | Reference |
|---|---|---|
| 1 | Hero and Centauri Control Plane | `design/concepts/hero-frame-authoritative-no-middle-dots-01.png` |
| 2 | Capability architecture | `design/concepts/homepage-capability-architecture-frame-02.png` |
| 3 | Selected work, process, about, and CTA | `design/concepts/refined-03-proof-process.png` |

These images are visual references, not production assets. Rebuild the interface responsively in code. Do not place the full frames on the website as screenshots.

When a generated concept conflicts with this document, follow this document unless Alex explicitly approves a change.

## 2. Brand Context

Centauri is the portfolio and professional identity of Alex Pena, an AI Solutions Specialist at Centerfield.

Alex works across product, design, development, QA, sales, client services, and operations. His work focuses on:

- Workflow automation
- Internal tools
- AI integration
- Knowledge architecture
- AI work assistants
- System architecture
- AI literacy and adoption
- Operational clarity
- Measurable business outcomes

The site must establish that Alex does not simply add AI tools. He designs the context, knowledge, rules, automation, assistance, and adoption layers that allow people, tools, and data to work as one operational system.

## 3. Core Narrative

The primary narrative is:

> Scattered tools, manual workflows, fragmented knowledge, and disconnected AI experiments become coordinated intelligent systems through Centauri's architecture.

The homepage should move through this story in order:

1. Introduce the transformation in the hero.
2. Explain the architecture and capabilities behind the transformation.
3. Prove the work through case studies and business outcomes.
4. Show a repeatable process.
5. Establish Alex's practical credibility.
6. End with a calm invitation to start a conversation.

The experience is story-led but proof-backed. Emotional pull comes from pacing, composition, and motion. Trust comes from precise language, implementation detail, and measurable outcomes.

## 4. Design Principles

### Quiet Intelligence

The interface should feel calm, organized, and confident. Complexity is present, but controlled.

### Premium Restraint

Use fewer elements, larger spacing, clear hierarchy, and intentional accents. Do not fill empty space simply because it is available.

### Technical Trust

Architecture visuals must communicate real logic. Connectors, labels, layers, and diagrams should have a functional reading order rather than decorative complexity.

### Physical Precision

Surfaces should feel lightly tactile through controlled shadows, translucent materials, thin borders, and deliberate corner geometry.

### Business Grounding

Every major story moment should connect to operational value: time saved, faster handoffs, fewer errors, clearer decisions, reduced rework, stronger adoption, or improved capacity.

### Motion With Purpose

Motion reveals the system. It does not decorate the page.

## 5. Visual References

Use these companies as directional references, not templates:

- Vercel: technical precision and strong monochrome hierarchy
- Linear: calm product storytelling and controlled motion
- Framer: expressive but polished presentation
- Raycast: premium surfaces and confident detail

Apple is a reference for pacing, whitespace, product-reveal discipline, and restraint only. Do not imitate Apple layouts or branding directly.

## 6. Color System

Orange is rare and intentional. The page is primarily warm off-white, white, warm gray, and graphite.

```css
:root {
  /* Core surfaces */
  --background: #F6F4F0;
  --surface: #FFFFFF;
  --surface-muted: #ECE7DF;
  --surface-warm: #F1EADF;

  /* Text */
  --text-primary: #181614;
  --text-secondary: #6E6861;
  --text-muted: #9A9188;

  /* Centauri accent */
  --accent: #A95424;
  --accent-soft: #C9783F;
  --accent-faint: #F2DED2;
  --accent-muted: #D9A07B;
  --accent-dark: #6F2F16;
  --accent-deep: #3F1A0C;

  /* Graphite */
  --graphite: #1C1A18;
  --graphite-soft: #2A2623;
  --graphite-muted: #3A342F;

  /* Lines */
  --line: #DDD7CF;
  --line-strong: #CFC6BA;
  --line-accent: rgba(169, 84, 36, 0.32);

  /* Effects */
  --accent-glow: rgba(169, 84, 36, 0.28);
  --accent-glow-soft: rgba(169, 84, 36, 0.12);
  --shadow-soft: rgba(24, 22, 20, 0.08);
}
```

### Orange Usage

Use `#A95424` for:

- A tiny star or dot in the logo
- A selected navigation underline
- A CTA hover detail
- A small icon accent
- A single active data-flow signal
- A subtle border shimmer on an important panel
- An active-system indicator
- A restrained glow point in a 3D scene

Do not use orange for:

- Full sections
- Large backgrounds
- Every button
- Every icon
- Repeated decorative lines
- Long paragraphs or large headlines

### Contrast

Use `--text-primary` for primary copy on light surfaces. Use white or warm off-white on graphite surfaces. Verify WCAG AA contrast for all body text and interactive states.

## 7. Typography

### Font Families

| Role | Typeface | Use |
|---|---|---|
| Primary | Satoshi | Display type, headings, body copy, navigation, buttons |
| Technical | Geist Mono | Eyebrows, numbers, system labels, metadata, architecture annotations |
| Wordmark | Custom-modified Satoshi | `CENTAURI` logo only |

Avoid:

- Orbitron
- Audiowide
- Exo
- Rajdhani-heavy futuristic styling
- Overly rounded startup fonts
- Aggressive condensed fonts
- Generic system-font presentation in final production

### Type Scale

Use fluid type with `clamp()` and preserve the hierarchy rather than fixed screenshot dimensions.

```css
:root {
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-md: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.375rem;
  --text-2xl: 1.75rem;
  --text-3xl: 2.25rem;
  --text-4xl: clamp(2.75rem, 5vw, 4.75rem);
  --text-hero: clamp(3.25rem, 6vw, 5.75rem);
}
```

### Typography Rules

- Display headings use tight but readable tracking and approximately `0.95` to `1.02` line height.
- Body copy uses approximately `1.5` to `1.65` line height.
- Technical labels use uppercase Geist Mono, increased tracking, and small sizes.
- Avoid excessive bold weights. Use scale and whitespace before weight.
- Keep line lengths near 45 to 70 characters for body copy.
- Do not center large bodies of text.

## 8. Spacing System

The spacing system is based on a consistent 4px/8px rhythm. Use tokens instead of one-off values.

```css
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.5rem;   /* 24px */
  --space-6: 2rem;     /* 32px */
  --space-7: 2.5rem;   /* 40px */
  --space-8: 3rem;     /* 48px */
  --space-9: 4rem;     /* 64px */
  --space-10: 5rem;    /* 80px */
  --space-11: 6rem;    /* 96px */
  --space-12: 7.5rem;  /* 120px */
  --space-13: 10rem;   /* 160px */
  --space-14: 12rem;   /* 192px */
}
```

### Spacing Usage

| Context | Preferred tokens |
|---|---|
| Icon and label gaps | `--space-2` to `--space-3` |
| Small UI groups | `--space-3` to `--space-4` |
| Button padding | `--space-3` vertical, `--space-5` horizontal |
| Card padding | `--space-5` to `--space-7` |
| Content block gaps | `--space-6` to `--space-9` |
| Section spacing | `--space-11` to `--space-13` |
| Hero/showcase breathing room | `--space-12` to `--space-14` |

Rules:

- Prefer fewer items per viewport.
- Use extra space around hero and architecture moments.
- Do not compress cards to fit more content.
- Increase page height before reducing readability.
- Mobile spacing may reduce by one or two token steps, but should remain calm.

## 9. Layout System

### Page Container

```css
:root {
  --container-max: 90rem;
  --gutter-desktop: clamp(4rem, 6vw, 6rem);
  --gutter-tablet: 2.5rem;
  --gutter-mobile: 1.25rem;
}
```

Use a 12-column desktop grid, 6-column tablet grid, and 4-column mobile grid. Components may break the grid for cinematic overlap, but text alignment should return to the shared columns.

### Layout Behavior

- Desktop: asymmetric editorial compositions with large negative space.
- Tablet: preserve hierarchy and simplify overlaps.
- Mobile: linearize the story and remove nonessential decorative depth.
- Do not shrink desktop diagrams until labels become unreadable.
- Replace complex desktop connector systems with simpler mobile flows.
- Keep primary actions visible without making them sticky by default.

## 10. Corner Geometry

The geometry should feel calm, polished, physical, premium, and touchable.

### Geometry Tokens

```css
:root {
  --radius-control: 999px;
  --radius-card-sm: 1rem;
  --radius-card: 1.25rem;
  --radius-card-lg: 1.5rem;
  --radius-showcase: 2rem;
  --cut-sm: 0.75rem;
  --cut-md: 1.25rem;
  --cut-lg: 2rem;
}
```

### Component Geometry

| Component | Geometry |
|---|---|
| Buttons | Pill-shaped |
| Normal content cards | 16px to 24px soft corners |
| Premium showcase panels | 28px to 36px smooth corners |
| Technical/system cards | One clipped top-right corner |
| Architecture diagrams | Angular or inset connection geometry |
| Brand accents | Small orbit arcs or four-point stars |

The signature motif is one clipped top-right corner paired with a tiny copper star or signal detail. Repeat it intentionally across the wordmark, hero, capability architecture, case studies, section dividers, icons, and diagrams.

Do not make every component a clipped card. Signature geometry should remain recognizable because it is controlled.

Avoid:

- Endless rounded cards
- Pill-shaped containers for noninteractive content
- Gradient blobs
- Hard cyberpunk diagonals
- Hexagon systems
- Neon borders
- Circuit-board decoration

## 11. Surfaces, Borders, and Shadows

### Light Surfaces

- Base the page on `--background`.
- Use `--surface` for elevated cards.
- Use `--surface-muted` and `--surface-warm` for quiet depth.
- Keep borders at 1px and use `--line` by default.

### Graphite Surfaces

- Reserve graphite for high-contrast proof moments, selected work, process bands, and one capability anchor.
- Do not default the entire site to dark mode.
- Avoid pure black when graphite provides sufficient contrast.

### Shadows

Shadows should feel soft and physical, not floating or glossy.

```css
:root {
  --shadow-card: 0 18px 50px rgba(24, 22, 20, 0.08);
  --shadow-panel: 0 30px 90px rgba(24, 22, 20, 0.10);
  --shadow-dark: 0 24px 70px rgba(0, 0, 0, 0.20);
}
```

Use only one primary shadow per surface. Avoid stacked glow effects.

## 12. Background Pattern

Use the subtle isometric cube/network structure established in the approved frames.

Rules:

- Keep opacity approximately 2% to 6%.
- Place it in peripheral areas, not behind critical text.
- Use no more than two visible pattern zones per viewport.
- Allow the pattern to fade through masks or gradients.
- Do not turn it into a circuit board or dense technical blueprint.

The pattern should be felt before it is consciously noticed.

## 13. Hero System

### Hero Message

Primary headline:

> I turn scattered workflows into intelligent systems.

Supporting copy:

> AI architecture, automation, and internal tools designed around the way teams actually work.

Primary actions:

- Explore selected work
- How I work
- Start a conversation

### Centauri Control Plane

The hero visual is a dimensional control-plane architecture, not a generic AI object.

Inputs:

- Scattered Knowledge
- Disconnected Tools
- Unstructured Requests

Orchestration layers:

- Unified Knowledge Base
- Business Context & Rules
- Workflow Logic

Outputs:

- Automated Workflows
- AI Work Assistants
- Connected Infrastructure

Visual rules:

- Use three angled translucent glass layers.
- Use graphite passive input/output connector lines.
- Use one continuous copper signal through the orchestration stack.
- Keep labels readable and secondary to the headline.
- Preserve functional connector logic.
- Avoid excessive nodes, labels, and paths.

Do not use:

- Floating cubes
- Glowing orbs
- Robots
- Brains
- Chatbot bubbles
- Generic AI cores
- Chaotic particles
- Neon sci-fi effects

### 3D and 2.5D Behavior

- Use slow, subtle parallax and depth response.
- Keep camera movement minimal.
- Let scroll reveal alignment and routing rather than spin the object.
- Use one restrained signal animation.
- Do not allow pointer interaction to tilt the visual dramatically.

## 14. Capability Architecture Section

Heading:

> The architecture behind better workflows.

Supporting statement:

> Centauri designs the knowledge, rules, automation, and adoption layer that lets teams use AI in real operational work.

Capabilities:

| Number | Capability | Description |
|---|---|---|
| 01 | Knowledge Architecture | Turn documents, data, and team context into a governed source of truth. |
| 02 | Workflow Automation | Route work, trigger actions, and remove fragile manual handoffs. |
| 03 | AI Work Assistants | Give teams contextual assistants that answer, draft, and support execution. |
| 04 | AI Literacy & Adoption | Build the standards, judgment, and confidence required for practical use. |

Shared credibility ledger:

| Label | Copy |
|---|---|
| Problem | Scattered knowledge. Manual handoffs. Disconnected AI experiments. |
| What I build | Knowledge systems. Workflow logic. Contextual assistants. Practical governance. |
| Business value | Operational clarity. Faster execution. Safer, durable adoption. |

Layout rules:

- Present the capabilities as one connected architectural chassis.
- Do not use a generic 2x2 services grid.
- Do not use a dense four-row dashboard table.
- Keep each capability readable at a glance.
- Use one graphite anchor chapter at most.
- Use one shared rail and one short copper signal.
- Keep the credibility ledger visually separate and spacious.

## 15. Selected Work

The project area should prove business value, not merely show attractive UI.

Each project should communicate:

- Project name
- Operational problem
- System built
- Tools or stack
- Business result
- Architecture or workflow diagram when useful

Approved mock project set:

| Project | Focus | Example result |
|---|---|---|
| Product Intake Orchestrator | Unified intake, routing, context capture, SLA-aware prioritization | 12 hours returned to the team each week |
| Revenue Signal Pipeline | Ingest, scoring, routing, and feedback loops | 3.4x faster lead qualification |
| QA Intelligence Layer | AI-assisted review, risk scoring, and checklist generation | 41% fewer repetitive review steps |

Project data is mock data during frontend validation. Structure it so Supabase can replace the local source later without redesigning the UI.

## 16. Process Section

Process headline:

> A repeatable path from friction to leverage.

Process stages:

| Stage | Name | Purpose |
|---|---|---|
| 01 | Discover | Surface constraints, workflows, data, and decision points. |
| 02 | Architect | Define interfaces, data flows, rules, and outcomes. |
| 03 | Build | Ship focused iterations and automate the right parts. |
| 04 | Operationalize | Measure impact, refine the system, and embed it into real work. |

Use a restrained graphite band. Keep animation minimal and sequential.

## 17. About Section

Position Alex as technical and practical.

Primary message:

> Technical enough to build it. Practical enough to make it stick.

Credibility points:

- Full-time AI Solutions Specialist at Centerfield
- Works directly with product leadership
- Collaborates with senior designers, product managers, developers, QA, sales, and operations
- Experience with software development, automation, computer hardware, Linux, and technical troubleshooting
- Focuses on systems that reduce friction and create operational capacity

Avoid inflated titles, vague expertise claims, and autobiographical overload on the homepage.

## 18. CTA Section

CTA headline:

> Have a workflow that should work better?

Primary action:

> Start a conversation

The CTA should feel calm and confident, not sales-heavy. Use a graphite field, quiet grid detail, one copper signal/star, and a high-contrast off-white button.

## 19. Motion System

Motion hierarchy:

| Level | Use | Timing guidance |
|---|---|---|
| Micro | Navigation, buttons, hover states | 160ms to 240ms |
| Reveal | Text, cards, section entrances | 600ms to 900ms |
| Cinematic | Hero layers and depth | 1200ms to 1800ms |
| Narrative | Architecture signal and routing | 2400ms to 4000ms |

Recommended easing:

```css
:root {
  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-soft: cubic-bezier(0.33, 1, 0.68, 1);
}
```

Motion rules:

- Use soft fade/lift reveals for content.
- Stagger related items lightly.
- Use the strongest narrative motion in architecture sections.
- Animate lines only when they explain routing or transformation.
- Keep proof, case studies, and credibility sections calm.
- Use number count-ups sparingly for meaningful metrics.
- Stop ambient motion when the tab is hidden.
- Support `prefers-reduced-motion` with static, complete states.

Avoid:

- Scroll-jacking
- Constant particles
- Aggressive zooms
- Bouncing
- Fast rotation
- Excessive blur
- Animating every element
- Hover effects that move layout

## 20. Interaction States

### Buttons

- Default primary: graphite background, off-white text.
- Default secondary: transparent or warm surface with graphite border.
- Hover: subtle lift or border response plus a small copper detail.
- Active: reduce lift and deepen contrast.
- Focus: visible 2px outline with sufficient contrast.

### Cards

- Hover only when the card is interactive.
- Use a small shadow/border shift, not dramatic scale.
- Keep transformation under approximately 4px of movement.
- Do not animate static credibility cards.

### Navigation

- Use a minimal header with Work, Approach, About, and a conversation CTA.
- Use a small copper underline or dot for the active section.
- Mobile navigation should retain the same restrained tone.

## 21. Content Voice

The voice is intelligent, restrained, technical, and executive-ready.

Preferred language:

- Workflow automation
- Internal tools
- AI integration
- System architecture
- Operational clarity
- Human review
- Context and rules
- Measurable outcomes
- Reduced rework
- Faster handoffs
- Practical adoption

Avoid:

- Unlock the future
- Revolutionize your business
- Next-generation innovation
- Cutting-edge solutions
- Transformative AI magic
- Generic AI agency claims
- Unsupported metrics
- Buzzword-heavy paragraphs

Write short, concrete sentences. Explain what was wrong, what was built, and what changed.

## 22. Responsive Behavior

### Desktop

- Preserve cinematic whitespace and controlled overlaps.
- Allow the hero visual to occupy substantial width.
- Keep project proof readable without tiny text.

### Tablet

- Reduce depth and connector complexity.
- Stack headline and supporting copy when needed.
- Keep two-column proof layouts only when readability remains strong.

### Mobile

- Linearize hero inputs, orchestration layers, and outputs.
- Replace pointer parallax with a static composed state.
- Stack capability chapters vertically as one connected sequence.
- Convert large project diagrams into simplified mobile variants.
- Keep tap targets at least 44px.
- Preserve whitespace; do not compress the entire desktop frame into one viewport.

## 23. Accessibility

- Meet WCAG AA contrast.
- Use semantic headings in document order.
- Provide keyboard access for all interactions.
- Use visible focus states.
- Add descriptive alternative text to meaningful diagrams.
- Mark decorative patterns and stars as hidden from assistive technology.
- Do not communicate status through orange alone.
- Provide reduced-motion states.
- Keep body text at least 16px in production.
- Keep line diagrams understandable without animation.

## 24. Performance

- Prioritize the headline and primary layout in the initial render.
- Lazy-load Three.js and below-the-fold media when practical.
- Avoid loading the 3D scene on devices that receive the simplified mobile fallback.
- Use compressed textures and minimal geometry.
- Limit expensive blur and large animated shadows.
- Animate transforms and opacity where possible.
- Prevent layout shifts by reserving media dimensions.

## 25. Implementation Stack

Primary stack:

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- GSAP with ScrollTrigger for narrative motion
- Three.js or React Three Fiber for the single dimensional architecture visual
- GitHub for version control
- Vercel for hosting and previews
- Supabase for project content after frontend validation

Implementation guidance:

- Build reusable tokens and primitives before page sections.
- Keep content data separate from presentation.
- Use mock project data initially.
- Prefer semantic HTML for text and cards.
- Use Three.js only where dimensional depth materially supports the story.
- Use CSS/SVG/DOM for simpler diagrams and connectors.
- Do not turn every visual into a canvas scene.

## 26. AI Model Instructions

When another AI model works on this portfolio, it must:

1. Read this document before proposing or implementing design changes.
2. Inspect the approved reference frames.
3. Preserve the established palette, typography, spacing, geometry, and narrative.
4. Avoid generic AI SaaS patterns.
5. Rebuild reference frames responsively instead of embedding screenshots.
6. Keep orange rare.
7. Treat connector diagrams as functional graphs.
8. Use mock project data until Supabase integration is explicitly requested.
9. Implement reduced-motion behavior.
10. Verify desktop and mobile layouts before declaring the work complete.

## 27. Review Checklist

Before approving any new page or component, verify:

- Does it feel spacious rather than dashboard-like?
- Is the hierarchy clear within two seconds?
- Does the section support the scattered-to-coordinated narrative?
- Is the business value concrete?
- Is orange rare and meaningful?
- Is Satoshi used for primary typography and Geist Mono for technical accents?
- Is the clipped top-right motif used intentionally rather than everywhere?
- Are diagrams logically connected and understandable without motion?
- Does motion reveal information rather than decorate it?
- Are labels readable at realistic viewport sizes?
- Is the mobile version redesigned rather than merely scaled down?
- Are accessibility and reduced-motion states present?
- Does the result look like Centauri rather than a generic AI-generated portfolio?

## 28. Non-Negotiable Avoid List

- Generic AI cubes, orbs, robots, brains, and chatbot bubbles
- Purple-on-white SaaS styling
- Neon cyberpunk visuals
- Dense dashboard layouts
- Repeated rounded-card grids
- Excessive pills
- Gradient blobs
- Decorative circuit lines
- Tiny unreadable labels
- Unnecessary particles
- Scroll-jacking
- Buzzword-heavy AI agency copy
- Orange-dominant sections
- New visual identities introduced section by section
- Static screenshots used as the production website

