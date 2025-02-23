import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Elderly Care App</h1>

        {/* Mobile Menu Button */}
        <button 
          className="text-white md:hidden block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/chat" className="text-white hover:text-gray-300">Chat</Link>
          <Link to="/health" className="text-white hover:text-gray-300">Health</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 p-4 flex flex-col space-y-4">
          <Link to="/" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/chat" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Chat</Link>
          <Link to="/health" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Health</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
