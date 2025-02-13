import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold">To do App</h2>
            <p className="text-gray-400 text-sm mt-2">
              This is a simple to-do application that allows users to add,
              update, and delete tasks. Built with React and Axios for seamless
              CRUD operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold">Quick Links</h2>
            <ul className="text-gray-400 text-sm mt-2">
              <li>
                <a href="/" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-bold">Follow Us</h2>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-gray-500 text-sm text-center border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} To Do App. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
