import React from 'react'

const Nav = () => {
  return (
     <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Your Portfolio
            </h1>
            <ul className="flex space-x-8">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
  )
}

export default Nav  