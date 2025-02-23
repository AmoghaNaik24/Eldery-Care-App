import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Chat from "./pages/Chat";
import HealthTracking from "./pages/HealthTracking";
import Navbar from "./components/Navbar";


function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/health" element={<HealthTracking />} />
      </Routes>
    </Router>
  );
}
export default App;