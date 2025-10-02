

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-8">
                I'm a passionate developer with 35+ years of hobby and semi-professional coding experience, starting with BASIC in 1989 at age 10. 
                From C/C++ and C# to Java Android development and PHP using Laravel, I'm now studying the PERN stack 
                at Digital Career Institute to grow into a real professional while diving deep into DevOps, CI/CD pipelines, AWS, and Docker.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Programming Journey</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Started with BASIC in 1989 (age 10)</li>
                    <li>• Explored C/C++ and C# development</li>
                    <li>• Android development with Java</li>
                    <li>• Web development with PHP & Laravel</li>
                    <li>• Currently mastering PERN stack</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Focus</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• DevOps & CI/CD pipelines</li>
                    <li>• AWS cloud technologies</li>
                    <li>• Docker containerization</li>
                    <li>• Modern full-stack development</li>
                    <li>• Professional growth at DCI</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 flex justify-center">
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'PHP', 'Laravel', 'C#', 'Java'].map((skill) => (
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

  )
}

export default About