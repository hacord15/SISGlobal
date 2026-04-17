// pages/terms/index.js — SSR
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'

// const SECTIONS = [
//   { title: '1. Acceptance of Terms', content: 'By accessing or using SIS Global Workforce Solutions (the "Platform"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the Platform. We reserve the right to modify these terms at any time, and your continued use of the Platform constitutes acceptance of those changes.' },
//   { title: '2. Description of Service', content: 'SIS Global Workforce Solutions is an online job board and recruitment platform that connects job seekers with employers. We provide tools for posting job listings, searching for employment opportunities, and managing the hiring process. We are not a staffing agency and do not guarantee employment or the hiring of any particular candidate.' },
//   { title: '3. User Accounts', content: 'To use certain features of the Platform, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. We reserve the right to terminate accounts that violate our policies.' },
//   { title: '4. Employer Responsibilities', content: 'Employers using SIS Global Workforce Solutions agree to post accurate, legal, and non-discriminatory job listings. All job postings must comply with applicable employment laws. Employers are responsible for their own hiring decisions and must not use the Platform to collect information for purposes other than legitimate recruitment.' },
//   { title: '5. Candidate Responsibilities', content: 'Candidates agree to provide accurate information in their profiles and applications. Misrepresentation of qualifications, experience, or identity is grounds for immediate account termination. Candidates are solely responsible for their interactions with employers.' },
//   { title: '6. Privacy Policy', content: 'Your use of SIS Global Workforce Solutions is also governed by our Privacy Policy, which is incorporated by reference into these Terms. Our Privacy Policy describes how we collect, use, and share information about you when you use our Platform.' },
//   { title: '7. Intellectual Property', content: 'All content on the Platform, including text, graphics, logos, and software, is the property of SIS Global Workforce Solutions or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.' },
//   { title: '8. Limitation of Liability', content: 'SIS Global Workforce Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Platform. Our total liability for any claims under these terms shall not exceed the amount you paid us in the past twelve months.' },
//   { title: '9. Governing Law', content: 'These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of San Francisco County, California.' },
//   { title: '10. Contact Information', content: 'If you have questions about these Terms, please contact us at legal@SIS Global Workforce Solutions.com or by mail at SIS Global Workforce Solutions Inc., 123 Market Street, San Francisco, CA 94105.' },
// ]
const SECTIONS = [
  { 
    title: '1. Acceptance of Terms', 
    content: 'By accessing or using the SIS Global Workforce Solutions platform ("Platform"), you agree to be bound by these Terms and Conditions. If you are using the Platform on behalf of an employer or organization, you represent that you have authority to bind that entity. We reserve the right to modify these terms at any time; your continued use constitutes acceptance of the changes.' 
  },
  { 
    title: '2. Description of Service', 
    content: 'SIS Global provides end‑to‑end workforce outsourcing solutions including sourcing, screening, documentation verification, compliance management, deployment tracking, visa coordination, and onboarding support. We connect skilled and job‑ready candidates with trusted employers across industries and geographies. We are not a direct employer and do not guarantee employment or deployment outcomes.' 
  },
  { 
    title: '3. User Accounts', 
    content: 'Employers and candidates must create an account to access our services. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account. We reserve the right to suspend or terminate accounts that provide false information, violate our policies, or misuse the Platform.' 
  },
  { 
    title: '4. Employer Responsibilities', 
    content: 'Employers must provide accurate job requirements, skill specifications, location details, and deployment timelines. You agree to comply with all applicable labour, immigration, and employment laws in the destination country. Final hiring decisions, interviews, and trade tests are your responsibility. You must not use the Platform for any purpose other than legitimate workforce acquisition.' 
  },
  { 
    title: '5. Candidate Responsibilities', 
    content: 'Candidates must provide genuine personal, educational, and professional documents. You agree to disclose any criminal history or legal restrictions that may affect deployment. Misrepresentation of qualifications, experience, or identity is grounds for immediate account termination and legal action. You must cooperate with medical checks, visa processing, and pre‑departure orientation as required.' 
  },
  { 
    title: '6. Privacy Policy', 
    content: 'Your use of SIS Global is governed by our Privacy Policy, which is incorporated by reference. We collect and process personal data (e.g., identity proofs, employment history, health records) as necessary for workforce deployment. You consent to such processing and to sharing your information with potential employers and regulatory authorities as required by law.' 
  },
  { 
    title: '7. Intellectual Property', 
    content: 'All content on the Platform – including text, graphics, logos, software, and workflow designs – is the property of SIS Global Workforce Solutions Private Limited or its licensors. You may not reproduce, distribute, modify, or create derivative works without our express written permission.' 
  },
  { 
    title: '8. Limitation of Liability', 
    content: 'To the maximum extent permitted by law, SIS Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform or our services. Our total liability for any claim under these terms shall not exceed the fees paid by you to us in the preceding six months.' 
  },
  { 
    title: '9. Governing Law', 
    content: 'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these terms shall be resolved exclusively in the courts of New Delhi, Delhi.' 
  },
  { 
    title: '10. Contact Information', 
    content: 'If you have questions about these Terms, please contact us at compliance@sisglobal.com or by mail at: SIS Global Workforce Solutions Private Limited, [Registered Office Address], New Delhi – 110001, India.' 
  },
];

export default function TermsPage() {
  return (
    <>
      <Head><title>Terms & Conditions – SIS Global Workforce Solutions</title></Head>
      <Layout>
        <div style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0F7FF 100%)', padding: '56px 0' }}>
          <div className="container">
            <div className="breadcrumb" style={{ marginBottom: 16 }}>
              <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
              <span>Terms & Conditions</span>
            </div>
            <h1 className="section-title" style={{ marginBottom: 8 }}>Terms & Conditions</h1>
            <p style={{ fontSize: 15, color: 'var(--gray-600)' }}>Last updated: December 1, 2024</p>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 48 }}>
              {/* TOC */}
              <div style={{ position: 'sticky', top: 90, alignSelf: 'start' }}>
                <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-500)', marginBottom: 12 }}>Table of Contents</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {SECTIONS.map((sec) => (
                    <a key={sec.title} href={`#${sec.title.replace(/\s+/g, '-')}`} style={{
                      fontSize: 13, color: 'var(--gray-600)', padding: '6px 10px',
                      borderRadius: 'var(--radius)', display: 'block',
                      transition: 'all 0.2s', textDecoration: 'none',
                      borderLeft: '2px solid var(--gray-200)',
                    }}
                      onMouseEnter={(e) => { e.target.style.color = 'var(--primary)'; e.target.style.borderLeftColor = 'var(--primary)' }}
                      onMouseLeave={(e) => { e.target.style.color = 'var(--gray-600)'; e.target.style.borderLeftColor = 'var(--gray-200)' }}
                    >{sec.title}</a>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div style={{ maxWidth: 720 }}>
                <div style={{ background: 'var(--primary-light)', borderRadius: 'var(--radius-lg)', padding: '16px 20px', marginBottom: 36, border: '1px solid rgba(10,101,204,0.2)' }}>
                  <p style={{ fontSize: 14, color: 'var(--primary)', lineHeight: 1.7 }}>
                    <strong>Summary:</strong> These Terms govern your use of SIS Global Workforce Solutions. By using the Platform, you agree to follow our rules, keep your account secure, and treat others respectfully.
                  </p>
                </div>

                {SECTIONS.map((sec) => (
                  <div key={sec.title} id={sec.title.replace(/\s+/g, '-')} style={{ marginBottom: 36, paddingBottom: 36, borderBottom: '1px solid var(--gray-200)' }}>
                    <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: 'var(--dark)' }}>{sec.title}</h2>
                    <p style={{ fontSize: 15, color: 'var(--gray-700)', lineHeight: 1.9 }}>{sec.content}</p>
                  </div>
                ))}
              </div>
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
