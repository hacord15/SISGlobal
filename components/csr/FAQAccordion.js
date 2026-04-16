// components/csr/FAQAccordion.js — Client-side interactive accordion
import { useState } from 'react'

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index} style={{
            border: `1.5px solid ${isOpen ? 'var(--primary)' : 'var(--gray-200)'}`,
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            transition: 'border-color 0.2s',
            background: isOpen ? 'var(--primary-light)' : 'white',
          }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                width: '100%', padding: '18px 20px', border: 'none',
                background: 'transparent', cursor: 'pointer', textAlign: 'left', gap: 12,
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 600, color: isOpen ? 'var(--primary)' : 'var(--dark)', lineHeight: 1.4 }}>
                {faq.q}
              </span>
              <span style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                background: isOpen ? 'var(--primary)' : 'var(--gray-100)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: isOpen ? 'white' : 'var(--gray-600)', fontSize: 18, fontWeight: 300,
                transition: 'all 0.2s',
              }}>
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {isOpen && (
              <div style={{ padding: '0 20px 20px' }}>
                <p style={{ fontSize: 15, color: 'var(--gray-700)', lineHeight: 1.8 }}>{faq.a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
