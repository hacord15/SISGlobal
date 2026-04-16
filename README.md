# TalentFlow — Next.js Job Board

A full-featured, production-grade job board built with **Next.js (JS)** using **SSR** (Server-Side Rendering) as the primary rendering strategy.

## Architecture

### SSR vs CSR Strategy

| Layer | Strategy | Why |
|---|---|---|
| All page routes | **SSR** (`getServerSideProps`) | SEO, fast initial load, fresh data |
| Search & filter inputs | **CSR** (`components/csr/`) | Interactive, no full reload needed |
| FAQ Accordion | **CSR** | Pure UI interaction |
| Contact Form | **CSR** | State management, validation |
| Hero Search Bar | **CSR** | Input state, router.push |

### CSR Components
All client-side interactive components live in `components/csr/` and are imported into SSR pages using Next.js `dynamic()` with `ssr: false`:

```js
import dynamic from 'next/dynamic'
const HeroSearch = dynamic(() => import('../components/csr/HeroSearch'), { ssr: false })
```

## Project Structure

```
talentflow/
├── components/
│   ├── csr/                   # Client-only interactive components
│   │   ├── HeroSearch.js       # Search bar (input state + router)
│   │   ├── JobFilters.js       # Filter sidebar (checkboxes + router)
│   │   ├── FAQAccordion.js     # Accordion UI
│   │   ├── ContactForm.js      # Form with state & validation
│   │   └── ViewToggle.js       # Grid/list toggle
│   ├── Layout.js               # Navbar + Footer wrapper
│   ├── Navbar.js               # SSR-safe header (scroll via useEffect)
│   ├── Footer.js               # Static footer
│   └── JobCard.js              # Job card (grid + list views)
├── lib/
│   └── data.js                 # Mock data (replace with real DB/API)
├── pages/
│   ├── index.js                # Home (SSR)
│   ├── find-jobs/
│   │   ├── index.js            # Job Listings (SSR)
│   │   └── [id].js             # Job Detail (SSR)
│   ├── employers/
│   │   ├── index.js            # Employers List (SSR)
│   │   └── [id].js             # Employer Detail (SSR)
│   ├── candidates/
│   │   ├── index.js            # Candidates List (SSR)
│   │   └── [id].js             # Candidate Profile (SSR)
│   ├── blogs/
│   │   ├── index.js            # Blog List (SSR)
│   │   └── [id].js             # Blog Post (SSR)
│   ├── shop/index.js           # Career Store (SSR)
│   ├── about/index.js          # About Us (SSR)
│   ├── pricing/index.js        # Pricing Plans (SSR)
│   ├── faqs/index.js           # FAQ Page (SSR)
│   ├── terms/index.js          # Terms & Conditions (SSR)
│   ├── invoice/index.js        # Invoice (SSR)
│   ├── contact/index.js        # Contact Us (SSR + CSR form)
│   ├── 404.js                  # Custom 404
│   ├── _app.js                 # Global wrapper
│   └── _document.js            # HTML document
├── styles/
│   └── globals.css             # Global design system
└── next.config.js
```

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000)

## Pages

| Route | Page | Rendering |
|---|---|---|
| `/` | Home | SSR |
| `/find-jobs` | Job Listings | SSR |
| `/find-jobs/[id]` | Job Detail | SSR |
| `/employers` | Companies | SSR |
| `/employers/[id]` | Company Profile | SSR |
| `/candidates` | Talent Directory | SSR |
| `/candidates/[id]` | Candidate Profile | SSR |
| `/blogs` | Blog Listing | SSR |
| `/blogs/[id]` | Blog Post | SSR |
| `/shop` | Career Store | SSR |
| `/about` | About Us | SSR |
| `/pricing` | Pricing Plans | SSR |
| `/faqs` | FAQ | SSR + CSR accordion |
| `/terms` | Terms & Conditions | SSR |
| `/invoice` | Invoice | SSR |
| `/contact` | Contact Us | SSR + CSR form |
| `/404` | 404 Error | Static |

## Connecting a Real Database

Replace the mock data in `lib/data.js` with real API calls:

```js
// In any getServerSideProps:
export async function getServerSideProps({ query }) {
  const jobs = await fetch(`https://your-api.com/jobs?q=${query.q}`).then(r => r.json())
  return { props: { jobs } }
}
```

## Design System

- **Font Display**: Clash Display (headings)
- **Font Body**: Satoshi (body text)
- **Primary**: `#0A65CC`
- **Accent**: `#FF6B35`
- **Design tokens** defined as CSS variables in `styles/globals.css`
