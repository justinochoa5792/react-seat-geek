import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Events from "./components/Events";
import NavBars from "./components/NavBars";
function App() {
  return (
    <div className="App">
      <NavBars />
      <h1 className="py-3">Find tickets via SeatGeek</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
