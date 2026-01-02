# KeepWord — Web

This repository contains the website codebase for **KeepWord**, a non-profit foundation exploring alternatives to social media systems that make words cheap and responsibility optional.

The website is intentionally minimal and content-first.  
It is not a marketing site, product landing page, or growth surface.

Its purpose is to clearly communicate:
- why KeepWord exists
- what problem it addresses
- how it operates as a non-profit foundation
- how different audiences can engage with the initiative

---

## Domains & Audience

This codebase powers three domains, each with a distinct role:

### **keepword.org**
**Institutional foundation site**
- Mission & vision
- Social media critique
- Governance & principles
- SDG alignment
- Roadmap & transparency  
Audience: educators, institutions, partners, funders, researchers

### **keepword.eu**
**European context**
- Societal relevance at EU level
- Policy & SDG framing
- International accessibility  
Audience: EU programs, international partners

### **keepword.nl**
**Local & human-facing site**
- Plain-language explanation
- Pilot participation
- Educational and community use  
Audience: students, teams, local initiatives

All domains share the same core codebase, with content and navigation adapted per domain.

---

## Philosophy

KeepWord does not compete for attention.

The site intentionally avoids:
- feeds
- engagement metrics
- conversion funnels
- growth-driven UX patterns

Instead, it prioritizes:
- clarity over persuasion
- responsibility over visibility
- trust over scale

If something feels too promotional, it does not belong here.

---

## Architecture

- Single codebase
- Domain-based configuration via environment variables
- Shared core content with per-domain overrides
- Content-first routing (no feature-driven pages)

This prevents content drift while allowing contextual framing per audience.

---

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI:** shadcn/ui (used sparingly)
- **Content:** Markdown / MDX
- **Deployment:** Multi-domain deployment (e.g. Vercel)

Technology choices are pragmatic, not experimental.  
Stability and readability take precedence over novelty.