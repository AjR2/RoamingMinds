import './Topics.css'

const TOPICS = [
  {
    emoji: '🧠',
    title: 'Cognitive Science',
    desc: 'How thinking patterns shape our mental experience and behaviour.',
  },
  {
    emoji: '😰',
    title: 'Anxiety & Stress',
    desc: 'Understanding the cognitive roots of worry, fear, and burnout.',
  },
  {
    emoji: '🌧️',
    title: 'Depression & Mood',
    desc: 'Exploring low mood through a compassionate, evidence-informed lens.',
  },
  {
    emoji: '🪞',
    title: 'Self-Compassion',
    desc: 'Why we\'re our own harshest critics and how to change that.',
  },
  {
    emoji: '💪',
    title: 'Resilience',
    desc: 'Building the mental muscles that help you bounce back stronger.',
  },
  {
    emoji: '🧘',
    title: 'Mindfulness',
    desc: 'Practical approaches to presence, attention, and awareness.',
  },
  {
    emoji: '😴',
    title: 'Sleep & Recovery',
    desc: 'The often-overlooked connection between rest and mental health.',
  },
  {
    emoji: '🤝',
    title: 'Social Connection',
    desc: 'Relationships, loneliness, and belonging in modern life.',
  },
]

export default function Topics() {
  return (
    <section className="topics section" id="topics">
      <div className="container">
        <div className="topics__header">
          <span className="section-label">What we cover</span>
          <h2 className="section-title">Topics we explore</h2>
          <div className="divider" />
          <p className="section-subtitle">
            From everyday stress to deeper questions of identity and resilience —
            we roam across the full landscape of mental wellness.
          </p>
        </div>

        <div className="topics__grid">
          {TOPICS.map(({ emoji, title, desc }) => (
            <div className="topics__item card" key={title}>
              <span className="topics__emoji" aria-hidden="true">{emoji}</span>
              <h3 className="topics__item-title">{title}</h3>
              <p className="topics__item-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
