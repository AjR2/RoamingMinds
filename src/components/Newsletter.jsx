import { useState } from 'react'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]       = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    // TODO: Wire up to a real email provider (e.g. Mailchimp, ConvertKit, Buttondown)
    setError('')
    setSubmitted(true)
  }

  return (
    <section className="newsletter section" id="newsletter">
      <div className="container">
        <div className="newsletter__inner">
          <div className="newsletter__content">
            <span className="section-label">Stay in the loop</span>
            <h2 className="section-title newsletter__title">Get episodes delivered</h2>
            <div className="divider" />
            <p className="newsletter__desc">
              New episode alerts, show notes, and the occasional mental health
              resource — straight to your inbox. No spam, ever.
            </p>
          </div>

          <div className="newsletter__form-wrap">
            {submitted ? (
              <div className="newsletter__success" role="status">
                <div className="newsletter__success-icon" aria-hidden="true">✓</div>
                <h3>You're in!</h3>
                <p>Thanks for subscribing. We'll be in touch with the next episode.</p>
              </div>
            ) : (
              <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
                <label htmlFor="newsletter-email" className="newsletter__label">
                  Email address
                </label>
                <div className="newsletter__input-row">
                  <input
                    id="newsletter-email"
                    type="email"
                    className={`newsletter__input${error ? ' newsletter__input--error' : ''}`}
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError('') }}
                    aria-describedby={error ? 'newsletter-error' : undefined}
                    autoComplete="email"
                  />
                  <button type="submit" className="btn btn-accent newsletter__submit">
                    Subscribe
                  </button>
                </div>
                {error && (
                  <p id="newsletter-error" className="newsletter__error" role="alert">
                    {error}
                  </p>
                )}
                <p className="newsletter__disclaimer">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Contact */}
        <div className="newsletter__contact">
          <p>
            Have a topic suggestion or want to get in touch?{' '}
            <a
              href="mailto:roamingmindspod@gmail.com"
              className="newsletter__contact-link"
            >
              roamingmindspod@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
