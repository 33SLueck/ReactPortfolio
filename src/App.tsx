import React from 'react'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="header">
        <nav>
          <h1>Your Portfolio</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <h2>Welcome to My Portfolio</h2>
          <p>I'm a developer passionate about creating amazing web experiences.</p>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>Add your about information here...</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <p>Showcase your projects here...</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Add your contact information here...</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Your Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
