// components/JobCard.js
import Link from 'next/link'

export default function JobCard({ job, view = 'grid' }) {
  const typeColors = {
    'Full Time': { bg: '#E7F9ED', color: '#0BA02C' },
    'Part Time': { bg: '#FFF3E8', color: '#FF6B35' },
    'Remote': { bg: '#E8F1FB', color: '#0A65CC' },
    'Hybrid': { bg: '#FFF8EC', color: '#FFB836' },
    'Contract': { bg: '#F3F0FF', color: '#7C3AED' },
  }
  const tc = typeColors[job.type] || typeColors['Full Time']

  if (view === 'list') {
    return (
      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '20px 24px' }}>
        {/* Logo */}
        <div style={{
          width: 56, height: 56, borderRadius: 12, flexShrink: 0,
          background: job.logoColor + '18', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          fontSize: 22, fontWeight: 800, color: job.logoColor,
          fontFamily: 'var(--font-display)',
        }}>
          {job.logo}
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
            {job.urgent && <span className="badge badge-orange">Urgent</span>}
            {job.featured && <span className="badge badge-blue">Featured</span>}
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--dark)', marginBottom: 4 }}>
            <Link href={`/find-jobs/${job.id}`}>{job.title}</Link>
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 14, color: 'var(--gray-600)' }}>
            <span>{job.company}</span>
            <span>📍 {job.location}</span>
            <span>💰 {job.salary}</span>
          </div>
        </div>

        {/* Type + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
          <span style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: 13, fontWeight: 600, background: tc.bg, color: tc.color }}>
            {job.type}
          </span>
          <Link href={`/find-jobs/${job.id}`} className="btn btn-outline" style={{ padding: '8px 20px', fontSize: 14 }}>
            Apply Now
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          width: 52, height: 52, borderRadius: 12,
          background: job.logoColor + '18', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          fontSize: 20, fontWeight: 800, color: job.logoColor,
          fontFamily: 'var(--font-display)',
        }}>
          {job.logo}
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {job.urgent && <span className="badge badge-orange">Urgent</span>}
          {job.featured && <span className="badge badge-blue">Featured</span>}
        </div>
      </div>

      {/* Title */}
      <div>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--dark)', marginBottom: 4 }}>
          <Link href={`/find-jobs/${job.id}`}>{job.title}</Link>
        </h3>
        <p style={{ fontSize: 14, color: 'var(--gray-600)' }}>
          {job.company} · {job.location}
        </p>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <span style={{ padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: 12, fontWeight: 600, background: tc.bg, color: tc.color }}>
          {job.type}
        </span>
        {job.tags.slice(0, 2).map((tag) => (
          <span key={tag} style={{ padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: 12, fontWeight: 500, background: 'var(--gray-100)', color: 'var(--gray-700)' }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid var(--gray-200)', marginTop: 'auto' }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--primary)' }}>{job.salary}</span>
        <span style={{ fontSize: 13, color: 'var(--gray-500)' }}>{job.posted}</span>
      </div>
    </div>
  )
}
