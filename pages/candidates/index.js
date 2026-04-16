// pages/candidates/index.js — SSR
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { CANDIDATES } from '../../lib/data'

export default function CandidatesPage({ candidates, total }) {
  return (
    <>
      <Head><title>Browse Candidates – TalentFlow</title></Head>
      <Layout>
        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0F7FF 100%)', padding: '56px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-tag">Candidates</span>
            <h1 className="section-title" style={{ marginTop: 8 }}>Find Top Talent</h1>
            <p className="section-subtitle">Browse {total}+ qualified professionals ready to join your team</p>
            <div style={{ marginTop: 28, display: 'flex', gap: 12, maxWidth: 540, margin: '28px auto 0' }}>
              <input className="form-input" placeholder="Search by skill, title, or name..." style={{ flex: 1 }} />
              <input className="form-input" placeholder="Location..." style={{ width: 180 }} />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            {/* Filter chips */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
              {['All', 'Available Now', 'Engineering', 'Design', 'Marketing', 'Management', 'Data'].map((f, i) => (
                <button key={f} className={`tag ${i === 0 ? 'active' : ''}`}>{f}</button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <p style={{ fontSize: 15, color: 'var(--gray-600)' }}>
                Showing <strong style={{ color: 'var(--dark)' }}>{total}</strong> candidates
              </p>
              <select className="form-input" style={{ width: 'auto', padding: '8px 14px', fontSize: 14 }}>
                <option>Sort: Most Relevant</option>
                <option>Salary: High to Low</option>
                <option>Experience: Senior First</option>
              </select>
            </div>

            <div className="grid-4">
              {candidates.map((candidate) => (
                <Link key={candidate.id} href={`/candidates/${candidate.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {/* Avatar */}
                    <div style={{ position: 'relative', width: 72, height: 72, margin: '0 auto' }}>
                      <div style={{
                        width: 72, height: 72, borderRadius: '50%',
                        background: candidate.avatarColor,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 22, fontWeight: 700, color: 'white',
                        fontFamily: 'var(--font-display)',
                      }}>{candidate.avatar}</div>
                      {candidate.available && (
                        <span style={{
                          position: 'absolute', bottom: 2, right: 2,
                          width: 14, height: 14, borderRadius: '50%',
                          background: 'var(--success)',
                          border: '2px solid white',
                        }} title="Available for hire" />
                      )}
                    </div>

                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{candidate.name}</h3>
                      <p style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 600 }}>{candidate.title}</p>
                      <p style={{ fontSize: 13, color: 'var(--gray-500)', marginTop: 4 }}>📍 {candidate.location}</p>
                    </div>

                    {/* Skills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
                      {candidate.skills.slice(0, 3).map((skill) => (
                        <span key={skill} style={{ padding: '3px 10px', borderRadius: 'var(--radius-full)', fontSize: 11, fontWeight: 600, background: 'var(--gray-100)', color: 'var(--gray-700)' }}>
                          {skill}
                        </span>
                      ))}
                      {candidate.skills.length > 3 && (
                        <span style={{ padding: '3px 10px', borderRadius: 'var(--radius-full)', fontSize: 11, fontWeight: 600, background: 'var(--gray-100)', color: 'var(--gray-500)' }}>
                          +{candidate.skills.length - 3}
                        </span>
                      )}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid var(--gray-200)' }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--primary)' }}>{candidate.salary}</span>
                      <span style={{ fontSize: 12, color: candidate.available ? 'var(--success)' : 'var(--gray-500)', fontWeight: 600 }}>
                        {candidate.available ? '● Available' : '○ Not Available'}
                      </span>
                    </div>

                    <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', padding: '9px' }}>
                      View Profile
                    </button>
                  </div>
                </Link>
              ))}
            </div>

            <div className="pagination">
              {[1, 2, 3, 4].map((p) => (
                <button key={p} className={`page-btn ${p === 1 ? 'active' : ''}`}>{p}</button>
              ))}
              <button className="page-btn" style={{ width: 'auto', padding: '0 16px' }}>Next →</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const { q, available } = query
  let candidates = [...CANDIDATES]
  if (q) candidates = candidates.filter(c =>
    c.name.toLowerCase().includes(q.toLowerCase()) ||
    c.title.toLowerCase().includes(q.toLowerCase()) ||
    c.skills.some(s => s.toLowerCase().includes(q.toLowerCase()))
  )
  if (available === 'true') candidates = candidates.filter(c => c.available)
  return { props: { candidates, total: candidates.length } }
}
