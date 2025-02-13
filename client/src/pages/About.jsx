function About() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        About This Application
      </h2>
      <p className="text-md text-gray-600 max-w-lg">
        This is a full-stack To-Do application built using the MERN stack
        (MongoDB, Express.js, React, Node.js). It helps users create, edit, and
        manage tasks efficiently.
      </p>
    </div>
  );
}

export default About;
