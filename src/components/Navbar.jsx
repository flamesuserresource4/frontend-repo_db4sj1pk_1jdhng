import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-semibold text-white/90 text-lg">Your Name</a>
        <div className="hidden md:flex items-center gap-6 text-white/70">
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <button className="md:hidden inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-white/80">
          <Menu className="h-5 w-5" />
          Menu
        </button>
      </nav>
    </header>
  )
}

export default Navbar
