import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./page/Home";


function App() {
  const location = useLocation();
  return (
    <div className="relative overflow-hidden">
      <Navbar/>
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
    </div>
  )
}

export default App;