// // pages/contact/index.js — SSR
// import Head from 'next/head'
// import Link from 'next/link'
// import Layout from '../../components/Layout'
// import dynamic from 'next/dynamic'

// const ContactForm = dynamic(() => import('../../components/csr/ContactForm'), { ssr: false })

// export default function ContactPage() {
//   return (
//     <>
//       <Head><title>Contact Us – SIS Global Workforce Solutions</title></Head>
//       <Layout>
//         <div style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0F7FF 100%)', padding: '64px 0' }}>
//           <div className="container" style={{ textAlign: 'center' }}>
//             <span className="section-tag">Get in Touch</span>
//             <h1 className="section-title" style={{ marginTop: 8 }}>We'd Love to Hear From You</h1>
//             <p className="section-subtitle">Have a question, suggestion, or just want to say hi? Our team is here to help.</p>
//           </div>
//         </div>

//         <div className="section">
//           <div className="container">
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 56 }}>
//               {/* Info */}
//               <div>
//                 <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Contact Information</h2>
//                 <p style={{ fontSize: 15, color: 'var(--gray-600)', marginBottom: 32, lineHeight: 1.7 }}>
//                   Fill out the form or reach us directly through any of the channels below.
//                 </p>

//                 <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
//                   {[
//                     { icon: '📧', label: 'Email Us', value: 'hello@SIS Global Workforce Solutions.com', sub: 'We reply within 24 hours' },
//                     { icon: '📞', label: 'Call Us', value: '+1 (415) 555-0198', sub: 'Mon–Fri, 9am–6pm PST' },
//                     { icon: '📍', label: 'Visit Us', value: '123 Market St, Suite 400', sub: 'San Francisco, CA 94105' },
//                     { icon: '💬', label: 'Live Chat', value: 'Available on the Platform', sub: 'Mon–Fri, 8am–8pm PST' },
//                   ].map((item) => (
//                     <div key={item.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
//                       <div style={{
//                         width: 48, height: 48, borderRadius: 12, background: 'var(--primary-light)',
//                         display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0,
//                       }}>{item.icon}</div>
//                       <div>
//                         <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{item.label}</div>
//                         <div style={{ fontSize: 15, color: 'var(--primary)', fontWeight: 600 }}>{item.value}</div>
//                         <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>{item.sub}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Social links */}
//                 <div style={{ marginTop: 36 }}>
//                   <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 14, color: 'var(--gray-700)' }}>Follow Us</div>
//                   <div style={{ display: 'flex', gap: 10 }}>
//                     {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((s) => (
//                       <a key={s} href="#" style={{
//                         width: 40, height: 40, borderRadius: 'var(--radius)', background: 'var(--gray-100)',
//                         display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700,
//                         color: 'var(--gray-600)', transition: 'all 0.2s',
//                       }}
//                         onMouseEnter={(e) => { e.target.style.background = 'var(--primary)'; e.target.style.color = 'white' }}
//                         onMouseLeave={(e) => { e.target.style.background = 'var(--gray-100)'; e.target.style.color = 'var(--gray-600)' }}
//                       >{s[0]}</a>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* CSR Form */}
//               <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '40px', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow)' }}>
//                 <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>Send Us a Message</h2>
//                 <ContactForm />
//               </div>
//             </div>

//             {/* Map placeholder */}
//             <div style={{
//               marginTop: 64, height: 280, borderRadius: 'var(--radius-xl)',
//               background: 'linear-gradient(135deg, var(--primary-light) 0%, #dbeafe 100%)',
//               display: 'flex', alignItems: 'center', justifyContent: 'center',
//               border: '1px solid var(--gray-200)', fontSize: 64,
//             }}>
//               🗺️
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </>
//   )
// }

// export async function getServerSideProps() {
//   return { props: {} }
// }



// pages/contact/index.js — SSR
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('../../components/csr/ContactForm'), { ssr: false })

export default function ContactPage() {
  return (
    <>
      <Head><title>Contact Us – SIS Global Workforce Solutions</title></Head>
      <Layout>
        <div style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0F7FF 100%)', padding: '64px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-tag">Get in Touch</span>
            <h1 className="section-title" style={{ marginTop: 8 }}>We're Here to Help</h1>
            <p className="section-subtitle">Reach out to SIS Global for workforce solutions, partnerships, or any inquiries.</p>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 56 }}>
              {/* Info */}
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Contact Information</h2>
                <p style={{ fontSize: 15, color: 'var(--gray-600)', marginBottom: 32, lineHeight: 1.7 }}>
                  Reach us directly through any of the channels below. Our team is ready to assist you.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {[
                    { 
                      icon: '📍', 
                      label: 'Corporate Office', 
                      value: 'A-28 & 29, Phase 1, Okhla Industrial Area', 
                      sub: 'New Delhi - 110020, India' 
                    },
                    { 
                      icon: '📞', 
                      label: 'Phone', 
                      value: '+91-11-4646 4444 / 4646 5555', 
                      sub: 'Mon–Fri, 9am–6pm IST' 
                    },
                    { 
                      icon: '📱', 
                      label: 'Mobile', 
                      value: '+918076464444 | +918076465555', 
                      sub: 'Available on WhatsApp' 
                    },
                    { 
                      icon: '📠', 
                      label: 'Fax', 
                      value: '011 4646 4400', 
                      sub: 'For official correspondence' 
                    },
                    { 
                      icon: '📧', 
                      label: 'Email Us', 
                      value: 'contact@sisglobal.com', 
                      sub: 'We reply within 24 hours' 
                    },
                  ].map((item) => (
                    <div key={item.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: 12, background: 'var(--primary-light)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0,
                      }}>{item.icon}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{item.label}</div>
                        <div style={{ fontSize: 15, color: 'var(--primary)', fontWeight: 600 }}>{item.value}</div>
                        <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div style={{ marginTop: 36 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 14, color: 'var(--gray-700)' }}>Follow Us</div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    {['LinkedIn', 'Twitter', 'Facebook'].map((s) => (
                      <a key={s} href="#" style={{
                        width: 40, height: 40, borderRadius: 'var(--radius)', background: 'var(--gray-100)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700,
                        color: 'var(--gray-600)', transition: 'all 0.2s',
                      }}
                        onMouseEnter={(e) => { e.target.style.background = 'var(--primary)'; e.target.style.color = 'white' }}
                        onMouseLeave={(e) => { e.target.style.background = 'var(--gray-100)'; e.target.style.color = 'var(--gray-600)' }}
                      >{s[0]}</a>
                    ))}
                  </div>
                </div>
              </div>

              {/* CSR Form */}
              <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '40px', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow)' }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>

            {/* Google Map with hover zoom effect */}
            <div style={{
              marginTop: 64,
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.01)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.939535808667!2d77.283338!3d28.524563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44f6c3a5f0d%3A0x2c5f7c8f5c9e8a3b!2sSIS%20Limited%20Corporate%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SIS Global Corporate Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  return { props: {} }
}