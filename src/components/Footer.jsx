import './Footer.css'

const FOOTER_LINKS = [
  { href: '#about',     label: 'About'    },
  { href: '#episodes',  label: 'Episodes' },
  { href: '#hosts',     label: 'Hosts'    },
  { href: '#topics',    label: 'Topics'   },
  { href: '#listen',    label: 'Listen'   },
  { href: '#newsletter',label: 'Subscribe'},
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="footer__logo-wrap" aria-label="Back to top">
            <img src="/logo.png" alt="Roaming Minds" className="footer__logo" />
            <span className="footer__brand-name">Roaming Minds</span>
          </a>
          <p className="footer__tagline">
            Exploring mental health, one thought at a time.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="footer__nav">
          <ul className="footer__links">
            {FOOTER_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="footer__link">{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copy">
          &copy; {year} Roaming Minds Podcast. All rights reserved.
        </p>
        <p className="footer__disclaimer">
          This podcast is for informational purposes only and does not constitute professional
          mental health advice.
        </p>
      </div>
    </footer>
  )
}
