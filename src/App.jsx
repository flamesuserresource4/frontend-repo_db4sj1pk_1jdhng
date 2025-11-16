import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
      <footer className="bg-slate-950 text-slate-400 text-sm py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Your Name — Designer & Software Engineer</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#">LinkedIn</a>
            <a className="hover:text-white" href="#">GitHub</a>
            <a className="hover:text-white" href="#">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
