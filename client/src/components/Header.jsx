import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png"
            alt="logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-xl font-bold">To Do App</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/todo"
              className="hover:text-blue-400 transition duration-300"
            >
              Add Task
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
