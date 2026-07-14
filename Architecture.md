# Architecture.md

# WeDigMark Website Architecture

## Technical Stack

- Framework: Next.js
- Routing: App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Icons: Lucide React
- Version Control: Git and GitHub
- Deployment: Vercel
- Domain: wedigmark.online

---

## Project Structure

```text
wedigmark/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── future route folders
│
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   └── future homepage sections
│   │
│   └── ui/
│       ├── Button.tsx
│       └── future reusable UI components
│
├── public/
│   └── images, icons, logos, and other static assets
│
├── PRD.md
├── Architecture.md
├── Design.md
├── Rules.md
├── Phases.md
├── Memory.md
├── AGENTS.md
└── package.json


Routing Structure
Current route:
/

Planned routes:
/services
/portfolio
/portfolio/[slug]
/insights
/insights/[slug]
/about
/contact

Future service pages may include:
/services/creative-strategy
/services/seo
/services/performance-marketing
/services/email-marketing


Homepage Composition
The homepage is assembled inside:
app/page.tsx

Each major section should exist as its own component inside:
components/sections/

Example:
<Navbar />
<Hero />
<Services />
<Process />
<PortfolioPreview />
<AboutPreview />
<FinalCTA />
<Footer />

The homepage should provide an overview of the company and direct users toward deeper pages. It should not contain the full contents of every section or become a long-form landing page.

Component Rules
Use reusable components when the same visual or functional pattern appears more than once.
Examples:
Button
Container
SectionHeading
ProjectCard
ArticleCard
ServiceCard

Do not create reusable components prematurely. A component should solve an actual repetition or consistency problem.
Section-specific content should remain inside the relevant section component unless it needs to be reused elsewhere.

Styling Architecture
Tailwind CSS is the primary styling system.
Global styles belong in:
app/globals.css

Component-specific styling should normally remain inside the component using Tailwind class names.
Avoid separate CSS files for individual components unless Tailwind becomes impractical for a specific feature.
The design system is documented in:
Design.md


Content Architecture
Homepage copy may live directly inside section components while the website is small.
When Portfolio and Insights grow, content should move into structured data files or a content system.
Possible future structure:
content/
├── portfolio/
└── insights/

Portfolio projects must be clearly labelled as independent spec studies unless they are genuine client engagements.

Data and Backend
The current website is primarily static.
No database is required for the current phase.
Future backend functionality may include:
Contact form submission
Email notifications
Calendly integration
Analytics
Newsletter subscriptions
Content management
External services should be introduced only when they solve a real project requirement.

Deployment Flow
The production workflow is:
Local development
↓
Git commit
↓
GitHub push to main
↓
Automatic Vercel deployment
↓
wedigmark.online updates

Before starting work:
git pull
npm run dev

When finishing work:
git add .
git commit -m "Describe the change"
git push


Collaboration Workflow
Amogh and Harsha may work on different parts of the same website simultaneously.
Only one person should actively edit a specific file at a time.
Temporary task ownership should be communicated before work begins.
Example:
Navbar.tsx — Amogh
Footer.tsx — Harsha

Once a task is completed and pushed, the code becomes shared again.
Both collaborators should pull before starting work and push before switching devices or ending a session.

Architecture Priorities
The architecture should remain:
Simple
Easy to understand
Easy to extend
Component-based
Responsive
Fast
Maintainable by both collaborators


# Current Technology

Framework
- Next.js (App Router)

Styling
- Tailwind CSS

Deployment
- Vercel

Repository
- GitHub

Domain
- wedigmark.online

