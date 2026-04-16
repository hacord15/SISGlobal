// components/csr/ViewToggle.js — Client-side grid/list toggle
import { useState } from 'react'

export default function ViewToggle({ onChange }) {
  const [view, setView] = useState('list')
  const toggle = (v) => {
    setView(v)
    onChange && onChange(v)
  }
  return (
    <div style={{ display: 'flex', border: '1px solid var(--gray-300)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
      {['grid', 'list'].map((v) => (
        <button key={v} onClick={() => toggle(v)} style={{
          padding: '8px 12px', border: 'none', cursor: 'pointer',
          background: view === v ? 'var(--primary)' : 'white',
          color: view === v ? 'white' : 'var(--gray-600)',
          transition: 'all 0.2s', fontSize: 16,
        }} title={`${v} view`}>
          {v === 'grid' ? '⊞' : '≡'}
        </button>
      ))}
    </div>
  )
}
