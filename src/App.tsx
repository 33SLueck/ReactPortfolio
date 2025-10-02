import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    
      <header className="bg-white shadow-lg sticky top-0 z-50">
       <Nav />
      </header>

      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Add your about information here... Tell your story, share your passion for development, 
                highlight your skills and experience. This is where you can really connect with visitors 
                and show them who you are as a developer and as a person.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS'].map((skill) => (
                    <span 
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-20 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Projects
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Showcase your projects here... Here are some of the exciting projects I've worked on.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div 
                  key={project}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Project {project}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      A brief description of this amazing project and the technologies used to build it.
                    </p>
                    <div className="flex space-x-3">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        Live Demo
                      </button>
                      <button className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium">
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Contact
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Add your contact information here... Let's connect! I'm always open to discussing 
                  new opportunities, collaborations, or just having a friendly chat about technology.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="mailto:your.email@example.com"
                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto text-center"
                  >
                    📧 Email Me
                  </a>
                  <a 
                    href="https://github.com/yourusername"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors w-full sm:w-auto text-center"
                  >
                    💻 GitHub
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourusername"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors w-full sm:w-auto text-center"
                  >
                    💼 LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">
              &copy; 2025 Your Portfolio. All rights reserved. Built with ❤️ using React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
