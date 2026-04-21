// // components/csr/JobFilters.js — Client-side filter panel
// import { useState } from 'react'
// import { useRouter } from 'next/router'

// const JOB_TYPES = ['Full Time', 'Part Time', 'Remote', 'Hybrid', 'Contract']
// const EXPERIENCE = ['Entry Level', 'Mid Level', 'Senior', 'Director', 'VP & Above']
// const SALARY_RANGES = ['$0–$50k', '$50k–$80k', '$80k–$120k', '$120k–$180k', '$180k+']

// export default function JobFilters({ initialFilters = {} }) {
//   const router = useRouter()
//   const [types, setTypes] = useState(initialFilters.types || [])
//   const [exp, setExp] = useState(initialFilters.experience || [])
//   const [salary, setSalary] = useState(initialFilters.salary || [])

//   const toggle = (arr, setArr, val) => {
//     setArr(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val])
//   }

//   const applyFilters = () => {
//     const q = { ...router.query }
//     if (types.length) q.types = types.join(','); else delete q.types
//     if (exp.length) q.experience = exp.join(','); else delete q.experience
//     if (salary.length) q.salary = salary.join(','); else delete q.salary
//     router.push({ pathname: '/find-jobs', query: q })
//   }

//   const clearAll = () => {
//     setTypes([]); setExp([]); setSalary([])
//     router.push('/find-jobs')
//   }

//   const FilterSection = ({ title, options, selected, onToggle }) => (
//     <div style={{ marginBottom: 24 }}>
//       <div className="filter-title">{title}</div>
//       {options.map((opt) => (
//         <label key={opt} className="filter-option" style={{ cursor: 'pointer' }}>
//           <span>{opt}</span>
//           <input
//             type="checkbox"
//             checked={selected.includes(opt)}
//             onChange={() => onToggle(opt)}
//           />
//         </label>
//       ))}
//     </div>
//   )

//   return (
//     <div className="sidebar-filter">
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
//         <h3 style={{ fontSize: 18, fontWeight: 700 }}>Filters</h3>
//         <button onClick={clearAll} style={{ fontSize: 13, color: 'var(--primary)', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 600 }}>
//           Clear All
//         </button>
//       </div>

//       <FilterSection title="Job Type" options={JOB_TYPES} selected={types} onToggle={(v) => toggle(types, setTypes, v)} />
//       <FilterSection title="Experience Level" options={EXPERIENCE} selected={exp} onToggle={(v) => toggle(exp, setExp, v)} />
//       <FilterSection title="Salary Range" options={SALARY_RANGES} selected={salary} onToggle={(v) => toggle(salary, setSalary, v)} />

//       <button onClick={applyFilters} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
//         Apply Filters
//       </button>
//     </div>
//   )
// }



// components/csr/JobFilters.js
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const JOB_TYPES = ['Full Time', 'Part Time', 'Remote', 'Hybrid', 'Contract']
const EXPERIENCE = ['Entry Level', 'Mid Level', 'Senior', 'Director', 'VP & Above']
const SALARY_RANGES = ['$0–$50k', '$50k–$80k', '$80k–$120k', '$120k–$180k', '$180k+']

export default function JobFilters({ initialFilters = {} }) {
  const router = useRouter()

  // 🔹 OLD filters (unchanged)
  const [types, setTypes] = useState(initialFilters.types || [])
  const [exp, setExp] = useState(initialFilters.experience || [])
  const [salary, setSalary] = useState(initialFilters.salary || [])

  // 🔹 NEW filters
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(initialFilters.category || '')
  const [search, setSearch] = useState(initialFilters.q || '')
  const [location, setLocation] = useState(initialFilters.location || '')

  const toggle = (arr, setArr, val) => {
    setArr(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val])
  }

  // 🔥 Fetch categories dynamically from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://uatsisglobalapi.neuralinfo.co.in/public/jobs/preview?status=Open"
        )
        const data = await res.json()

        const unique = [...new Set(data.map(j => j.category_name))]
        setCategories(unique)
      } catch (err) {
        console.error("Category fetch error:", err)
      }
    }

    fetchCategories()
  }, [])

  // 🔥 Apply filters (merge OLD + NEW)
  const applyFilters = () => {
    const q = { ...router.query }

    // OLD filters
    if (types.length) q.types = types.join(',')
    else delete q.types

    if (exp.length) q.experience = exp.join(',')
    else delete q.experience

    if (salary.length) q.salary = salary.join(',')
    else delete q.salary

    // NEW filters
    if (search) q.q = search
    else delete q.q

    if (location) q.location = location
    else delete q.location

    if (selectedCategory) q.category = selectedCategory
    else delete q.category

    router.push({ pathname: '/find-jobs', query: q })
  }

  const clearAll = () => {
    setTypes([])
    setExp([])
    setSalary([])
    setSearch('')
    setLocation('')
    setSelectedCategory('')

    router.push('/find-jobs')
  }

  const FilterSection = ({ title, options, selected, onToggle }) => (
    <div style={{ marginBottom: 24 }}>
      <div className="filter-title">{title}</div>
      {options.map((opt) => (
        <label key={opt} className="filter-option" style={{ cursor: 'pointer' }}>
          <span>{opt}</span>
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => onToggle(opt)}
          />
        </label>
      ))}
    </div>
  )

  return (
    <div className="sidebar-filter">

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700 }}>Filters</h3>
        <button
          onClick={clearAll}
          style={{
            fontSize: 13,
            color: 'var(--primary)',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          Clear All
        </button>
      </div>

      {/* 🔍 NEW: Search */}
      <div style={{ marginBottom: 20 }}>
        <div className="filter-title">Search</div>
        <input
          type="text"
          placeholder="Job title, keywords..."
          className="form-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 📍 NEW: Location */}
      <div style={{ marginBottom: 20 }}>
        <div className="filter-title">Location</div>
        <input
          type="text"
          placeholder="City or postcode"
          className="form-input"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* 🧠 NEW: Category */}
      <div style={{ marginBottom: 24 }}>
        <div className="filter-title">Category</div>

        {categories.map((cat) => (
          <label key={cat} className="filter-option" style={{ cursor: 'pointer' }}>
            <span>{cat}</span>
            <input
              type="radio"
              name="category"
              checked={selectedCategory === cat}
              onChange={() => setSelectedCategory(cat)}
            />
          </label>
        ))}
      </div>

      {/* 🔹 OLD filters (unchanged UI) */}
      <FilterSection
        title="Job Type"
        options={JOB_TYPES}
        selected={types}
        onToggle={(v) => toggle(types, setTypes, v)}
      />

      <FilterSection
        title="Experience Level"
        options={EXPERIENCE}
        selected={exp}
        onToggle={(v) => toggle(exp, setExp, v)}
      />

      <FilterSection
        title="Salary Range"
        options={SALARY_RANGES}
        selected={salary}
        onToggle={(v) => toggle(salary, setSalary, v)}
      />

      {/* Apply Button */}
      <button
        onClick={applyFilters}
        className="btn btn-primary"
        style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
      >
        Apply Filters
      </button>
    </div>
  )
}