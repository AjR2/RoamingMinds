import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Episodes   from './components/Episodes'
import Hosts      from './components/Hosts'
import Topics     from './components/Topics'
import Listen     from './components/Listen'
import Newsletter from './components/Newsletter'
import Footer     from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only" style={{ position:'absolute', top:'-40px', left:'6px', background:'#000', color:'#fff', padding:'8px 12px', borderRadius:'4px', zIndex:9999, transition:'top 0.2s' }}
        onFocus={e => e.currentTarget.style.top = '6px'}
        onBlur={e  => e.currentTarget.style.top = '-40px'}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Episodes />
        <Hosts />
        <Topics />
        <Listen />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}
