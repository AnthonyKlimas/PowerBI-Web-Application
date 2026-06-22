import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Insights from "./pages/Insights";
import Dashboard from "./pages/Dashboard";
import Support from "./pages/Support";
import Health from "./pages/Health";
import dataImg from "./assets/images/dataImg.png";
import background from "./assets/images/background.png";


function AppContent()
{

    const location = useLocation();

    return (
        <>

    <Navbar />

    <img className= "backgroundImage" src={background}/>

    <div className="pageContainer">

      <AnimatePresence mode= "wait">

      <Routes
        location={location}
        key={location.pathname}
      >
      <Route path="/executive" element={<Dashboard />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/support" element={<Support />} />
        <Route path="/health" element={<Health />} />
      </Routes>

      </AnimatePresence>

    </div>
        
        
        </>
    )

}

export default AppContent