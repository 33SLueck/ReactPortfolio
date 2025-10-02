

const Projects = () => {
  return (
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
  )
}

export default Projects