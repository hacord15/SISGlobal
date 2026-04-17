// pages/find-jobs/index.js — Find Jobs (SSR)
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import JobCard from '../../components/JobCard'
import { JOBS, CATEGORIES } from '../../lib/data'
import dynamic from 'next/dynamic'

// CSR filter panel
const JobFilters = dynamic(() => import('../../components/csr/JobFilters'), { ssr: false })

export default function FindJobsPage({ jobs, total, categories, query, location, category }) {
  return (
    <>
      <Head>
        <title>Find Jobs – SIS Global Workforce Solutions</title>
      </Head>
      <Layout>
        {/* Page Header */}
        <div style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0F7FF 100%)', padding: '48px 0' }}>
          <div className="container">
            <div className="breadcrumb" style={{ marginBottom: 16 }}>
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span>Find Jobs</span>
            </div>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, marginBottom: 8 }}>
              {query ? `Results for "${query}"` : 'Browse All Jobs'}
            </h1>
            <p style={{ fontSize: 16, color: 'var(--gray-600)' }}>
              Showing <strong>{total}</strong> jobs {location ? `in ${location}` : 'across all locations'}
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div style={{ borderBottom: '1px solid var(--gray-200)', background: 'white' }}>
          <div className="container" style={{ display: 'flex', gap: 4, overflowX: 'auto', padding: '0 24px' }}>
            <Link href="/find-jobs" style={{
              display: 'inline-flex', padding: '14px 18px', whiteSpace: 'nowrap',
              fontSize: 14, fontWeight: 600, borderBottom: !category ? '2px solid var(--primary)' : '2px solid transparent',
              color: !category ? 'var(--primary)' : 'var(--gray-600)',
            }}>All Jobs</Link>
            {categories.map((cat) => (
              <Link key={cat.name} href={`/find-jobs?category=${encodeURIComponent(cat.name)}`} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '14px 18px', whiteSpace: 'nowrap',
                fontSize: 14, fontWeight: 600,
                borderBottom: category === cat.name ? '2px solid var(--primary)' : '2px solid transparent',
                color: category === cat.name ? 'var(--primary)' : 'var(--gray-600)',
              }}>
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 32 }}>
              {/* Sidebar — CSR Filters */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <JobFilters />
              </div>

              {/* Job listings */}
              <div>
                {/* Toolbar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
                  <p style={{ fontSize: 15, color: 'var(--gray-600)' }}>
                    <strong style={{ color: 'var(--dark)' }}>{total}</strong> Jobs Found
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <select className="form-input" style={{ width: 'auto', padding: '8px 14px', fontSize: 14 }}>
                      <option>Newest First</option>
                      <option>Salary: High to Low</option>
                      <option>Salary: Low to High</option>
                      <option>Most Relevant</option>
                    </select>
                    {/* View toggle icons */}
                    <div style={{ display: 'flex', gap: 4, border: '1px solid var(--gray-300)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                      {['grid', 'list'].map((v) => (
                        <button key={v} style={{
                          padding: '8px 12px', border: 'none', background: 'white',
                          cursor: 'pointer', color: 'var(--gray-600)',
                        }} title={`${v} view`}>
                          {v === 'grid' ? '⊞' : '≡'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Jobs grid */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {jobs.map((job) => (
                    <JobCard key={job.id} job={job} view="list" />
                  ))}
                </div>

                {/* Pagination */}
                <div className="pagination">
                  {[1, 2, 3, '...', 8].map((p, i) => (
                    <button key={i} className={`page-btn ${p === 1 ? 'active' : ''}`}>{p}</button>
                  ))}
                  <button className="page-btn" style={{ width: 'auto', padding: '0 16px' }}>Next →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const { q, location, category } = query
  let jobs = [...JOBS]

  if (q) jobs = jobs.filter(j => j.title.toLowerCase().includes(q.toLowerCase()) || j.company.toLowerCase().includes(q.toLowerCase()))
  if (location) jobs = jobs.filter(j => j.location.toLowerCase().includes(location.toLowerCase()))
  if (category) jobs = jobs.filter(j => j.category === category)

  return {
    props: {
      jobs,
      total: jobs.length,
      categories: CATEGORIES,
      query: q || null,
      location: location || null,
      category: category || null,
    },
  }
}
