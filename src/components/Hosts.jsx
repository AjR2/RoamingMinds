import './Hosts.css'

const HOSTS = [
  {
    name: 'AJ',
    role: 'Co-host',
    bio: (
      <>
        AJ is a computer science educator, UX researcher, and founder passionate about the
        intersection of human cognition and technology. With a master's in Human-Computer
        Interaction and over eight years in education, AJ has spent a career studying how people
        think, learn, and make decisions. As the founder of{' '}
        <a
          href="https://theenactive.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hosts__bio-link"
        >
          Enactive
        </a>
        {' '}— a cognitive offload service that helps high-performers close open decision loops —
        and a former Head UX Researcher in the AR space, AJ brings both research rigor and lived
        experience to every conversation. On Roaming Minds, AJ connects the psychology, the data,
        and real-world frameworks that help young professionals reclaim how they think and feel.
      </>
    ),
    initials: 'AJ',
    color: 'var(--color-primary)',
  },
  {
    name: 'Carlos Koudouovoh',
    role: 'Co-host',
    bio: "Carlos is a University of Maryland alumnus and current medical student whose passion lies at the crossroads of biology, behaviour, and human health. With a strong foundation in the biological sciences and particular depth in neurology, Carlos brings a clinical lens to conversations that too often stay surface-level. His frontline medical training allows him to ground Roaming Minds' exploration of mental health and cognition in the science of how our bodies and brains actually work — translating complex medical insight into practical, relatable understanding for everyday listeners.",
    initials: 'CK',
    color: 'var(--color-accent)',
  },
]

export default function Hosts() {
  return (
    <section className="hosts section" id="hosts">
      <div className="container">
        <span className="section-label">Your hosts</span>
        <h2 className="section-title">Meet the voices</h2>
        <div className="divider" />
        <p className="section-subtitle hosts__subtitle">
          Two people, one mic, and a whole lot of thoughts about the mind.
        </p>

        <div className="hosts__grid">
          {HOSTS.map((host, i) => (
            <div className="hosts__card card" key={i}>
              <div className="hosts__avatar" style={{ background: host.color }}>
                <span className="hosts__initials">{host.initials}</span>
              </div>
              <div className="hosts__info">
                <h3 className="hosts__name">{host.name}</h3>
                <span className="hosts__role">{host.role}</span>
                <p className="hosts__bio">{host.bio}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
