
const Contact = () => {
  return (
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
  )
}

export default Contact