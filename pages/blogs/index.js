// pages/blogs/index.js — SSR
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { BLOG_POSTS } from '../../lib/data'

const CATEGORIES = ['All', 'Career Tips', 'Resume Tips', 'Interview Tips', 'Workplace Trends', 'Salary', 'Industry Insights']
const CAT_COLORS = {
  'Career Tips': '#0A65CC',
  'Resume Tips': '#7C3AED',
  'Interview Tips': '#0BA02C',
  'Workplace Trends': '#FF6B35',
  'Salary': '#FFB836',
  'Industry Insights': '#EC4899',
}

export default function BlogsPage({ posts, featured, total }) {
  return (
    <>
      <Head><title>Career Blog – TalentFlow</title></Head>
      <Layout>
        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0F7FF 100%)', padding: '56px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-tag">Our Blog</span>
            <h1 className="section-title" style={{ marginTop: 8 }}>Career Insights & Advice</h1>
            <p className="section-subtitle">Expert tips and industry insights to power your career journey</p>
          </div>
        </div>

        <div className="section">
          <div className="container">
            {/* Featured posts */}
            {featured.length > 0 && (
              <div style={{ marginBottom: 56 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>Featured Articles</h2>
                <div className="grid-2">
                  {featured.map((post) => (
                    <Link key={post.id} href={`/blogs/${post.id}`} style={{ textDecoration: 'none' }}>
                      <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
                        {/* Image placeholder */}
                        <div style={{
                          height: 220,
                          background: `linear-gradient(135deg, ${CAT_COLORS[post.category] || '#0A65CC'}22 0%, ${CAT_COLORS[post.category] || '#0A65CC'}44 100%)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 64,
                        }}>
                          {post.category === 'Career Tips' ? '💼' : post.category === 'Workplace Trends' ? '🏢' : '📝'}
                        </div>
                        <div style={{ padding: 24 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                            <span style={{ padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: 12, fontWeight: 600, background: (CAT_COLORS[post.category] || '#0A65CC') + '18', color: CAT_COLORS[post.category] || '#0A65CC' }}>{post.category}</span>
                            <span style={{ fontSize: 12, color: 'var(--gray-500)' }}>{post.readTime}</span>
                          </div>
                          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, lineHeight: 1.3 }}>{post.title}</h3>
                          <p style={{ fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 16 }}>{post.excerpt}</p>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: 'white' }}>{post.authorAvatar}</div>
                            <div>
                              <div style={{ fontSize: 13, fontWeight: 600 }}>{post.author}</div>
                              <div style={{ fontSize: 12, color: 'var(--gray-500)' }}>{post.date}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 40 }}>
              <div>
                {/* Category filter */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
                  {CATEGORIES.map((cat, i) => (
                    <button key={cat} className={`tag ${i === 0 ? 'active' : ''}`}>{cat}</button>
                  ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {posts.map((post) => (
                    <Link key={post.id} href={`/blogs/${post.id}`} style={{ textDecoration: 'none' }}>
                      <div className="card" style={{ display: 'flex', gap: 20, padding: '20px 24px' }}>
                        <div style={{
                          width: 100, height: 90, borderRadius: 12, flexShrink: 0,
                          background: (CAT_COLORS[post.category] || '#0A65CC') + '18',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36,
                        }}>
                          {post.category === 'Career Tips' ? '💼' : post.category === 'Resume Tips' ? '📄' : post.category === 'Interview Tips' ? '🎯' : post.category === 'Salary' ? '💰' : '📊'}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                            <span style={{ padding: '3px 10px', borderRadius: 'var(--radius-full)', fontSize: 11, fontWeight: 600, background: (CAT_COLORS[post.category] || '#0A65CC') + '18', color: CAT_COLORS[post.category] || '#0A65CC' }}>{post.category}</span>
                            <span style={{ fontSize: 12, color: 'var(--gray-500)' }}>{post.readTime}</span>
                          </div>
                          <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>{post.title}</h3>
                          <p style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 10, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.excerpt}</p>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--gray-500)' }}>
                            <span style={{ fontWeight: 600, color: 'var(--gray-700)' }}>{post.author}</span>
                            <span>·</span>
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="pagination">
                  {[1, 2, 3].map(p => <button key={p} className={`page-btn ${p === 1 ? 'active' : ''}`}>{p}</button>)}
                </div>
              </div>

              {/* Sidebar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div className="sidebar-filter">
                  <h3 className="filter-title">Popular Tags</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {['Career', 'Resume', 'Interview', 'Remote Work', 'Salary', 'Tech', 'Tips', 'Employers', 'Trends', 'Skills'].map(tag => (
                      <span key={tag} className="tag" style={{ fontSize: 12 }}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="sidebar-filter">
                  <h3 className="filter-title">Newsletter</h3>
                  <p style={{ fontSize: 14, color: 'var(--gray-600)', marginBottom: 16, lineHeight: 1.6 }}>Get the latest career tips and job market updates delivered weekly.</p>
                  <input className="form-input" placeholder="your@email.com" style={{ marginBottom: 10 }} />
                  <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const featured = BLOG_POSTS.filter(p => p.featured)
  const posts = BLOG_POSTS
  return { props: { posts, featured, total: posts.length } }
}
