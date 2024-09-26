import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Solutions from './page/Solutions';
import Services from './page/Services';
import About from "./page/About";
import Contact from './page/Contact';
import Blog from './page/Blog';
import CaseStudy from "./page/CaseStudy";
import Footer from './components/Footer';


function App() {
  const location = useLocation();
  return (
    <div className="relative">
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case_study" element={<CaseStudy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App;