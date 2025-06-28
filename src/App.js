import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import SectorCharting from "./components/SectorCharting";
import SectorTracker from "./components/SectorTracker";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/sectortracker" element={<SectorTracker />} />
        <Route path="/sectorcharting" element={<SectorCharting />} />
      </Routes>
    </div>
  );
}

export default App;
