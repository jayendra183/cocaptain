import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navItems = [
    { name: 'HOME', link: '/' },
    { 
      name: 'ABOUT US', 
      link: '/about',
      dropdown: [
        { name: 'Page 1', link: '/about/page1' },
        { name: 'Page 2', link: '/about/page2' },
        { name: 'Page 3', link: '/about/page3' },
      ]
    },
    { 
      name: 'ACADEMICS', 
      link: '/academics',
      dropdown: [
        { name: 'Page 1', link: '/academics/page1' },
        { name: 'Page 2', link: '/academics/page2' },
        { name: 'Page 3', link: '/academics/page3' },
      ]
    },
    { 
      name: 'NEWS', 
      link: '/news',
      dropdown: [
        { name: 'Page 1', link: '/news/page1' },
        { name: 'Page 2', link: '/news/page2' },
        { name: 'Page 3', link: '/news/page3' },
      ]
    },
    { name: 'KOA BULLETIN', link: '/bulletin' },
    { name: 'BLOG', link: '/blog' },
  ]

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/logo.webp" 
              alt="KOA Logo" 
              className="h-12 md:h-16"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-koa-yellow">📞</span>
              <span className="text-sm md:text-base">+91 9880765855</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-koa-yellow">✉️</span>
              <span className="text-sm md:text-base">drharishmurthysgkoa@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button className="px-3 py-1 md:px-4 md:py-2 text-sm md:text-base text-gray-600 hover:text-gray-800 transition-colors duration-200">LOGIN</button>
            <button className="px-3 py-1 md:px-4 md:py-2 text-sm md:text-base bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors duration-200">
              JOIN KOA
            </button>
          </div>
        </div>

        <nav className="py-4">
          <div className="hidden md:flex justify-center space-x-4 lg:space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.link}
                  className="text-sm lg:text-base text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.name}
                </Link>
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button 
            className="md:hidden w-full text-left"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Menu
          </button>

          {isOpen && (
            <div className="md:hidden mt-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  <Link to={item.link} className="block py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.link}
                          className="block py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}