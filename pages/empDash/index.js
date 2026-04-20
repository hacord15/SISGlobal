// pages/employer/dashboard.js
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'

// Mock data
const stats = {
  postedJobs: 22,
  applications: 9382,
  messages: 74,
  shortlist: 32,
}

const profileViews = [
  { month: 'May', views: 90 },
  { month: 'June', views: 70 },
  { month: 'July', views: 60 },
  { month: 'August', views: 50 },
]

const notifications = [
  { id: 1, name: 'Wade Warren', job: 'Web Developer', time: '2 min ago' },
  { id: 2, name: 'Henry Wilson', job: 'Senior Product Designer', time: '15 min ago' },
  { id: 3, name: 'Raul Costa', job: 'Product Manager, Risk', time: '1 hour ago' },
  { id: 4, name: 'Jack Milk', job: 'Technical Architect', time: '3 hours ago' },
  { id: 5, name: 'Michel Arian', job: 'Software Engineer', time: '5 hours ago' },
  { id: 6, name: 'Ali Tufan', job: 'UI Designer', time: 'Yesterday' },
]

const recentApplicants = [
  { id: 1, name: 'Darlene Robertson', title: 'UI Designer', location: 'London, UK', rate: '$99 / hour', skills: ['App Design', 'Digital'] },
  { id: 2, name: 'Floyd Miles', title: 'UI Designer', location: 'London, UK', rate: '$99 / hour', skills: ['App Design', 'Digital'] },
  { id: 3, name: 'Wade Warren', title: 'UI Designer', location: 'London, UK', rate: '$99 / hour', skills: ['App Design', 'Digital'] },
  { id: 4, name: 'Jerome Bell', title: 'UI Designer', location: 'London, UK', rate: '$99 / hour', skills: ['App Design', 'Digital'] },
  { id: 5, name: 'Leslie Alexander', title: 'UI Designer', location: 'London, UK', rate: '$99 / hour', skills: ['App Design', 'Digital'] },
  { id: 6, name: 'Cameron Williamson', title: 'UI Designer', location: 'London, UK', rate: '$99 / hour', skills: ['App Design', 'Digital'] },
]

export default function EmployerDashboard() {
  const maxViews = Math.max(...profileViews.map(v => v.views))

  return (
    <>
      <Head>
        <title>Employer Dashboard – SIS Global</title>
      </Head>
      <Layout>
        <div className="dashboard-container" style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '32px',
          padding: '32px 0',
        }}>
          {/* Sidebar */}
          <aside className="dashboard-sidebar">
            <div className="card" style={{ padding: '24px 16px' }}>
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%', background: 'var(--primary-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 12px', fontSize: 32, fontWeight: 700, color: 'var(--primary)'
                }}>IN</div>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>Invision</h3>
                <p style={{ fontSize: 13, color: 'var(--gray-600)' }}>invision@company.com</p>
              </div>

              <nav className="sidebar-nav" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  { label: 'Dashboard', href: '/employer/dashboard', icon: '📊' },
                  { label: 'Company Profile', href: '/employer/profile', icon: '🏢' },
                  { label: 'Post a New Job', href: '/employer/post-job', icon: '➕' },
                  { label: 'Manage Jobs', href: '/employer/jobs', icon: '📋' },
                  { label: 'All Applicants', href: '/employer/applicants', icon: '👥' },
                  { label: 'Shortlisted Resumes', href: '/employer/shortlisted', icon: '⭐' },
                  { label: 'Packages', href: '/employer/packages', icon: '💰' },
                  { label: 'Messages', href: '/employer/messages', icon: '💬' },
                  { label: 'Resume Alerts', href: '/employer/alerts', icon: '🔔' },
                  { label: 'Change Password', href: '/employer/change-password', icon: '🔒' },
                  { label: 'View Profile', href: '/employer/view-profile', icon: '👤' },
                  { label: 'Logout', href: '/logout', icon: '🚪' },
                  { label: 'Delete Profile', href: '/employer/delete', icon: '🗑️' },
                ].map((item) => (
                  <Link key={item.label} href={item.href} style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '10px 16px', borderRadius: 'var(--radius)',
                    fontSize: 14, fontWeight: 500, color: 'var(--gray-700)',
                    transition: 'all 0.2s',
                  }}>
                    <span style={{ fontSize: 18 }}>{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="dashboard-main">
            {/* Welcome Section */}
            <div style={{ marginBottom: 32 }}>
              <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Howdy, Invision!</h1>
              <p style={{ fontSize: 16, color: 'var(--gray-600)' }}>Ready to jump back in?</p>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
              marginBottom: '32px',
            }}>
              {[
                { label: 'Posted Jobs', value: stats.postedJobs, icon: '📌', color: 'var(--primary)' },
                { label: 'Applications', value: stats.applications.toLocaleString(), icon: '📄', color: 'var(--success)' },
                { label: 'Messages', value: stats.messages, icon: '💬', color: 'var(--warning)' },
                { label: 'Shortlist', value: stats.shortlist, icon: '⭐', color: 'var(--accent)' },
              ].map((stat) => (
                <div key={stat.label} className="card" style={{ padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{stat.icon}</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: stat.color }}>{stat.value}</div>
                  <div style={{ fontSize: 14, color: 'var(--gray-600)', fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Profile Views Chart & Notifications */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
              marginBottom: '32px',
            }} className="chart-notif-grid">
              {/* Chart */}
              <div className="card">
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Your Profile Views</h3>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '200px' }}>
                  {profileViews.map((item) => (
                    <div key={item.month} style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{
                        height: `${(item.views / maxViews) * 160}px`,
                        background: 'var(--primary)',
                        borderRadius: 'var(--radius) 4px 4px',
                        marginBottom: 8,
                        transition: 'height 0.3s',
                      }} />
                      <div style={{ fontSize: 12, fontWeight: 600 }}>{item.views}</div>
                      <div style={{ fontSize: 12, color: 'var(--gray-600)' }}>{item.month}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notifications */}
              <div className="card">
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Notifications</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {notifications.map((notif) => (
                    <div key={notif.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--gray-200)', paddingBottom: 12 }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14 }}>{notif.name}</div>
                        <div style={{ fontSize: 13, color: 'var(--gray-600)' }}>applied for a job <strong>{notif.job}</strong></div>
                      </div>
                      <span style={{ fontSize: 11, color: 'var(--gray-500)' }}>{notif.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Applicants */}
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>Recent Applicants</h3>
                <Link href="/employer/applicants" className="btn btn-outline" style={{ padding: '6px 16px', fontSize: 13 }}>View All</Link>
              </div>
              <div className="applicants-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {recentApplicants.map((applicant) => (
                  <div key={applicant.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, borderBottom: '1px solid var(--gray-200)', paddingBottom: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: '50%', background: 'var(--primary-light)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 18, fontWeight: 700, color: 'var(--primary)'
                      }}>{applicant.name.charAt(0)}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15 }}>{applicant.name}</div>
                        <div style={{ fontSize: 13, color: 'var(--gray-600)' }}>{applicant.title} – {applicant.location}</div>
                        <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                          {applicant.skills.map(skill => (
                            <span key={skill} className="badge badge-gray" style={{ fontSize: 11 }}>{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div style={{ fontWeight: 600, color: 'var(--primary)' }}>{applicant.rate}</div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>

        {/* Responsive CSS overrides */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 1024px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .chart-notif-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 768px) {
            .dashboard-container { grid-template-columns: 1fr !important; }
            .dashboard-sidebar { margin-bottom: 24px; }
            .stats-grid { grid-template-columns: 1fr !important; }
          }
        ` }} />
      </Layout>
    </>
  )
}