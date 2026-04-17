// pages/find-jobs/[id].js — Job detail (SSR)
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { JOBS } from '../../lib/data'

export default function JobDetailPage({ job, related }) {
  if (!job) return null

  const typeColors = {
    'Full Time': { bg: '#E7F9ED', color: '#0BA02C' },
    'Remote': { bg: '#E8F1FB', color: '#0A65CC' },
    'Hybrid': { bg: '#FFF8EC', color: '#FFB836' },
  }
  const tc = typeColors[job.type] || typeColors['Full Time']

  return (
    <>
      <Head><title>{job.title} at {job.company} – SIS Global Workforce Solutions</title></Head>
      <Layout>
        <div style={{ background: 'var(--gray-50)', padding: '48px 0' }}>
          <div className="container">
            <div className="breadcrumb" style={{ marginBottom: 20 }}>
              <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
              <Link href="/find-jobs">Find Jobs</Link><span className="breadcrumb-sep">›</span>
              <span>{job.title}</span>
            </div>
            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '32px', border: '1px solid var(--gray-200)', display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ width: 80, height: 80, borderRadius: 16, background: job.logoColor + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 800, color: job.logoColor, fontFamily: 'var(--font-display)', flexShrink: 0 }}>
                {job.logo}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                  {job.urgent && <span className="badge badge-orange">Urgent</span>}
                  {job.featured && <span className="badge badge-blue">Featured</span>}
                  <span style={{ padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: 13, fontWeight: 600, background: tc.bg, color: tc.color }}>{job.type}</span>
                </div>
                <h1 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, marginBottom: 6 }}>{job.title}</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: 15, color: 'var(--gray-600)' }}>
                  <span>🏢 {job.company}</span>
                  <span>📍 {job.location}</span>
                  <span>💰 {job.salary}</span>
                  <span>📅 Posted {job.posted}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
                <button className="btn btn-outline">♡ Save</button>
                <Link href="#apply" className="btn btn-primary">Apply Now →</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 32 }}>
              {/* Main */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {[
                  { title: 'Job Description', content: `We are looking for a talented ${job.title} to join our team at ${job.company}. You'll be working on cutting-edge products that impact millions of users worldwide. This is an exciting opportunity to shape the future of our platform and grow your career in a fast-paced, collaborative environment.` },
                  { title: 'Key Responsibilities', content: null, bullets: ['Design, develop, and maintain high-quality software components', 'Collaborate with cross-functional teams including design, product, and engineering', 'Write clean, maintainable, well-documented code', 'Participate in code reviews and technical discussions', 'Continuously improve our development processes and tools', 'Mentor junior team members and contribute to team culture'] },
                  { title: 'Requirements', content: null, bullets: ['3+ years of professional experience in a relevant role', 'Strong proficiency in required technical skills', 'Experience working in an Agile/Scrum environment', 'Excellent communication and collaboration skills', 'Bachelor\'s degree in Computer Science or equivalent experience', 'Passion for building great products at scale'] },
                  { title: 'Nice to Have', content: null, bullets: ['Experience with our specific tech stack', 'Open source contributions', 'Previous experience at a high-growth startup'] },
                ].map((sec) => (
                  <div key={sec.title}>
                    <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--gray-200)' }}>{sec.title}</h2>
                    {sec.content && <p style={{ fontSize: 15, color: 'var(--gray-700)', lineHeight: 1.8 }}>{sec.content}</p>}
                    {sec.bullets && (
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {sec.bullets.map((b) => (
                          <li key={b} style={{ display: 'flex', gap: 10, fontSize: 15, color: 'var(--gray-700)', lineHeight: 1.6 }}>
                            <span style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>✓</span> {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Apply form */}
                <div id="apply" style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-xl)', padding: 32 }}>
                  <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Apply for This Position</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div className="grid-2">
                      <div className="form-group"><label className="form-label">Full Name</label><input className="form-input" placeholder="Your name" /></div>
                      <div className="form-group"><label className="form-label">Email</label><input className="form-input" type="email" placeholder="your@email.com" /></div>
                    </div>
                    <div className="form-group"><label className="form-label">Cover Letter</label><textarea className="form-input" rows="4" placeholder="Tell us why you're a great fit..." /></div>
                    <div className="form-group"><label className="form-label">Resume / CV</label><input className="form-input" type="file" /></div>
                    <button className="btn btn-primary" style={{ width: 'fit-content', marginTop: 8 }}>Submit Application →</button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="sidebar-filter">
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 20 }}>Job Overview</h3>
                  {[
                    { label: 'Posted On', value: job.posted },
                    { label: 'Job Type', value: job.type },
                    { label: 'Salary', value: job.salary },
                    { label: 'Category', value: job.category },
                    { label: 'Experience', value: job.experience },
                    { label: 'Location', value: job.location },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--gray-100)', fontSize: 14 }}>
                      <span style={{ color: 'var(--gray-600)' }}>{label}</span>
                      <span style={{ fontWeight: 600, color: 'var(--dark)' }}>{value}</span>
                    </div>
                  ))}
                </div>

                <div className="sidebar-filter">
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 16 }}>Tags</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {job.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Jobs */}
            {related.length > 0 && (
              <div style={{ marginTop: 48 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>Related Jobs</h2>
                <div className="grid-3">
                  {related.map((j) => (
                    <div key={j.id} className="card">
                      <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
                        <Link href={`/find-jobs/${j.id}`}>{j.title}</Link>
                      </h3>
                      <p style={{ fontSize: 14, color: 'var(--gray-600)', marginBottom: 12 }}>{j.company} · {j.location}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--primary)' }}>{j.salary}</span>
                        <span className="badge badge-blue">{j.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const job = JOBS.find((j) => j.id === parseInt(params.id))
  if (!job) return { notFound: true }
  const related = JOBS.filter((j) => j.category === job.category && j.id !== job.id).slice(0, 3)
  return { props: { job, related } }
}
