// pages/shop/index.js — SSR
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { PRODUCTS } from '../../lib/data'

export default function ShopPage({ products }) {
  return (
    <>
      <Head><title>Shop – TalentFlow Career Store</title></Head>
      <Layout>
        <div style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0F7FF 100%)', padding: '56px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-tag">Career Store</span>
            <h1 className="section-title" style={{ marginTop: 8 }}>Level Up Your Career</h1>
            <p className="section-subtitle">Professional tools, courses, and services to accelerate your job search</p>
          </div>
        </div>

        <div className="section">
          <div className="container">
            {/* Category tabs */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
              {['All Products', 'Career Services', 'Courses', 'Guides', 'For Employers'].map((cat, i) => (
                <button key={cat} className={`tag ${i === 0 ? 'active' : ''}`}>{cat}</button>
              ))}
            </div>

            <div className="grid-3">
              {products.map((product) => (
                <div key={product.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {/* Product icon */}
                  <div style={{
                    height: 140, borderRadius: 12,
                    background: 'linear-gradient(135deg, var(--primary-light) 0%, #dbeafe 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 56,
                  }}>
                    {product.category === 'Career Services' ? '🎯' : product.category === 'Courses' ? '📚' : product.category === 'Guides' ? '📖' : '💼'}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--primary)', background: 'var(--primary-light)', padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>
                        {product.category}
                      </span>
                      {product.popular && <span className="badge badge-orange">Popular</span>}
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{product.name}</h3>
                    <p style={{ fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 12 }}>{product.description}</p>

                    {/* Rating */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                      <div className="stars">
                        {'★★★★★'.split('').map((s, i) => (
                          <span key={i} style={{ color: i < Math.floor(product.rating) ? 'var(--warning)' : 'var(--gray-300)' }}>{s}</span>
                        ))}
                      </div>
                      <span style={{ fontSize: 13, color: 'var(--gray-600)' }}>{product.rating} ({product.reviews} reviews)</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid var(--gray-200)' }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--dark)', fontFamily: 'var(--font-display)' }}>
                      ${product.price}
                    </span>
                    <button className="btn btn-primary" style={{ padding: '9px 20px', fontSize: 14 }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div style={{ background: 'var(--gray-50)', padding: '48px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, textAlign: 'center' }}>
              {[
                { icon: '🔒', title: 'Secure Payments', desc: '256-bit SSL encryption on all transactions' },
                { icon: '↩️', title: '14-Day Refund', desc: 'Not satisfied? Get a full refund, no questions asked' },
                { icon: '⭐', title: 'Expert Quality', desc: 'All content created by certified career professionals' },
              ].map((item) => (
                <div key={item.title}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--gray-600)' }}>{item.desc}</p>
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
  return { props: { products: PRODUCTS } }
}
