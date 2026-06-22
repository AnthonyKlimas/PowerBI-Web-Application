import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Insights from "./pages/Insights";
import Dashboard from "./pages/Dashboard";
import Support from "./pages/Support";
import Health from "./pages/Health";
import dataImg from "./assets/images/dataImg.png";
import background from "./assets/images/background.png";

import { useState, useEffect} from "react";

function App() {

  return (
  <BrowserRouter>

    <Navbar />

    <img className= "backgroundImage" src={background}/>

    <div className="pageContainer">

      <Routes>
      <Route path="/executive" element={<Dashboard />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/support" element={<Support />} />
        <Route path="/health" element={<Health />} />
      </Routes>

    </div>

  </BrowserRouter>
  );
}

export default App
