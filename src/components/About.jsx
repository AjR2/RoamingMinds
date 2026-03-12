import './About.css'

const PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8l-1 3H9l-1-3C5 18.5 3 15.5 3 11a9 9 0 0 1 9-9z"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: 'Cognitive Lens',
    desc: 'We explore mental health through the science of how we think — connecting research with real, lived experience.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Honest Conversations',
    desc: 'No scripts, no perfect answers. Just open, candid dialogue that normalises the full spectrum of mental health.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    title: 'Humour &amp; Heart',
    desc: 'We believe you can tackle heavy topics lightly. Warmth and laughter are part of the healing process.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Reflection Prompts',
    desc: 'Each episode leaves you with questions worth sitting with — prompts designed to spark genuine self-reflection and personal insight.',
  },
]

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__header">
          <span className="section-label">About the show</span>
          <h2 className="section-title about__title">
            Why we roam
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Roaming Minds started from a simple belief: understanding how our minds work is
            the first step to taking care of them. We sit down to talk about cognitive science,
            mental wellness, and everything in between — no qualifications required to listen.
          </p>
        </div>

        <div className="about__pillars">
          {PILLARS.map(({ icon, title, desc }) => (
            <div className="about__pillar card" key={title}>
              <div className="about__pillar-icon">{icon}</div>
              <h3 className="about__pillar-title" dangerouslySetInnerHTML={{ __html: title }} />
              <p className="about__pillar-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
