// pages/candidates/[id].js — SSR
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { CANDIDATES } from '../../lib/data'

export default function CandidateDetailPage({ candidate }) {
  if (!candidate) return null
  return (
    <>
      <Head><title>{candidate.name} – TalentFlow</title></Head>
      <Layout>
        <div style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0F7FF 100%)', padding: '48px 0' }}>
          <div className="container">
            <div className="breadcrumb" style={{ marginBottom: 20 }}>
              <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
              <Link href="/candidates">Candidates</Link><span className="breadcrumb-sep">›</span>
              <span>{candidate.name}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div style={{
                  width: 96, height: 96, borderRadius: '50%',
                  background: candidate.avatarColor,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 32, fontWeight: 700, color: 'white',
                  fontFamily: 'var(--font-display)',
                }}>{candidate.avatar}</div>
                {candidate.available && (
                  <span style={{
                    position: 'absolute', bottom: 4, right: 4,
                    width: 18, height: 18, borderRadius: '50%',
                    background: 'var(--success)', border: '3px solid white',
                  }} />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 6 }}>{candidate.name}</h1>
                <p style={{ fontSize: 16, color: 'var(--primary)', fontWeight: 600, marginBottom: 8 }}>{candidate.title}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: 15, color: 'var(--gray-600)' }}>
                  <span>📍 {candidate.location}</span>
                  <span>💼 {candidate.experience} experience</span>
                  <span>🎓 {candidate.education}</span>
                  <span style={{ color: candidate.available ? 'var(--success)' : 'var(--gray-500)', fontWeight: 600 }}>
                    {candidate.available ? '● Open to Work' : '○ Not Available'}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-outline">Download CV</button>
                <button className="btn btn-primary">Contact Candidate →</button>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 32 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {/* About */}
                <div>
                  <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid var(--gray-200)' }}>About Me</h2>
                  <p style={{ fontSize: 15, color: 'var(--gray-700)', lineHeight: 1.8 }}>
                    Experienced {candidate.title} with {candidate.experience} of hands-on experience building impactful products.
                    Passionate about solving complex problems with elegant solutions. Proven track record of leading high-performing teams
                    and delivering results at scale. Currently open to new opportunities that challenge me and allow continued growth.
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--gray-200)' }}>Skills</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {candidate.skills.map((skill) => (
                      <span key={skill} style={{
                        padding: '8px 18px', borderRadius: 'var(--radius-full)',
                        fontSize: 14, fontWeight: 600,
                        background: 'var(--primary-light)', color: 'var(--primary)',
                      }}>{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--gray-200)' }}>Work Experience</h2>
                  {[
                    { role: candidate.title, company: 'Previous Company', period: '2022 – Present', desc: 'Led cross-functional teams to deliver key product initiatives. Improved system performance by 40% and reduced time-to-market.' },
                    { role: 'Mid-level ' + candidate.title.split(' ').pop(), company: 'Earlier Company', period: '2020 – 2022', desc: 'Contributed to core product features. Collaborated with design and product teams to ship user-facing improvements.' },
                  ].map((job) => (
                    <div key={job.period} style={{ display: 'flex', gap: 20, marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid var(--gray-100)' }}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>💼</div>
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 700 }}>{job.role}</h3>
                        <p style={{ fontSize: 14, color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>{job.company}</p>
                        <p style={{ fontSize: 13, color: 'var(--gray-500)', marginBottom: 8 }}>{job.period}</p>
                        <p style={{ fontSize: 14, color: 'var(--gray-700)', lineHeight: 1.7 }}>{job.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Education */}
                <div>
                  <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--gray-200)' }}>Education</h2>
                  <div style={{ display: 'flex', gap: 20 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>🎓</div>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700 }}>Bachelor's in Computer Science</h3>
                      <p style={{ fontSize: 14, color: 'var(--primary)', fontWeight: 600 }}>{candidate.education}</p>
                      <p style={{ fontSize: 13, color: 'var(--gray-500)' }}>2015 – 2019 · GPA 3.8/4.0</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="sidebar-filter">
                  <h3 className="filter-title">Quick Info</h3>
                  {[
                    ['Expected Salary', candidate.salary],
                    ['Experience', candidate.experience],
                    ['Location', candidate.location],
                    ['Education', candidate.education],
                    ['Status', candidate.available ? 'Open to Work' : 'Not Available'],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '10px 0', borderBottom: '1px solid var(--gray-100)', fontSize: 14 }}>
                      <span style={{ color: 'var(--gray-500)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{k}</span>
                      <span style={{ fontWeight: 600, color: 'var(--dark)' }}>{v}</span>
                    </div>
                  ))}
                </div>

                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Contact Candidate</button>
                <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const candidate = CANDIDATES.find(c => c.id === parseInt(params.id))
  if (!candidate) return { notFound: true }
  return { props: { candidate } }
}
