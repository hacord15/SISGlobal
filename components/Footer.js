// components/Footer.js
import Link from 'next/link'

const FOOTER_LINKS = {
  'For Job Seekers': [
    { label: 'Browse Jobs', href: '/find-jobs' },
    { label: 'Browse Companies', href: '/employers' },
    { label: 'Candidate Dashboard', href: '/dashboard' },
    { label: 'Career Advice', href: '/blogs' },
    { label: 'Salary Explorer', href: '/salary' },
  ],
  'For Employers': [
    { label: 'Post a Job', href: '/post-job' },
    { label: 'Browse Candidates', href: '/candidates' },
    { label: 'Pricing Plans', href: '/pricing' },
    { label: 'Employer FAQ', href: '/faqs' },
    { label: 'Enterprise', href: '/pricing' },
  ],
  'Company': [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Shop', href: '/shop' },
    { label: 'Press Kit', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  'Support': [
    { label: 'Help Center', href: '/faqs' },
    { label: "FAQ's", href: '/faqs' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/terms' },
    { label: 'Cookie Policy', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', color: 'var(--gray-300)', paddingTop: 64 }}>
      <div className="container">
        {/* Top */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          {/* Brand */}
          <div>
            {/* <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{
                width: 38, height: 38, background: 'var(--primary)',
                borderRadius: 10, display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 20,
              }}>T</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--white)' }}>
                Talent<span style={{ color: '#60A5FA' }}>Flow</span>
              </span>
            </Link> */}
            <Link
  href="/"
  style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}
>
  <img
    src="/asset/LOGO-2-gray colour.png"
    alt="TalentFlow Logo"
    style={{
      height: '200px',
      // background:"#fff",
      
      width: 'auto',
      objectFit: 'contain'
    }}
  />
</Link>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--gray-500)', maxWidth: 280 }}>
              The world's leading job board connecting talented professionals with world-class companies.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((s) => (
                <a key={s} href="#" style={{
                  width: 36, height: 36, borderRadius: 'var(--radius)',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gray-400)', fontSize: 12, fontWeight: 700,
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={(e) => { e.target.style.background = 'var(--primary)'; e.target.style.color = 'white' }}
                  onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.08)'; e.target.style.color = 'var(--gray-400)' }}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--white)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {group}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} style={{ fontSize: 14, color: 'var(--gray-500)', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--white)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--gray-500)'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ padding: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontSize: 14, color: 'var(--gray-600)' }}>
            © 2024 TalentFlow. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((t) => (
              <Link key={t} href="/terms" style={{ fontSize: 13, color: 'var(--gray-600)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--white)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--gray-600)'}
              >{t}</Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
