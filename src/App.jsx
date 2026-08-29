import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analysis from "./pages/Analysis";
import Home from "./pages/Home";
import Screening from "./pages/Screening";
import Results from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/" element={<Home />} />
        <Route path="/screening" element={<Screening />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;