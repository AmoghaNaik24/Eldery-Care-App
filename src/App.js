import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import HealthTracking from "./pages/HealthTracking";
import PhotosPage from "./pages/PhotosPage"; // Import Photos Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/health" element={<HealthTracking />} />
        <Route path="/photos" element={<PhotosPage />} /> {/* New Photos Route */}
      </Routes>
    </Router>
  );
}

export default App;
