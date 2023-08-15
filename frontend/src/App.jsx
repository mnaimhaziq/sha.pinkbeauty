import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./screens/Home.jsx";
import Layout from "./screens/Layout.jsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when location changes
  }, [location]);

  return (
    <div className="min-h-screen min-w-screen bg-[#FEE5F0] text-[#D60B64]">
   
   {/* <div className="absolute top-0 left-0 w-full h-full bg-overlay-image opacity-60 "></div> */}
   <div className="absolute top-0 left-0 w-full h-full bg-overlay-image bg-cover bg-no-repeat opacity-20 z-0"></div>
  
    <div className="fixed top-0 w-full z-50">
      <Navbar />
    </div>
    <div>
   
        <Routes key={location.pathname} location={location}>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Route>
        </Routes>
    </div>
  </div>  )
}

export default App
