import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Insights from "./pages/Insights";
import Dashboard from "./pages/Dashboard";
import Support from "./pages/Support";
import Health from "./pages/Health";
import dataImg from "./assets/images/dataImg.png"

function App() {

  return (
  <BrowserRouter>

    <Navbar />

    <div className="bigBox">

      <Routes>
      <Route path="/executive" element={<Dashboard />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/support" element={<Support />} />
        <Route path="/health" element={<Health />} />
      </Routes>

    </div>

    <div className="littleBox">

        <h1 className= "dashboardInfo">Dashboard Information</h1>

        <div className= "infoBox">

          <ul>
              <li>Generated fake data using Excel to mimic workplace</li>
              <li>Built dashboards using Power BI</li>
              <li>Data cleaned with Power Query</li>
              <li>Created DAX measures to analyze data, create dashboards and efficently compute calculations</li>
              <li>React frontend developed to make presentable to users</li>
              <li>Integrated AI generatd summary on dashboards and reports</li>
          </ul>

        </div>

        <img className="dataImg" src= {dataImg} />

    </div>

  </BrowserRouter>
  );
}

export default App
