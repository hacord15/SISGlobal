// pages/invoice/index.js — SSR
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'

const INVOICE = {
  number: 'INV-2024-0042',
  date: 'December 15, 2024',
  dueDate: 'January 14, 2025',
  status: 'Paid',
  from: {
    name: 'SIS Global Workforce Solutions Inc.',
    address: '123 Market Street, Suite 400',
    city: 'San Francisco, CA 94105',
    email: 'billing@SIS Global Workforce Solutions.com',
  },
  to: {
    name: 'Acme Corp.',
    address: '456 Innovation Drive',
    city: 'Austin, TX 78701',
    email: 'finance@acmecorp.com',
  },
  items: [
    { desc: 'Professional Plan (1 month)', qty: 1, rate: 49, total: 49 },
    { desc: 'Featured Job Listings (3)', qty: 3, rate: 29, total: 87 },
    { desc: 'Resume Database Access', qty: 1, rate: 39, total: 39 },
  ],
  subtotal: 175,
  tax: 15.75,
  total: 190.75,
}

export default function InvoicePage({ invoice }) {
  return (
    <>
      <Head><title>Invoice {invoice.number} – SIS Global Workforce Solutions</title></Head>
      <Layout>
        <div style={{ background: 'var(--gray-50)', padding: '48px 0' }}>
          <div className="container">
            <div className="breadcrumb" style={{ marginBottom: 24 }}>
              <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
              <span>Invoice</span>
            </div>

            <div style={{ maxWidth: 820, margin: '0 auto' }}>
              {/* Actions */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginBottom: 20 }}>
                <button className="btn btn-outline">🖨️ Print</button>
                <button className="btn btn-primary">⬇️ Download PDF</button>
              </div>

              {/* Invoice card */}
              <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--gray-200)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                {/* Header */}
                <div style={{ background: 'var(--primary)', padding: '36px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 40, height: 40, background: 'white', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: 'var(--primary)' }}>T</div>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'white' }}>SIS Global Workforce Solutions</span>
                    </div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                      {invoice.from.address}<br />
                      {invoice.from.city}<br />
                      {invoice.from.email}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 32, fontWeight: 800, color: 'white', fontFamily: 'var(--font-display)', marginBottom: 4 }}>INVOICE</div>
                    <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{invoice.number}</div>
                    <div style={{ marginTop: 12 }}>
                      <span style={{ background: invoice.status === 'Paid' ? '#10B981' : '#FFB836', color: 'white', padding: '4px 14px', borderRadius: 'var(--radius-full)', fontSize: 13, fontWeight: 700 }}>
                        {invoice.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '36px 40px' }}>
                  {/* Billing info */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, marginBottom: 36, paddingBottom: 32, borderBottom: '1px solid var(--gray-200)' }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-500)', marginBottom: 8 }}>Billed To</div>
                      <div style={{ fontWeight: 700, marginBottom: 4 }}>{invoice.to.name}</div>
                      <div style={{ fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.7 }}>
                        {invoice.to.address}<br />{invoice.to.city}<br />{invoice.to.email}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-500)', marginBottom: 8 }}>Invoice Date</div>
                      <div style={{ fontWeight: 600 }}>{invoice.date}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-500)', marginBottom: 8 }}>Due Date</div>
                      <div style={{ fontWeight: 600 }}>{invoice.dueDate}</div>
                    </div>
                  </div>

                  {/* Line items table */}
                  <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 28 }}>
                    <thead>
                      <tr style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius)' }}>
                        {['Description', 'Qty', 'Rate', 'Total'].map((h) => (
                          <th key={h} style={{ padding: '12px 16px', textAlign: h === 'Description' ? 'left' : 'right', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-600)' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {invoice.items.map((item, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid var(--gray-100)' }}>
                          <td style={{ padding: '14px 16px', fontSize: 15, color: 'var(--dark)', fontWeight: 500 }}>{item.desc}</td>
                          <td style={{ padding: '14px 16px', textAlign: 'right', fontSize: 15, color: 'var(--gray-600)' }}>{item.qty}</td>
                          <td style={{ padding: '14px 16px', textAlign: 'right', fontSize: 15, color: 'var(--gray-600)' }}>${item.rate.toFixed(2)}</td>
                          <td style={{ padding: '14px 16px', textAlign: 'right', fontSize: 15, fontWeight: 700, color: 'var(--dark)' }}>${item.total.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Totals */}
                  <div style={{ maxWidth: 300, marginLeft: 'auto' }}>
                    {[
                      { label: 'Subtotal', value: `$${invoice.subtotal.toFixed(2)}` },
                      { label: 'Tax (9%)', value: `$${invoice.tax.toFixed(2)}` },
                    ].map(({ label, value }) => (
                      <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 15, color: 'var(--gray-600)' }}>
                        <span>{label}</span><span>{value}</span>
                      </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0 0', marginTop: 12, borderTop: '2px solid var(--dark)', fontSize: 20, fontWeight: 800, color: 'var(--dark)', fontFamily: 'var(--font-display)' }}>
                      <span>Total Due</span>
                      <span>${invoice.total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Notes */}
                  <div style={{ marginTop: 40, padding: '20px', background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)', fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.7 }}>
                    <strong style={{ color: 'var(--dark)' }}>Notes: </strong>
                    Thank you for your business! Payment is due within 30 days. For questions about this invoice, contact billing@SIS Global Workforce Solutions.com.
                  </div>
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
  return { props: { invoice: INVOICE } }
}
