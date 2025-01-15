export default function Footer() {
    return (
      <footer className="bg-gray-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Karnataka Orthopaedic Association</h3>
              <p className="text-sm">This community has been established for the Karnataka Orthopaedic Association Members.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Association</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="hover:text-gray-300">About Us</a>
                </li>
                <li>
                  <a href="/academics" className="hover:text-gray-300">Academics</a>
                </li>
                <li>
                  <a href="/bulletin" className="hover:text-gray-300">KOA Bulletin</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/contact" className="hover:text-gray-300">Contact Us</a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/groups/2952203365056169/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCJgvDfSVZ09miYAEmUIzfxQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Member Stats</h3>
              <p>Life Members: 1955+</p>
              <p>Non Members: 25+</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>© 2024 Karnataka Orthopaedic Association. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  