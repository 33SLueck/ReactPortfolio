import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    
      <header className="bg-white shadow-lg sticky top-0 z-50">
       <Nav />
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
       
      </main>
<Footer />
     
    </div>
  )
}

export default App
