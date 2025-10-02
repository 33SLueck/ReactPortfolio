const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/ReactPortfolio/me.jpg" 
                alt="Sven Lück - Developer"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-2xl object-cover"
              />
              {/* Optional: Add a decorative ring */}
              <div className="absolute inset-0 rounded-full ring-4 ring-blue-300 ring-opacity-30"></div>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm Sven Lück
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer & DevOps Enthusiast
          </p>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto mt-4">
            Transforming 35+ years of coding passion into professional expertise
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