import { useState } from 'react'
import './Newsletter.css'

// After creating your ConvertKit form, replace this with your numeric Form ID.
// Find it at: kit.com → Forms → your form → Settings → the ID in the URL.
const CONVERTKIT_FORM_ID = '9392365'

export default function Newsletter() {
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const res = await fetch(
        `https://app.convertkit.com/forms/${CONVERTKIT_FORM_ID}/subscriptions`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email_address: email }),
        }
      )
      const data = await res.json()
      if (data.status === 'success' || res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
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
                    disabled={loading}
                  />
                  <button type="submit" className="btn btn-accent newsletter__submit" disabled={loading}>
                    {loading ? 'Subscribing…' : 'Subscribe'}
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
              href="mailto:roamingminds@theenactive.com"
              className="newsletter__contact-link"
            >
              roamingminds@theenactive.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
