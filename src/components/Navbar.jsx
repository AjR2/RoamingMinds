import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { href: '#about',    label: 'About'    },
  { href: '#episodes', label: 'Episodes' },
  { href: '#hosts',    label: 'Hosts'    },
  { href: '#topics',   label: 'Topics'   },
  { href: '#listen',   label: 'Listen'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">
        <a href="#top" className="navbar__logo" aria-label="Roaming Minds — home">
          <img src="/logo.png" alt="Roaming Minds logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">Roaming Minds</span>
        </a>

        <nav aria-label="Main navigation" className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
          <ul className="navbar__links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="navbar__link" onClick={closeMenu}>{label}</a>
              </li>
            ))}
          </ul>
          <a href="#listen" className="btn btn-accent navbar__cta" onClick={closeMenu}>
            Subscribe
          </a>
        </nav>

        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
