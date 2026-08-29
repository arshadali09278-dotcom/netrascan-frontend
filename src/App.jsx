import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ScreeningProvider } from "./context/ScreeningContext";

import Home from "./pages/Home";
import Screening from "./pages/Screening";
import Analysis from "./pages/Analysis";
import Results from "./pages/Results";
import Report from "./pages/Report";

function App() {
return ( <ScreeningProvider> <BrowserRouter> <Routes>
<Route path="/" element={<Home />} />
<Route path="/screening" element={<Screening />} />
<Route path="/analysis" element={<Analysis />} />
<Route path="/results" element={<Results />} />
<Route path="/report" element={<Report />} /> </Routes> </BrowserRouter> </ScreeningProvider>
);
}

export default App;
