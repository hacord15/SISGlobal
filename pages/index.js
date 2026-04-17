// 

// pages/index.js — Home Page (SSR via getServerSideProps)
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import JobCard from '../components/JobCard'
import { JOBS, CATEGORIES, STATS, TESTIMONIALS, EMPLOYERS } from '../lib/data'

// CSR-only interactive search — imported as child into SSR page
import dynamic from 'next/dynamic'
const HeroSearch = dynamic(() => import('../components/csr/HeroSearch'), { ssr: false })

export default function HomePage({ featuredJobs, categories, stats, testimonials, topEmployers }) {
  return (
    <>
      <Head>
        <title>SIS Global – Workforce Outsourcing Solutions</title>
      </Head>
      <Layout>
        {/* HERO */}
        <section style={{
          background: 'linear-gradient(135deg, #EBF4FF 0%, #F0F7FF 40%, #E8F1FF 100%)',
          padding: '30px 0 50px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, background: 'radial-gradient(circle, rgba(10,101,204,0.12) 0%, transparent 70%)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: -40, left: '10%', width: 200, height: 200, background: 'radial-gradient(circle, rgba(10,101,204,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />

          <div className="container" style={{ position: 'relative' }}>
            <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', padding: '8px 16px', borderRadius: 'var(--radius-full)', marginBottom: 24, boxShadow: 'var(--shadow-sm)', fontSize: 14, fontWeight: 600, color: 'var(--primary)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--success)', display: 'inline-block' }} />
                {stats.jobs} jobs currently available
              </div>

              <h1 style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--dark)', marginBottom: 20 }}>
                Find a Job That{' '}
                <span style={{ color: 'var(--primary)', position: 'relative' }}>
                  Matches
                  <svg style={{ position: 'absolute', bottom: -6, left: 0, width: '100%' }} viewBox="0 0 200 10" preserveAspectRatio="none">
                    <path d="M0 8 Q100 0 200 8" stroke="var(--primary)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4" />
                  </svg>
                </span>{' '}
                Your Passion
              </h1>

              <p style={{ fontSize: 18, color: 'var(--gray-600)', marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}>
                Connect with top employers and discover opportunities that align with your skills, values, and career goals.
              </p>
              
              <HeroSearch />

              <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 14, color: 'var(--gray-600)', fontWeight: 500 }}>Popular:</span>
                {['Security', 'Healthcare', 'Logistics', 'Warehouse'].map((term) => (
                  <Link key={term} href={`/find-jobs?q=${encodeURIComponent(term)}`} style={{
                    fontSize: 13, fontWeight: 500, padding: '4px 12px',
                    borderRadius: 'var(--radius-full)', background: 'white',
                    color: 'var(--gray-700)', boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.2s',
                  }}>
                    {term}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <img
          src="/asset/categoryBanner1.png"
          alt="banner"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        />

        {/* STATS BANNER */}
        <section style={{ background: 'var(--primary)', padding: '32px 0' }}>
          <div className="container">
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
              {[
                { label: 'Live Jobs', value: stats.jobs },
                { label: 'Companies', value: stats.employers },
                { label: 'Candidates', value: stats.candidates },
                { label: 'Placements', value: stats.placements },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: 'white', fontFamily: 'var(--font-display)' }}>{s.value}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About banner */}
        <section style={{ background: 'linear-gradient(135deg, #F8FAFF 0%, #F0F5FD 100%)', padding: '32px 0' }}>
          <div className="container">
            <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 34, alignItems: 'center' }}>
              <div>
                <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', aspectRatio: '9/8' }}>
                  <img
                    src="/asset/about-banner.png"
                    alt="SIS Global"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', bottom: 10, left: 10, background: 'rgba(255,255,255,0.9)', padding: '2px 10px', borderRadius: 'var(--radius-full)', fontSize: 11, fontWeight: 600, color: 'var(--primary)' }}>
                    Backed by SIS India Ltd.
                  </div>
                </div>
              </div>
              <div>
                <span className="section-tag" style={{ marginBottom: 6, fontSize: 13, padding: '2px 12px' }}>About Company</span>
                <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, marginBottom: 12, lineHeight: 1.2 }}>
                  SIS Global Workforce Solutions
                </h2>
                <p style={{ fontSize: 14, color: 'var(--gray-700)', lineHeight: 1.5, marginBottom: 12 }}>
                  <strong>SIS Global Workforce Solutions Private Limited</strong> is a new venture of SIS India Ltd., designed to deliver structured and scalable workforce outsourcing solutions.
                </p>
                <p style={{ fontSize: 14, color: 'var(--gray-700)', lineHeight: 1.5, marginBottom: 12 }}>
                  The company connects skilled talent with trusted employers through a technology-enabled ecosystem – ensuring transparency, efficiency, and reliability.
                </p>
                <p style={{ fontSize: 14, color: 'var(--gray-700)', lineHeight: 1.5, marginBottom: 16 }}>
                  Backed by SIS India's legacy, SIS Global transforms manpower outsourcing into an organized, compliant, and digitally driven service model.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                  {['End-to-End Solutions', 'Structured & Transparent', 'Technology-Driven', 'Faster Turnaround'].map((item) => (
                    <span key={item} className="badge badge-blue" style={{ fontSize: 12, padding: '3px 10px' }}>✓ {item}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button className="btn btn-primary" style={{ padding: '8px 20px', fontSize: 13 }}>Learn More →</button>
                  <button className="btn btn-outline" style={{ padding: '8px 20px', fontSize: 13 }}>Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Categories</span>
              <h2 className="section-title">Browse by Job Category</h2>
              <p className="section-subtitle">Find the perfect role in your field of expertise</p>
            </div>
            <div className="grid-4">
              {categories.map((cat) => (
                <Link key={cat.name} href={`/find-jobs?category=${encodeURIComponent(cat.name)}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ textAlign: 'center', padding: '28px 20px' }}>
                    <div style={{
                      width: 60, height: 60, borderRadius: 16, margin: '0 auto 16px',
                      background: cat.color + '18', display: 'flex',
                      alignItems: 'center', justifyContent: 'center', fontSize: 28,
                    }}>
                      {cat.icon}
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--dark)', marginBottom: 4 }}>{cat.name}</h3>
                    <p style={{ fontSize: 13, color: 'var(--gray-600)' }}>{cat.count.toLocaleString()} Jobs Available</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED JOBS */}
        <section className="section">
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <span className="section-tag" style={{ marginBottom: 8 }}>Featured Jobs</span>
                <h2 className="section-title" style={{ marginBottom: 0 }}>Recently Added Jobs</h2>
              </div>
              <Link href="/find-jobs" className="btn btn-outline">View All Jobs →</Link>
            </div>
            <div className="grid-3" style={{ marginBottom: 24 }}>
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>

        {/* TOP EMPLOYERS */}
        {/* <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Top Employers</span>
              <h2 className="section-title">Leading Companies Hiring Now</h2>
              <p className="section-subtitle">Join thousands of companies using SIS Global to find talent</p>
            </div>
            <div className="grid-4">
              {topEmployers.map((emp) => (
                <Link key={emp.id} href={`/employers/${emp.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ textAlign: 'center' }}>
                    <div style={{
                      width: 64, height: 64, borderRadius: 16, margin: '0 auto 12px',
                      background: emp.logoColor + '18', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      fontSize: 26, fontWeight: 800, color: emp.logoColor,
                      fontFamily: 'var(--font-display)',
                    }}>
                      {emp.logo}
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{emp.name}</h3>
                    <p style={{ fontSize: 13, color: 'var(--gray-600)', marginBottom: 12 }}>{emp.industry}</p>
                    <span className="badge badge-blue">{emp.jobs} Open Positions</span>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/employers" className="btn btn-outline">Browse All Companies →</Link>
            </div>
          </div>
        </section> */}

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">How It Works</span>
              <h2 className="section-title">Get Hired in 3 Simple Steps</h2>
            </div>
            <div className="grid-3">
              {[
                { step: '01', title: 'Create Account', desc: 'Sign up and build your professional profile with your skills, experience, and job preferences.', icon: '👤' },
                { step: '02', title: 'Find a Job', desc: 'Search thousands of roles and use smart filters to find the perfect match for your career goals.', icon: '🔍' },
                { step: '03', title: 'Apply & Get Hired', desc: 'Apply with one click and track your applications. Get hired faster with our direct employer connections.', icon: '🎉' },
              ].map((item) => (
                <div key={item.step} style={{ textAlign: 'center', padding: '32px 24px', position: 'relative' }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%', margin: '0 auto 20px',
                    background: 'var(--primary-light)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', fontSize: 32,
                    position: 'relative',
                  }}>
                    {item.icon}
                    <span style={{
                      position: 'absolute', top: -8, right: -8,
                      width: 24, height: 24, borderRadius: '50%',
                      background: 'var(--primary)', color: 'white',
                      fontSize: 11, fontWeight: 800,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>{item.step}</span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{item.title}</h3>
                  <p style={{ fontSize: 15, color: 'var(--gray-600)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section" style={{ background: 'linear-gradient(135deg, #0A65CC 0%, #084fa3 100%)' }}>
          <div className="container">
            <div className="section-header">
              <span style={{ display: 'inline-block', fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.8)', background: 'rgba(255,255,255,0.15)', padding: '6px 16px', borderRadius: 'var(--radius-full)', marginBottom: 16 }}>Testimonials</span>
              <h2 className="section-title" style={{ color: 'white' }}>What Our Users Say</h2>
            </div>
            <div className="grid-3">
              {testimonials.map((t) => (
                <div key={t.id} style={{
                  background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 'var(--radius-xl)', padding: '28px',
                }}>
                  <div style={{ marginBottom: 16, color: 'rgba(255,255,255,0.6)', fontSize: 32, lineHeight: 1 }}>"</div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, marginBottom: 20 }}>{t.text}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: t.avatarColor, display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      fontSize: 14, fontWeight: 700, color: 'white',
                    }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'white', fontSize: 15 }}>{t.name}</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        {/* <section style={{ background: 'var(--gray-50)', padding: '64px 0' }}>
          <div className="container">
            <div style={{
              background: 'white', borderRadius: 'var(--radius-xl)', padding: '48px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: 32, flexWrap: 'wrap', boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--gray-200)',
            }}>
              <div>
                <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, marginBottom: 8 }}>
                  Are you an employer?
                </h2>
                <p style={{ fontSize: 16, color: 'var(--gray-600)' }}>
                  Post a job today and reach thousands of qualified candidates instantly.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, flexShrink: 0 }}>
                <Link href="/find-jobs" className="btn btn-outline">Browse Candidates</Link>
                <Link href="/pricing" className="btn btn-primary">Post a Job →</Link>
              </div>
            </div>
          </div>
        </section> */}

<section style={{ background: 'var(--gray-50)', padding: 'clamp(32px, 8vw, 64px) 0' }}>
  <div className="container">
    <div style={{
      background: 'white', borderRadius: 'var(--radius-xl)', 
      padding: 'clamp(24px, 5vw, 48px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 'clamp(20px, 4vw, 32px)', flexWrap: 'wrap', 
      boxShadow: 'var(--shadow-lg)', border: '1px solid var(--gray-200)',
    }}>
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: 'clamp(20px, 5vw, 32px)', fontWeight: 700, marginBottom: 8 }}>
          Are you an employer?
        </h2>
        <p style={{ fontSize: 'clamp(14px, 4vw, 16px)', color: 'var(--gray-600)' }}>
          Post a job today and reach thousands of qualified candidates instantly.
        </p>
      </div>
      <div className="cta-buttons" style={{ 
        display: 'flex', gap: 16, flexShrink: 0,
      }}>
        <Link href="/find-jobs" className="btn btn-outline">Browse Candidates</Link>
        <Link href="/pricing" className="btn btn-primary">Post a Job →</Link>
      </div>
    </div>
  </div>

</section>
      </Layout>

      {/* Responsive CSS - only styles, no content changes */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .container {
            padding-left: 20px;
            padding-right: 20px;
          }
          .grid-3, .grid-4 {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .about-grid > div:first-child {
            max-width: 280px;
            margin: 0 auto;
          }
          .section {
            padding: 48px 0 !important;
          }
          .card {
            padding: 20px !important;
          }
          .btn {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
          .cta-flex {
            flex-direction: column;
            text-align: center;
          }
          [style*="display: flex"][style*="justify-content: space-between"] {
            flex-direction: column;
            align-items: center !important;
            text-align: center;
          }
          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }
          .hero-buttons a, .hero-buttons button {
            width: 100%;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .section-title {
            font-size: 24px !important;
          }
          .section-subtitle {
            font-size: 14px !important;
          }
          .testimonial-card {
            padding: 20px !important;
          }
        }
      `}</style>
    </>
  )
}

// SSR
export async function getServerSideProps() {
  return {
    props: {
      featuredJobs: JOBS.slice(0, 6),
      categories: CATEGORIES,
      stats: STATS,
      testimonials: TESTIMONIALS,
      topEmployers: EMPLOYERS.slice(0, 4),
    },
  }
}


