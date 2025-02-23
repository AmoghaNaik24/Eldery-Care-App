import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
      <Link to="/">Home</Link> | 
      <Link to="/about"> About</Link> | 
      <Link to="/chat"> Chat</Link> | 
      <Link to="/health"> Health</Link>
    </nav>
  );
};

export default Navbar;
