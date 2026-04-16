// pages/404.js — Custom 404 page
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Custom404() {
  return (
    <>
      <Head><title>404 – Page Not Found | TalentFlow</title></Head>
      <Layout>
        <div style={{
          minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(135deg, #EBF4FF 0%, #F0F7FF 100%)',
          padding: '80px 24px',
        }}>
          <div style={{ textAlign: 'center', maxWidth: 560 }}>
            {/* Illustration */}
            <div style={{ position: 'relative', marginBottom: 40 }}>
              <div style={{
                fontSize: 'clamp(100px, 20vw, 160px)',
                fontFamily: 'var(--font-display)', fontWeight: 800,
                color: 'var(--primary)', lineHeight: 1,
                background: 'linear-gradient(135deg, var(--primary) 0%, #60A5FA 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                userSelect: 'none',
              }}>404</div>
              <div style={{
                position: 'absolute', bottom: -10, left: '50%', transform: 'translateX(-50%)',
                width: '60%', height: 20,
                background: 'radial-gradient(ellipse at center, rgba(10,101,204,0.15) 0%, transparent 70%)',
              }} />
            </div>

            <h1 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 700, marginBottom: 16 }}>
              Oops! This Page Has Left the Building
            </h1>
            <p style={{ fontSize: 17, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 36 }}>
              The page you're looking for might have been moved, deleted, or never existed. But don't worry — there are plenty of great jobs waiting for you.
            </p>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/" className="btn btn-primary">← Back to Home</Link>
              <Link href="/find-jobs" className="btn btn-outline">Browse Jobs</Link>
            </div>

            {/* Quick links */}
            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '24px', border: '1px solid var(--gray-200)' }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--gray-500)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>
                Popular Pages
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
                {[
                  { label: 'Find Jobs', href: '/find-jobs' },
                  { label: 'Top Employers', href: '/employers' },
                  { label: 'Browse Candidates', href: '/candidates' },
                  { label: 'Pricing', href: '/pricing' },
                  { label: 'Blog', href: '/blogs' },
                  { label: 'Contact Us', href: '/contact' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="tag">{link.label}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
