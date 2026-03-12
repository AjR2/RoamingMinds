import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero__bg-shape hero__bg-shape--1" aria-hidden="true" />
      <div className="hero__bg-shape hero__bg-shape--2" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content fade-in">
          <span className="section-label">Mental health &amp; cognition</span>
          <h1 className="hero__title">
            Exploring the mind,<br />
            <em className="hero__title-em">one conversation at a time.</em>
          </h1>
          <p className="hero__subtitle">
            Roaming Minds is a podcast diving into mental health through a cognitive lens —
            honest, humour-filled discussions that help you understand yourself better.
          </p>
          <div className="hero__actions">
            <a href="#listen" className="btn btn-accent hero__btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              Listen Now
            </a>
            <a href="#about" className="btn btn-outline hero__btn-secondary">
              Learn more
            </a>
          </div>
          <div className="hero__platforms">
            <span className="hero__platforms-label">Available on</span>
            <div className="hero__platforms-logos">
              <span className="hero__platform-badge">Apple Podcasts</span>
              <span className="hero__platform-badge">Spotify</span>
              <span className="hero__platform-badge">YouTube</span>
            </div>
          </div>
        </div>

        <div className="hero__visual fade-in" style={{ animationDelay: '0.15s' }}>
          <div className="hero__logo-wrap">
            <img src="/logo.png" alt="Roaming Minds logo" className="hero__logo" />
          </div>
          <div className="hero__waveform" aria-hidden="true">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="hero__wave-bar"
                style={{ animationDelay: `${(i * 0.07).toFixed(2)}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-dot" />
      </div>
    </section>
  )
}
