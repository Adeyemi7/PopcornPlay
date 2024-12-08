/* eslint-disable react/no-unescaped-entities */


import { FaExclamationTriangle } from "react-icons/fa"; // Importing the golden icon

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <FaExclamationTriangle className="fill-[#dcce37] text-6xl md:text-8xl mb-4" />
      
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        404 - Page Not Found
      </h1>

      
      
      <p className="mt-4 text-lg md:text-xl text-center max-w-md px-4">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      
      <button
        className="mt-8 px-10 py-4 bg-gold text-white font-semibold rounded-lg shadow-xl hover:bg-yellow-500 transition duration-300"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
