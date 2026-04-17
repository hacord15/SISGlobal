// pages/employers/index.js — SSR
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { EMPLOYERS } from '../../lib/data'

export default function EmployersPage({ employers, total }) {
  return (
    <>
      <Head><title>Top Companies – SIS Global Workforce Solutions</title></Head>
      <Layout>
        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0F7FF 100%)', padding: '56px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-tag">Companies</span>
            <h1 className="section-title" style={{ marginTop: 8 }}>Find Your Dream Employer</h1>
            <p className="section-subtitle">Discover {total}+ companies actively hiring talented professionals</p>
            <div style={{ marginTop: 28, display: 'flex', gap: 12, maxWidth: 520, margin: '28px auto 0' }}>
              <input className="form-input" placeholder="Search companies..." style={{ flex: 1 }} />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            {/* Stats row */}
            <div style={{ display: 'flex', gap: 24, marginBottom: 36, flexWrap: 'wrap' }}>
              {['All Industries', 'Technology', 'Finance', 'Healthcare', 'Marketing', 'E-Commerce'].map((ind, i) => (
                <button key={ind} className={`tag ${i === 0 ? 'active' : ''}`}>{ind}</button>
              ))}
            </div>

            <div className="grid-4">
              {employers.map((emp) => (
                <Link key={emp.id} href={`/employers/${emp.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {/* Logo */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                      <div style={{
                        width: 60, height: 60, borderRadius: 14,
                        background: emp.logoColor + '18', display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        fontSize: 24, fontWeight: 800, color: emp.logoColor,
                        fontFamily: 'var(--font-display)',
                      }}>{emp.logo}</div>
                      <span className="badge badge-blue">{emp.jobs} Jobs</span>
                    </div>

                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{emp.name}</h3>
                      <p style={{ fontSize: 13, color: 'var(--gray-600)', marginBottom: 4 }}>{emp.industry}</p>
                      <p style={{ fontSize: 13, color: 'var(--gray-500)' }}>📍 {emp.location}</p>
                    </div>

                    <p style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.6, flex: 1 }}>
                      {emp.description}
                    </p>

                    <div style={{ display: 'flex', gap: 16, fontSize: 12, color: 'var(--gray-500)', paddingTop: 12, borderTop: '1px solid var(--gray-200)' }}>
                      <span>Founded {emp.founded}</span>
                      <span>•</span>
                      <span>{emp.size} employees</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="pagination">
              {[1, 2, 3].map((p) => (
                <button key={p} className={`page-btn ${p === 1 ? 'active' : ''}`}>{p}</button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA for employers */}
        <div style={{ background: 'var(--primary)', padding: '64px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: 'white', marginBottom: 12 }}>Are You Hiring?</h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', marginBottom: 28 }}>Post your jobs and reach thousands of qualified candidates.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
              <Link href="/pricing" className="btn btn-white">View Pricing</Link>
              <Link href="/pricing" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>Post a Job Free</Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const { industry, q } = query
  let employers = [...EMPLOYERS]
  if (industry) employers = employers.filter(e => e.industry.toLowerCase().includes(industry.toLowerCase()))
  if (q) employers = employers.filter(e => e.name.toLowerCase().includes(q.toLowerCase()))
  return { props: { employers, total: employers.length } }
}
