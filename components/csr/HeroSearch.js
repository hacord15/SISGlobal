// components/csr/HeroSearch.js — Client-side only (search interaction)
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function HeroSearch() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (location) params.set('location', location)
    router.push(`/find-jobs?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} style={{
      background: 'white',
      borderRadius: 'var(--radius-xl)',
      padding: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 8px 32px rgba(10,101,204,0.15)',
      maxWidth: 680,
      margin: '0 auto',
      flexWrap: 'wrap',
    }}>
      {/* Job title */}
      <div style={{ flex: 2, display: 'flex', alignItems: 'center', gap: 10, padding: '8px 16px', minWidth: 200 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gray-400)" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Job title, keyword..."
          style={{
            border: 'none', outline: 'none', fontSize: 15,
            color: 'var(--gray-800)', width: '100%',
            fontFamily: 'var(--font-body)',
          }}
        />
      </div>

      <div style={{ width: 1, height: 28, background: 'var(--gray-200)' }} />

      {/* Location */}
      <div style={{ flex: 1.5, display: 'flex', alignItems: 'center', gap: 10, padding: '8px 16px', minWidth: 160 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gray-400)" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="City or remote..."
          style={{
            border: 'none', outline: 'none', fontSize: 15,
            color: 'var(--gray-800)', width: '100%',
            fontFamily: 'var(--font-body)',
          }}
        />
      </div>

      <button type="submit" className="btn btn-primary" style={{ borderRadius: 12, padding: '14px 28px', flexShrink: 0 }}>
        Find Jobs
      </button>

     
      
    </form>
    
    
  )
}
