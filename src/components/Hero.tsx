import React from 'react'

const Hero = () => {
  return (
   
        <section id="hero" className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Welcome to My Portfolio
              </h2>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                I'm a developer passionate about creating amazing web experiences.
              </p>
              <div className="mt-10">
                <a 
                  href="#about" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200 inline-block"
                >
                  Learn More About Me
                </a>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Hero