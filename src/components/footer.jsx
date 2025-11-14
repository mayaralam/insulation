import { Link } from "react-router-dom";
export default function footer() {
  return (
    <>
      <footer className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-gray-800 text-white dark:bg-white dark:text-gray-900 font-bold text-xl px-2 py-1 rounded">
                TG
              </div>
              <h2 className="text-lg font-semibold">ThermalGuard</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Leading provider of professional thermal insulation solutions for
              residential, commercial, and industrial properties.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-md font-semibold mb-2">Services</h3>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li className="cursor-pointer hover:text-black dark:hover:text-white">Residential Insulation</li>
              <li className="cursor-pointer hover:text-black dark:hover:text-white">Commercial Insulation</li>
              <li className="cursor-pointer hover:text-black dark:hover:text-white">Industrial Solutions</li>
              <li className="cursor-pointer hover:text-black dark:hover:text-white">Air Sealing</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-md font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li className="cursor-pointer hover:text-black dark:hover:text-white">
                <Link to="../about">About Us</Link>
              </li>
              <li className="cursor-pointer hover:text-black dark:hover:text-white">Our Team</li>
              <li className="cursor-pointer hover:text-black dark:hover:text-white">Careers</li>
              <li className="cursor-pointer hover:text-black dark:hover:text-white">
                <Link to="../contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-md font-semibold mb-2">Connect</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Follow us for tips, updates, and special offers.
            </p>
            <div className="flex gap-3">
              <i className="fab fa-facebook-f text-gray-800 dark:text-white hover:text-blue-500 cursor-pointer"></i>
              <i className="fab fa-twitter text-gray-800 dark:text-white hover:text-blue-400 cursor-pointer"></i>
              <i className="fab fa-instagram text-gray-800 dark:text-white hover:text-pink-500 cursor-pointer"></i>
              <i className="fab fa-linkedin-in text-gray-800 dark:text-white hover:text-blue-700 cursor-pointer"></i>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">
          © 2025 ThermalGuard. All rights reserved.
        </div>
      </footer>
    </>
  );
}
