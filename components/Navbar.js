// // components/Navbar.js — SSR-compatible header
// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { useRouter } from 'next/router'

// const NAV_LINKS = [
//   { label: 'Find Jobs', href: '/find-jobs' },
//   { label: 'Employers', href: '/employers' },
//   // { label: 'Candidates', href: '/candidates' },
//   { label: 'Partner', href: '#' },


//   // { label: 'Blog', href: '/blogs' },
//   {
//     label: 'About Us',
//     href: '#',
//     children: [
//       // { label: 'Shop', href: '/shop' },
//       { label: 'About Us', href: '/about' },
//       // { label: 'Pricing', href: '/pricing' },
//       { label: "FAQ's", href: '/faqs' },
//       { label: 'Terms & Conditions', href: '/terms' },
//       // { label: 'Invoice', href: '/invoice' },
//       { label: 'Contact Us', href: '/contact' },
//       // { label: '404 Page', href: '/404' },
//     ],
//   },
// ]

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState(null)
//   const router = useRouter()

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const isActive = (href) => router.pathname === href || router.pathname.startsWith(href + '/')

//   return (
//     <>
//       <header style={{
//         position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
//         background: scrolled ? 'rgba(255,255,255,0.97)' : 'var(--white)',
//         borderBottom: '1px solid var(--gray-200)',
//         backdropFilter: 'blur(12px)',
//         boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
//         transition: 'all 0.3s ease',
//       }}>
//         <div className="container" style={{ display: 'flex', alignItems: 'center', height: '72px', gap: '40px' }}>
//           {/* Logo */}
//           {/* <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
//             <div style={{
//               width: 36, height: 36, background: 'var(--primary)',
//               borderRadius: 10, display: 'flex', alignItems: 'center',
//               justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 18,
//               fontFamily: 'var(--font-display)'
//             }}>T</div>
//             <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--dark)' }}>
//               Talent<span style={{ color: 'var(--primary)' }}>Flow</span>
//             </span>
//           </Link> */}

// <Link
//   href="/"
//   style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}
// >
//   <img
//     src="/asset/LOGO-new-formet.png"
//     alt="SIS Global Workforce Solutions Logo"
//     style={{
//       height: '70px',

//       width: 'auto',
//       objectFit: 'contain'
//     }}
//   />
// </Link>


//           {/* Desktop Nav */}
//           <nav style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1 }} className="desktop-nav">
//             {NAV_LINKS.map((link) => (
//               <div key={link.label} style={{ position: 'relative' }}
//                 onMouseEnter={() => link.children && setActiveDropdown(link.label)}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 {link.children ? (
//                   <button style={{
//                     display: 'flex', alignItems: 'center', gap: '4px',
//                     padding: '8px 14px', borderRadius: 'var(--radius)',
//                     border: 'none', background: 'transparent', cursor: 'pointer',
//                     fontSize: 15, fontWeight: 500,
//                     color: activeDropdown === link.label ? 'var(--primary)' : 'var(--gray-700)',
//                     transition: 'color 0.2s',
//                   }}>
//                     {link.label}
//                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: activeDropdown === link.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
//                       <path d="M6 9l6 6 6-6" />
//                     </svg>
//                   </button>
//                 ) : (
//                   <Link href={link.href} style={{
//                     display: 'block', padding: '8px 14px',
//                     borderRadius: 'var(--radius)', fontSize: 15, fontWeight: 500,
//                     color: isActive(link.href) ? 'var(--primary)' : 'var(--gray-700)',
//                     background: isActive(link.href) ? 'var(--primary-light)' : 'transparent',
//                     transition: 'all 0.2s',
//                   }}>
//                     {link.label}
//                   </Link>
//                 )}

//                 {/* Dropdown */}
//                 {link.children && activeDropdown === link.label && (
//                   <div style={{
//                     position: 'absolute', top: '100%', left: 0,
//                     background: 'var(--white)', border: '1px solid var(--gray-200)',
//                     borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)',
//                     padding: '8px', minWidth: '200px', zIndex: 100,
//                     animation: 'fadeUp 0.15s ease',
//                   }}>
//                     {link.children.map((child) => (
//                       <Link key={child.href} href={child.href} style={{
//                         display: 'block', padding: '10px 14px',
//                         borderRadius: 'var(--radius)', fontSize: 14, fontWeight: 500,
//                         color: isActive(child.href) ? 'var(--primary)' : 'var(--gray-700)',
//                         background: isActive(child.href) ? 'var(--primary-light)' : 'transparent',
//                         transition: 'all 0.15s',
//                       }}
//                         onMouseEnter={(e) => { if (!isActive(child.href)) { e.target.style.background = 'var(--gray-50)'; e.target.style.color = 'var(--primary)' } }}
//                         onMouseLeave={(e) => { if (!isActive(child.href)) { e.target.style.background = 'transparent'; e.target.style.color = 'var(--gray-700)' } }}
//                       >
//                         {child.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* CTA */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
//             <Link href="/login" style={{
//               padding: '8px 18px', fontSize: 15, fontWeight: 600,
//               color: 'var(--primary)', border: 'none', background: 'transparent',
//               cursor: 'pointer',
//             }}>Candidate Login </Link>
//             <Link href="/register" className="btn btn-primary" style={{ padding: '9px 20px', fontSize: 14 }}>
//               Post a Job
//             </Link>
//           </div>

//           {/* Mobile toggle */}
//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             style={{
//               display: 'none', border: 'none', background: 'transparent',
//               padding: '6px', cursor: 'pointer',
//             }}
//             className="mobile-toggle"
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gray-700)" strokeWidth="2">
//               {mobileOpen
//                 ? <><path d="M18 6L6 18M6 6l12 12" /></>
//                 : <><path d="M4 6h16M4 12h16M4 18h16" /></>}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileOpen && (
//           <div style={{
//             background: 'var(--white)', borderTop: '1px solid var(--gray-200)',
//             padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px',
//           }}>
//             {NAV_LINKS.map((link) => (
//               <div key={link.label}>
//                 {link.children ? (
//                   <>
//                     <div style={{ padding: '10px 12px', fontWeight: 600, fontSize: 14, color: 'var(--gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
//                       {link.label}
//                     </div>
//                     {link.children.map((child) => (
//                       <Link key={child.href} href={child.href}
//                         onClick={() => setMobileOpen(false)}
//                         style={{ display: 'block', padding: '10px 20px', fontSize: 15, color: 'var(--gray-700)', borderRadius: 'var(--radius)' }}>
//                         {child.label}
//                       </Link>
//                     ))}
//                   </>
//                 ) : (
//                   <Link href={link.href}
//                     onClick={() => setMobileOpen(false)}
//                     style={{
//                       display: 'block', padding: '10px 12px', fontSize: 15, fontWeight: 600,
//                       color: isActive(link.href) ? 'var(--primary)' : 'var(--gray-800)',
//                       borderRadius: 'var(--radius)',
//                     }}>
//                     {link.label}
//                   </Link>
//                 )}
//               </div>
//             ))}
//             <div style={{ marginTop: '12px', display: 'flex', gap: '12px' }}>
//               <Link href="/login" className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}>Log In</Link>
//               <Link href="/register" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Post a Job</Link>
//             </div>
//           </div>
//         )}
//       </header>

//       <style jsx>{`
//         @media (max-width: 900px) {
//           .desktop-nav { display: none !important; }
//           .mobile-toggle { display: flex !important; }
//         }
//       `}</style>

//       {/* Spacer */}
//       <div style={{ height: 72 }} />
//     </>
//   )
// }


// RESPONSIVE VERSION 

// components/Navbar.js — SSR-compatible header with enhanced mobile responsiveness
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NAV_LINKS = [
  { label: 'Find Jobs', href: '/find-jobs' },
  {
    label: 'Employers',
    children: 
    [
      
      { label: 'Employee', href: '/employers' },
      { label: 'Employer Dashboard', href: '/empDash' }
    ]
  },
  { label: 'Partner', href: '#' },
  {
    label: 'About Us',
    href: '#',
    children: [
      { label: 'About Us', href: '/about' },
      { label: "FAQ's", href: '/faqs' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },

]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false)
  }, [router.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href) => router.pathname === href || router.pathname.startsWith(href + '/')

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'var(--white)',
        borderBottom: '1px solid var(--gray-200)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px', gap: '20px' }}>
          {/* Logo - responsive sizing */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img
              src="/asset/LOGO-new-formet.png"
              alt="SIS Global Workforce Solutions Logo"
              style={{
                height: 'clamp(40px, 8vw, 70px)',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1, justifyContent: 'flex-end' }} className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <div key={link.label} style={{ position: 'relative' }}
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.children ? (
                  <button style={{
                    display: 'flex', alignItems: 'center', gap: '4px',
                    padding: '8px 14px', borderRadius: 'var(--radius)',
                    border: 'none', background: 'transparent', cursor: 'pointer',
                    fontSize: 15, fontWeight: 500,
                    color: activeDropdown === link.label ? 'var(--primary)' : 'var(--gray-700)',
                    transition: 'color 0.2s',
                  }}>
                    {link.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: activeDropdown === link.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                ) : (
                  <Link href={link.href} style={{
                    display: 'block', padding: '8px 14px',
                    borderRadius: 'var(--radius)', fontSize: 15, fontWeight: 500,
                    color: isActive(link.href) ? 'var(--primary)' : 'var(--gray-700)',
                    background: isActive(link.href) ? 'var(--primary-light)' : 'transparent',
                    transition: 'all 0.2s',
                  }}>
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0,
                    background: 'var(--white)', border: '1px solid var(--gray-200)',
                    borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)',
                    padding: '8px', minWidth: '200px', zIndex: 100,
                    animation: 'fadeUp 0.15s ease',
                  }}>
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} style={{
                        display: 'block', padding: '10px 14px',
                        borderRadius: 'var(--radius)', fontSize: 14, fontWeight: 500,
                        color: isActive(child.href) ? 'var(--primary)' : 'var(--gray-700)',
                        background: isActive(child.href) ? 'var(--primary-light)' : 'transparent',
                        transition: 'all 0.15s',
                      }}
                        onMouseEnter={(e) => { if (!isActive(child.href)) { e.target.style.background = 'var(--gray-50)'; e.target.style.color = 'var(--primary)' } }}
                        onMouseLeave={(e) => { if (!isActive(child.href)) { e.target.style.background = 'transparent'; e.target.style.color = 'var(--gray-700)' } }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }} className="desktop-cta">
            <Link href="/login" style={{
              padding: '8px 18px', fontSize: 15, fontWeight: 600,
              color: 'var(--primary)', border: 'none', background: 'transparent',
              cursor: 'pointer',
            }}>Candidate Login</Link>
            <Link href="/register" className="btn btn-primary" style={{ padding: '9px 20px', fontSize: 14 }}>
              Post a Job
            </Link>
          </div>

          {/* Mobile toggle button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            style={{
              display: 'none', border: 'none', background: 'transparent',
              padding: '8px', cursor: 'pointer', zIndex: 1001,
            }}
            className="mobile-toggle"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gray-700)" strokeWidth="2">
              {mobileOpen
                ? <><path d="M18 6L6 18M6 6l12 12" /></>
                : <><path d="M4 6h16M4 12h16M4 18h16" /></>}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay + Drawer */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0,0,0,0.5)', zIndex: 1000,
              animation: 'fadeIn 0.2s ease',
            }}
          />
          {/* Drawer */}
          <div style={{
            position: 'fixed', top: 0, right: 0, bottom: 0,
            width: 'min(320px, 85vw)',
            background: 'var(--white)', zIndex: 1001,
            boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
            padding: '80px 20px 20px',
            display: 'flex', flexDirection: 'column',
            gap: '8px',
            animation: 'slideIn 0.25s ease',
            overflowY: 'auto',
          }}>
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <div style={{ padding: '12px 12px 4px', fontWeight: 600, fontSize: 14, color: 'var(--gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href}
                        onClick={() => setMobileOpen(false)}
                        style={{ display: 'block', padding: '12px 20px', fontSize: 16, color: 'var(--gray-700)', borderRadius: 'var(--radius)', transition: 'background 0.2s' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block', padding: '12px 16px', fontSize: 16, fontWeight: 500,
                      color: isActive(link.href) ? 'var(--primary)' : 'var(--gray-800)',
                      borderRadius: 'var(--radius)',
                      background: isActive(link.href) ? 'var(--primary-light)' : 'transparent',
                    }}>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link href="/login" className="btn btn-outline" style={{ justifyContent: 'center', width: '100%' }}>Candidate Login</Link>
              <Link href="/register" className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>Post a Job</Link>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Spacer */}
      <div style={{ height: 72 }} />
    </>
  )
}