import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to To-Do Application
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Organize your tasks efficiently with our intuitive To-Do App. Start
        managing your tasks today!
      </p>
      <Link
        to="/todo"
        className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        Get Started!
      </Link>
    </div>
  );
}

export default Home;
