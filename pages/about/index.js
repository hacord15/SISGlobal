// pages/about/index.js — SSR
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { STATS } from '../../lib/data'

const TEAM = [
  { name: 'Alexandra Reed', role: 'CEO & Co-Founder', avatar: 'AR', color: '#6366F1' },
  { name: 'Marcus Johnson', role: 'CTO & Co-Founder', avatar: 'MJ', color: '#14B8A6' },
  { name: 'Priya Sharma', role: 'Head of Product', avatar: 'PS', color: '#F59E0B' },
  { name: 'Daniel Park', role: 'Head of Design', avatar: 'DP', color: '#EC4899' },
  { name: 'Olivia Chen', role: 'VP of Marketing', avatar: 'OC', color: '#10B981' },
  { name: 'James Okafor', role: 'Head of Engineering', avatar: 'JO', color: '#3B82F6' },
]

export default function AboutPage({ stats }) {
  return (
    <>
      <Head><title>About Us – TalentFlow</title></Head>
      <Layout>
        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0F7FF 100%)', padding: '80px 0' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <span className="section-tag">Our Story</span>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, marginTop: 12, marginBottom: 20, lineHeight: 1.1 }}>
              We're on a Mission to Connect <span style={{ color: 'var(--primary)' }}>People with Purpose</span>
            </h1>
            <p style={{ fontSize: 18, color: 'var(--gray-600)', lineHeight: 1.7 }}>
              TalentFlow was founded in 2019 with one simple belief: every person deserves a job that excites them, and every company deserves a team that drives them forward.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div style={{ background: 'var(--primary)', padding: '40px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
              {[
                { label: 'Jobs Posted', value: stats.jobs },
                { label: 'Companies', value: stats.employers },
                { label: 'Candidates', value: stats.candidates },
                { label: 'Successful Hires', value: stats.placements },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 36, fontWeight: 800, color: 'white', fontFamily: 'var(--font-display)' }}>{s.value}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
              <div>
                <span className="section-tag">Who We Are</span>
                <h2 style={{ fontSize: 36, fontWeight: 700, margin: '12px 0 20px', lineHeight: 1.2 }}>Built by People Who've Been in Your Shoes</h2>
                <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 20 }}>
                  Our founding team spent years on both sides of the hiring table — as job seekers frustrated with impersonal platforms, and as hiring managers drowning in unqualified applications.
                </p>
                <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 28 }}>
                  We built TalentFlow to solve both problems simultaneously: a platform that's intelligent enough to match the right people with the right roles, and transparent enough that everyone knows where they stand.
                </p>
                <div style={{ display: 'flex', gap: 16 }}>
                  <Link href="/find-jobs" className="btn btn-primary">Find Jobs</Link>
                  <Link href="/contact" className="btn btn-outline">Contact Us</Link>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { icon: '🎯', title: 'Smart Matching', desc: 'AI-powered job recommendations tailored to your skills' },
                  { icon: '🔍', title: 'Verified Employers', desc: 'Every company is vetted before listing jobs' },
                  { icon: '📊', title: 'Salary Insights', desc: 'Real-time salary data to help you negotiate better' },
                  { icon: '🤝', title: 'Community First', desc: 'A supportive network of professionals and mentors' },
                ].map((item) => (
                  <div key={item.title} style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)', padding: 20, border: '1px solid var(--gray-200)' }}>
                    <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{item.title}</h3>
                    <p style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Our Team</span>
              <h2 className="section-title">Meet the People Behind TalentFlow</h2>
              <p className="section-subtitle">A diverse team of passionate professionals committed to your success</p>
            </div>
            <div className="grid-3">
              {TEAM.map((member) => (
                <div key={member.name} className="card" style={{ textAlign: 'center', padding: '32px 24px' }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: '50%',
                    background: member.color, margin: '0 auto 16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 26, fontWeight: 700, color: 'white',
                    fontFamily: 'var(--font-display)',
                  }}>{member.avatar}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{member.name}</h3>
                  <p style={{ fontSize: 14, color: 'var(--primary)', fontWeight: 600 }}>{member.role}</p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 16 }}>
                    {['in', 'tw', 'gh'].map((s) => (
                      <a key={s} href="#" style={{
                        width: 32, height: 32, borderRadius: 'var(--radius)',
                        background: 'var(--gray-100)', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontSize: 11, fontWeight: 700,
                        color: 'var(--gray-600)',
                      }}>{s}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Our Values</span>
              <h2 className="section-title">What We Stand For</h2>
            </div>
            <div className="grid-4">
              {[
                { icon: '🌍', title: 'Inclusivity', desc: 'Building a platform where everyone has equal opportunity regardless of background.' },
                { icon: '🔬', title: 'Innovation', desc: 'Constantly improving how people find jobs and how companies find talent.' },
                { icon: '💬', title: 'Transparency', desc: 'Honest communication with candidates, employers, and our own team.' },
                { icon: '❤️', title: 'Impact', desc: 'Every hire we facilitate is a life changed. That responsibility drives us daily.' },
              ].map((v) => (
                <div key={v.title} style={{ textAlign: 'center', padding: '24px 16px' }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{v.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  return { props: { stats: STATS } }
}
