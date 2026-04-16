// pages/faqs/index.js — SSR
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { FAQS } from '../../lib/data'
import dynamic from 'next/dynamic'

// CSR accordion for interactivity
const FAQAccordion = dynamic(() => import('../../components/csr/FAQAccordion'), { ssr: false })

export default function FAQsPage({ faqs }) {
  return (
    <>
      <Head><title>FAQ – TalentFlow</title></Head>
      <Layout>
        <div style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0F7FF 100%)', padding: '64px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-tag">Help Center</span>
            <h1 className="section-title" style={{ marginTop: 8 }}>Frequently Asked Questions</h1>
            <p className="section-subtitle">Everything you need to know about TalentFlow</p>
            <div style={{ marginTop: 28, display: 'flex', gap: 12, maxWidth: 480, margin: '28px auto 0' }}>
              <input className="form-input" placeholder="Search questions..." />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 48 }}>
              {/* Sidebar nav */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-500)', marginBottom: 12 }}>Categories</div>
                {['General', 'For Job Seekers', 'For Employers', 'Billing & Payments', 'Account & Security'].map((cat, i) => (
                  <button key={cat} style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    padding: '10px 14px', borderRadius: 'var(--radius)',
                    border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600,
                    background: i === 0 ? 'var(--primary-light)' : 'transparent',
                    color: i === 0 ? 'var(--primary)' : 'var(--gray-700)',
                    transition: 'all 0.2s',
                  }}>
                    {cat}
                  </button>
                ))}
              </div>

              {/* FAQs */}
              <div style={{ maxWidth: 720 }}>
                <FAQAccordion faqs={faqs} />

                {/* Still have questions? */}
                <div style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-xl)', padding: '32px', textAlign: 'center', marginTop: 40, border: '1px solid var(--gray-200)' }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>💬</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Still have questions?</h3>
                  <p style={{ fontSize: 15, color: 'var(--gray-600)', marginBottom: 20 }}>Can't find what you're looking for? Our support team is here to help.</p>
                  <Link href="/contact" className="btn btn-primary">Contact Support</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  return { props: { faqs: FAQS } }
}
