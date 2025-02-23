import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/home-bg.jpg";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${background})`, filter: "blur(4px)" }}
      ></div>

      <div className="relative bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Welcome to Elderly Care App</h1>
        <p className="text-gray-600 text-lg mb-6">
          Stay connected, track your health, and revisit your memories.
        </p>

        <div className="flex space-x-4">
          <Link to="/chat" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-900">
            Open Chat
          </Link>
          <Link to="/health" className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-900">
            Health Tracking
          </Link>
          <Link to="/photos" className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-900">
            View Photos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
