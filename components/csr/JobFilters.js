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



// // components/csr/JobFilters.js
// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
// import Select from "react-select"


// const JOB_TYPES = ['Full Time', 'Part Time', 'Remote', 'Hybrid', 'Contract']
// const EXPERIENCE = ['Entry Level (0-3 yrs)', 'Mid Level (3-5 yrs)', 'Senior (5-8 yrs)', 'Director (8-10 yrs)', 'VP & Above (10-15 yrs)']
// const SALARY_RANGES = ['$0–$50k', '$50k–$80k', '$80k–$120k', '$120k–$180k', '$180k+']



// export default function JobFilters({ initialFilters = {} }) {
//   const router = useRouter()

//   // 🔹 filters


//   const [types, setTypes] = useState(initialFilters.types || [])
//   const [exp, setExp] = useState(initialFilters.experience || [])
//   const [salary, setSalary] = useState(initialFilters.salary || [])
//   const [categories, setCategories] = useState([])
//  const [selectedCategory, setSelectedCategory] = useState(
//   initialFilters.category ? initialFilters.category.split(',') : []
// )
//   const [search, setSearch] = useState(initialFilters.q || '')
//   const [location, setLocation] = useState(initialFilters.location || '')

//   const toggle = (arr, setArr, val) => {
//     setArr(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val])
//   }

//   // 🔥 Fetch categories dynamically from API
//   // useEffect(() => {
//   //   const fetchCategories = async () => {
//   //     try {
//   //       const res = await fetch(
//   //         "https://uatsisglobalapi.neuralinfo.co.in/public/jobs/preview?status=Open"
//   //       )
//   //       const data = await res.json()

//   //       const unique = [...new Set(data.map(j => j.category_name))]
//   //       setCategories(unique)
//   //     } catch (err) {
//   //       console.error("Category fetch error:", err)
//   //     }
//   //   }

//   //   fetchCategories()
//   // }, [])


//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch(
//           "https://uatsisglobalapi.neuralinfo.co.in/public/jobs/preview?status=Open"
//         )
//         const data = await res.json()

//         // Count categories
//         const counts = data.reduce((acc, job) => {
//           const cat = job.category_name || "Other"
//           acc[cat] = (acc[cat] || 0) + 1
//           return acc
//         }, {})

//         // Convert to array
//         const categoryList = Object.keys(counts).map((cat) => ({
//           name: cat,
//           count: counts[cat],
//         }))

//         setCategories(categoryList)
//       } catch (err) {
//         console.error("Category fetch error:", err)
//       }
//     }

//     fetchCategories()
//   }, [])


//   // 🔥 Apply filters (merge OLD + NEW)
//   const applyFilters = () => {
//     const q = { ...router.query }

//     // OLD filters
//     if (types.length) q.types = types.join(',')
//     else delete q.types

//     if (exp.length) q.experience = exp.join(',')
//     else delete q.experience

//     if (salary.length) q.salary = salary.join(',')
//     else delete q.salary

//     // NEW filters
//     if (search) q.q = search
//     else delete q.q

//     if (location) q.location = location
//     else delete q.location

//     if (selectedCategory.length) {
//       q.category = selectedCategory.join(',')
//     } else {
//       delete q.category
//     }

//     router.push({ pathname: '/find-jobs', query: q })
//   }

//   const clearAll = () => {
//     setTypes([])
//     setExp([])
//     setSalary([])
//     setSearch('')
//     setLocation('')
//     setSelectedCategory([])

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

//       {/* Header */}
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
//         <h3 style={{ fontSize: 18, fontWeight: 700 }}>Filters</h3>
//         <button
//           onClick={clearAll}
//           style={{
//             fontSize: 13,
//             color: 'var(--primary)',
//             border: 'none',
//             background: 'none',
//             cursor: 'pointer',
//             fontWeight: 600
//           }}
//         >
//           Clear All
//         </button>
//       </div>

//       {/* 🔍 NEW: Search */}
//       <div style={{ marginBottom: 20 }}>
//         <div className="filter-title">Search</div>
//         <input
//           type="text"
//           placeholder="Job title, keywords..."
//           className="form-input"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* 📍 NEW: Location */}
//       <div style={{ marginBottom: 20 }}>
//         <div className="filter-title">Location</div>
//         <input
//           type="text"
//           placeholder="City or postcode"
//           className="form-input"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//       </div>

//       {/* 🧠 NEW: Category normal */}
//       {/* <div style={{ marginBottom: 24 }}>
//         <div className="filter-title">Category</div>

//         {categories.map((cat) => (
//           <label key={cat} className="filter-option" style={{ cursor: 'pointer' }}>
//             <span>{cat}</span>
//             <input
//               type="radio"
//               name="category"
//               checked={selectedCategory === cat}
//               onChange={() => setSelectedCategory(cat)}
//             />
//           </label>
//         ))}
//       </div> */}


//         {/* 🔹 Category dropdown  */}


// {/* <div style={{ marginBottom: 24 }}>
//   <div className="filter-title">Category</div>

//   <select
//     className="form-input"
//     value={selectedCategory || ''}
//     onChange={(e) => setSelectedCategory(e.target.value)}
//   >
//     <option value="">All Categories</option>

//     {categories.map((cat) => ( 
//       <option key={cat.name} value={cat.name}>
//         {cat.name} ({cat.count})
//       </option>
//     ))}

//   </select>
// </div> */}

// <div style={{ marginBottom: 24 }}>
//   <div className="filter-title">Category</div>

//   <Select
//     isMulti
//     options={categories.map(cat => ({
//       label: `${cat.name} (${cat.count})`,
//       value: cat.name
//     }))}
//     value={categories
//       .filter(cat => selectedCategory.includes(cat.name))
//       .map(cat => ({
//         label: `${cat.name} (${cat.count})`,
//         value: cat.name
//       }))
//     }
//     onChange={(selected) =>
//       setSelectedCategory(selected ? selected.map(s => s.value) : [])
//     }
//     placeholder="Select Categories"
//   />
// </div>


//       {/* 🔹 OLD filters (unchanged UI) */}
//       <FilterSection
//         title="Job Type"
//         options={JOB_TYPES}
//         selected={types}
//         onToggle={(v) => toggle(types, setTypes, v)}
//       />

//       <FilterSection
//         title="Experience Level"
//         options={EXPERIENCE}
//         selected={exp}
//         onToggle={(v) => toggle(exp, setExp, v)}
//       />

//       <FilterSection
//         title="Salary Range"
//         options={SALARY_RANGES}
//         selected={salary}
//         onToggle={(v) => toggle(salary, setSalary, v)}
//       />

//       {/* Apply Button */}
//       <button
//         onClick={applyFilters}
//         className="btn btn-primary"
//         style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
//       >
//         Apply Filters
//       </button>
//     </div>
//   )
// }



// 


import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const JOB_TYPES = ['Full Time', 'Part Time', 'Remote', 'Hybrid', 'Contract']
const EXPERIENCE = ['Entry Level (0-3 yrs)', 'Mid Level (3-5 yrs)', 'Senior (5-8 yrs)', 'Director (8-10 yrs)', 'VP & Above (10-15 yrs)']
const SALARY_RANGES = ['$0–$50k', '$50k–$80k', '$80k–$120k', '$120k–$180k', '$180k+']

export default function JobFilters({ initialFilters = {} }) {
  const router = useRouter()

  const [types, setTypes] = useState(initialFilters.types ? initialFilters.types.split(',') : [])
  const [exp, setExp] = useState(initialFilters.experience ? initialFilters.experience.split(',') : [])
  const [salary, setSalary] = useState(initialFilters.salary ? initialFilters.salary.split(',') : [])
  const [categories, setCategories] = useState([])

  // ✅ MULTI CATEGORY STATE
  const [selectedCategory, setSelectedCategory] = useState(
    initialFilters.category ? initialFilters.category.split(',') : []
  )

  const [search, setSearch] = useState(initialFilters.q || '')
  const [location, setLocation] = useState(initialFilters.location || '')

  const toggle = (arr, setArr, val) => {
    setArr(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val])
  }

  // 🔥 Fetch categories with count
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://uatsisglobalapi.neuralinfo.co.in/public/jobs/preview?status=Open"
        )
        const data = await res.json()

        const counts = data.reduce((acc, job) => {
          const cat = job.category_name || "Other"
          acc[cat] = (acc[cat] || 0) + 1
          return acc
        }, {})

        const categoryList = Object.keys(counts).map((cat) => ({
          name: cat,
          count: counts[cat],
        }))

        setCategories(categoryList)
      } catch (err) {
        console.error("Category fetch error:", err)
      }
    }

    fetchCategories()
  }, [])

  // 🔥 APPLY FILTERS
  const applyFilters = () => {
    const q = { ...router.query }

    if (types.length) q.types = types.join(',')
    else delete q.types

    if (exp.length) q.experience = exp.join(',')
    else delete q.experience

    if (salary.length) q.salary = salary.join(',')
    else delete q.salary

    if (search) q.q = search
    else delete q.q

    if (location) q.location = location
    else delete q.location

    // ✅ MULTI CATEGORY
    if (selectedCategory.length) {
      q.category = selectedCategory.join(',')
    } else {
      delete q.category
    }

    router.push({ pathname: '/find-jobs', query: q })
  }

  const clearAll = () => {
    setTypes([])
    setExp([])
    setSalary([])
    setSearch('')
    setLocation('')
    setSelectedCategory([])

    router.push('/find-jobs')
  }

  const FilterSection = ({ title, options, selected, onToggle }) => (
    <div style={{ marginBottom: 24 }}>
      <div className="filter-title">{title}</div>
      {options.map((opt) => (
        <label key={opt} className="filter-option">
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
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700 }}>Filters</h3>
        <button onClick={clearAll} style={{
          fontSize: 13,
          color: 'var(--primary)',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          fontWeight: 600
        }}>
          Clear All
        </button>
      </div>

      {/* Search */}
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

      {/* Location */}
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

      {/* ✅ CATEGORY (SAME UI) */}
      <div style={{ marginBottom: 24 }}>
        <div className="filter-title">Category</div>

        {categories.map((cat) => (
          <label key={cat.name} className="filter-option">
            <span>{cat.name} ({cat.count})</span>
            <input
              type="checkbox"
              checked={selectedCategory.includes(cat.name)}
              onChange={() =>
                setSelectedCategory(prev =>
                  prev.includes(cat.name)
                    ? prev.filter(c => c !== cat.name)
                    : [...prev, cat.name]
                )
              }
            />
          </label>
        ))}
      </div>

      <FilterSection title="Job Type" options={JOB_TYPES} selected={types} onToggle={(v) => toggle(types, setTypes, v)} />
      <FilterSection title="Experience Level" options={EXPERIENCE} selected={exp} onToggle={(v) => toggle(exp, setExp, v)} />
      <FilterSection title="Salary Range" options={SALARY_RANGES} selected={salary} onToggle={(v) => toggle(salary, setSalary, v)} />

      <button onClick={applyFilters} className="btn btn-primary" style={{ width: '100%', marginTop: 8 }}>
        Apply Filters
      </button>
    </div>
  )
}