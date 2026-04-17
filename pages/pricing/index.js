// pages/pricing/index.js — SSR
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { PLANS } from '../../lib/data'

export default function PricingPage({ plans }) {
  return (
    <>
      <Head><title>Pricing – SIS Global Workforce Solutions</title></Head>
      <Layout>
        <div style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0F7FF 100%)', padding: '64px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-tag">Pricing</span>
            <h1 className="section-title" style={{ marginTop: 8 }}>Simple, Transparent Pricing</h1>
            <p className="section-subtitle">No hidden fees. Cancel anytime. Start free.</p>
            {/* Billing toggle (CSR) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', marginTop: 24 }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--dark)' }}>Monthly</span>
              <div style={{ width: 44, height: 24, borderRadius: 12, background: 'var(--primary)', position: 'relative', cursor: 'pointer' }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'white', position: 'absolute', top: 3, left: 3 }} />
              </div>
              <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--gray-600)' }}>Annual <span style={{ fontSize: 12, color: 'var(--success)', fontWeight: 700 }}>Save 20%</span></span>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 960, margin: '0 auto' }}>
              {plans.map((plan) => (
                <div key={plan.name} style={{
                  background: plan.popular ? 'var(--primary)' : 'white',
                  border: plan.popular ? 'none' : '1px solid var(--gray-200)',
                  borderRadius: 'var(--radius-xl)', padding: 32,
                  position: 'relative', boxShadow: plan.popular ? '0 16px 48px rgba(10,101,204,0.3)' : 'var(--shadow-sm)',
                  transform: plan.popular ? 'scale(1.05)' : 'none',
                }}>
                  {plan.popular && (
                    <div style={{
                      position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                      background: 'var(--accent)', color: 'white', padding: '4px 16px',
                      borderRadius: 'var(--radius-full)', fontSize: 13, fontWeight: 700,
                    }}>Most Popular</div>
                  )}

                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: plan.popular ? 'white' : 'var(--dark)' }}>{plan.name}</h3>
                  <p style={{ fontSize: 14, color: plan.popular ? 'rgba(255,255,255,0.75)' : 'var(--gray-600)', marginBottom: 24 }}>{plan.description}</p>

                  <div style={{ marginBottom: 28 }}>
                    <span style={{ fontSize: 48, fontWeight: 800, color: plan.popular ? 'white' : 'var(--dark)', fontFamily: 'var(--font-display)' }}>
                      {plan.price === 0 ? 'Free' : `$${plan.price}`}
                    </span>
                    {plan.price > 0 && <span style={{ fontSize: 15, color: plan.popular ? 'rgba(255,255,255,0.7)' : 'var(--gray-500)' }}>/month</span>}
                  </div>

                  <Link href="/register" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '13px', borderRadius: 'var(--radius)',
                    fontWeight: 700, fontSize: 15, textDecoration: 'none', marginBottom: 28,
                    background: plan.popular ? 'white' : 'var(--primary)',
                    color: plan.popular ? 'var(--primary)' : 'white',
                    transition: 'all 0.2s',
                  }}>
                    {plan.cta}
                  </Link>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {plan.features.map((f) => (
                      <div key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: plan.popular ? 'rgba(255,255,255,0.9)' : 'var(--gray-700)' }}>
                        <span style={{ color: plan.popular ? 'white' : 'var(--success)', fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                      </div>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <div key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: plan.popular ? 'rgba(255,255,255,0.4)' : 'var(--gray-400)', textDecoration: 'line-through' }}>
                        <span style={{ flexShrink: 0 }}>✗</span> {f}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ teaser */}
            <div style={{ textAlign: 'center', marginTop: 56, padding: '32px', background: 'var(--gray-50)', borderRadius: 'var(--radius-xl)' }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Questions about pricing?</h3>
              <p style={{ fontSize: 16, color: 'var(--gray-600)', marginBottom: 20 }}>Check our FAQ or get in touch — we're happy to help find the right plan for you.</p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                <Link href="/faqs" className="btn btn-outline">View FAQ</Link>
                <Link href="/contact" className="btn btn-primary">Contact Sales</Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  return { props: { plans: PLANS } }
}
