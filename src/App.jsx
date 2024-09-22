import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Solutions from './page/Solutions';
import Services from './page/Services';
import Footer from './components/Footer';


function App() {
  const location = useLocation();
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App;