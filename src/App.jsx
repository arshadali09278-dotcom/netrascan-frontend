import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Screening from "./pages/Screening";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/screening" element={<Screening />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;