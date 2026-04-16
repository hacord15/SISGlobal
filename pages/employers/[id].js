// pages/employers/[id].js — SSR
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import JobCard from '../../components/JobCard'
import { EMPLOYERS, JOBS } from '../../lib/data'

export default function EmployerDetailPage({ employer, jobs }) {
  if (!employer) return null
  return (
    <>
      <Head><title>{employer.name} Jobs – TalentFlow</title></Head>
      <Layout>
        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0F7FF 100%)', padding: '48px 0' }}>
          <div className="container">
            <div className="breadcrumb" style={{ marginBottom: 20 }}>
              <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
              <Link href="/employers">Companies</Link><span className="breadcrumb-sep">›</span>
              <span>{employer.name}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ width: 90, height: 90, borderRadius: 20, background: employer.logoColor + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, fontWeight: 800, color: employer.logoColor, fontFamily: 'var(--font-display)', flexShrink: 0 }}>
                {employer.logo}
              </div>
              <div style={{ flex: 1 }}>
                <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 8 }}>{employer.name}</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: 15, color: 'var(--gray-600)' }}>
                  <span>🏭 {employer.industry}</span>
                  <span>📍 {employer.location}</span>
                  <span>👥 {employer.size} employees</span>
                  <span>📅 Founded {employer.founded}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-outline">Follow</button>
                <Link href="/find-jobs" className="btn btn-primary">{employer.jobs} Open Positions</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 32 }}>
              <div>
                <div style={{ marginBottom: 32 }}>
                  <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>About {employer.name}</h2>
                  <p style={{ fontSize: 15, color: 'var(--gray-700)', lineHeight: 1.8 }}>
                    {employer.description} We pride ourselves on building products that make a difference in the lives of millions of people around the world. Our team is diverse, talented, and passionate about innovation.
                  </p>
                </div>

                <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Open Positions ({jobs.length})</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {jobs.length > 0
                    ? jobs.map((job) => <JobCard key={job.id} job={job} view="list" />)
                    : <p style={{ color: 'var(--gray-600)', fontSize: 15 }}>No open positions at the moment. Check back soon!</p>
                  }
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="sidebar-filter">
                  <h3 className="filter-title">Company Info</h3>
                  {[
                    ['Industry', employer.industry],
                    ['Company Size', employer.size],
                    ['Founded', employer.founded],
                    ['Headquarters', employer.location],
                    ['Open Roles', employer.jobs],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--gray-100)', fontSize: 14 }}>
                      <span style={{ color: 'var(--gray-600)' }}>{k}</span>
                      <span style={{ fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const employer = EMPLOYERS.find((e) => e.id === parseInt(params.id))
  if (!employer) return { notFound: true }
  const jobs = JOBS.filter((j) => j.company === employer.name)
  return { props: { employer, jobs } }
}
