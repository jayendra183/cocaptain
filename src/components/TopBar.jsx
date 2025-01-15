export default function TopBar() {
    return (
      <div className="w-full bg-koa-yellow py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 sm:space-x-6 mb-2 sm:mb-0">
            <a href="#" className="text-black hover:text-gray-700 text-sm md:text-base transition-colors duration-200">EVENTS</a>
            <a href="#" className="text-black hover:text-gray-700 text-sm md:text-base transition-colors duration-200">JOBS</a>
            <a href="#" className="text-black hover:text-gray-700 text-sm md:text-base transition-colors duration-200">CONTACT US</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-gray-700 transition-colors duration-200">
              <span className="sr-only">Facebook</span>
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-black hover:text-gray-700 transition-colors duration-200">
              <span className="sr-only">YouTube</span>
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    )
  }
  
  