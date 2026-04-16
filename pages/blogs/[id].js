// pages/blogs/[id].js — SSR
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { BLOG_POSTS } from '../../lib/data'

export default function BlogDetailPage({ post, related }) {
  if (!post) return null
  const CAT_COLORS = { 'Career Tips': '#0A65CC', 'Resume Tips': '#7C3AED', 'Interview Tips': '#0BA02C', 'Workplace Trends': '#FF6B35', 'Salary': '#FFB836', 'Industry Insights': '#EC4899' }
  const color = CAT_COLORS[post.category] || '#0A65CC'

  return (
    <>
      <Head><title>{post.title} – TalentFlow Blog</title></Head>
      <Layout>
        <div style={{ background: `linear-gradient(135deg, ${color}18 0%, ${color}08 100%)`, padding: '56px 0' }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <div className="breadcrumb" style={{ marginBottom: 20 }}>
              <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
              <Link href="/blogs">Blog</Link><span className="breadcrumb-sep">›</span>
              <span>{post.category}</span>
            </div>
            <span style={{ padding: '5px 14px', borderRadius: 'var(--radius-full)', fontSize: 13, fontWeight: 600, background: color + '22', color, display: 'inline-block', marginBottom: 16 }}>{post.category}</span>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.2, marginBottom: 20 }}>{post.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: 'white' }}>{post.authorAvatar}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{post.author}</div>
                  <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>{post.date}</div>
                </div>
              </div>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gray-300)', display: 'inline-block' }} />
              <span style={{ fontSize: 14, color: 'var(--gray-600)' }}>⏱ {post.readTime}</span>
              <div style={{ display: 'flex', gap: 8, marginLeft: 'auto' }}>
                {post.tags.map(tag => <span key={tag} className="tag" style={{ fontSize: 12 }}>{tag}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container" style={{ maxWidth: 800 }}>
            {/* Article body */}
            <div style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--gray-700)' }}>
              <p style={{ fontSize: 18, fontWeight: 500, marginBottom: 24, color: 'var(--gray-800)' }}>{post.excerpt}</p>

              {[
                { h: 'Introduction', p: 'The job market is constantly evolving, and staying ahead requires both strategy and adaptability. In this comprehensive guide, we\'ll walk you through the most effective approaches used by top candidates to secure their ideal positions in today\'s competitive landscape.' },
                { h: 'Understanding the Landscape', p: 'Before diving into tactics, it\'s important to understand the current state of the job market. Remote work has become mainstream, AI tools are reshaping hiring processes, and companies are increasingly focused on culture fit alongside technical skills. Knowing this context shapes every decision you make.' },
                { h: 'Building Your Foundation', p: 'A strong foundation starts with clarity. Know exactly what role you want, what kind of company culture excites you, and what your non-negotiables are. This clarity will save you time and help you focus your energy where it matters most.' },
                { h: 'Standing Out from the Crowd', p: 'In a sea of applicants, differentiation is everything. Personalize every application, research each company deeply, and connect your unique experiences to the specific challenges each role presents. Generic applications rarely succeed — bespoke ones almost always get noticed.' },
                { h: 'The Follow-Up Strategy', p: 'Many candidates lose opportunities by failing to follow up effectively. A timely, thoughtful follow-up email after an interview can be the deciding factor between you and another equally qualified candidate. Always send one within 24 hours.' },
              ].map((s) => (
                <div key={s.h} style={{ marginBottom: 28 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>{s.h}</h2>
                  <p>{s.p}</p>
                </div>
              ))}
            </div>

            {/* Author box */}
            <div style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-xl)', padding: 28, display: 'flex', gap: 20, margin: '40px 0', border: '1px solid var(--gray-200)' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 700, color: 'white', flexShrink: 0 }}>{post.authorAvatar}</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{post.author}</div>
                <div style={{ fontSize: 13, color: 'var(--gray-500)', marginBottom: 8 }}>Career Expert & Content Strategist at TalentFlow</div>
                <p style={{ fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.6 }}>Passionate about helping professionals navigate their career journeys with confidence and clarity.</p>
              </div>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>Related Articles</h2>
                <div className="grid-3">
                  {related.map((rp) => (
                    <Link key={rp.id} href={`/blogs/${rp.id}`} style={{ textDecoration: 'none' }}>
                      <div className="card">
                        <span style={{ padding: '3px 10px', borderRadius: 'var(--radius-full)', fontSize: 11, fontWeight: 600, background: (CAT_COLORS[rp.category] || '#0A65CC') + '18', color: CAT_COLORS[rp.category] || '#0A65CC', display: 'inline-block', marginBottom: 10 }}>{rp.category}</span>
                        <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>{rp.title}</h3>
                        <p style={{ fontSize: 13, color: 'var(--gray-500)' }}>{rp.date} · {rp.readTime}</p>
                      </div>
                    </Link>
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
  const post = BLOG_POSTS.find(p => p.id === parseInt(params.id))
  if (!post) return { notFound: true }
  const related = BLOG_POSTS.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3)
  return { props: { post, related } }
}
