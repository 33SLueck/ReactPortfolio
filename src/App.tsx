import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header - fixed height */}
      <header className="bg-white shadow-lg sticky top-0 z-50 flex-shrink-0">
        <Nav />
      </header>

      {/* Main content - flexible */}
      <main className="flex-1 flex flex-col">
        {/* Hero takes remaining viewport height */}
        <div className="flex-1">
          <Hero />
        </div>
        
        {/* Other sections */}
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
