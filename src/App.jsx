import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Recommendation from "./pages/Recommendation";
import Footer from "./components/Footer";


export default function App() {
  return(
    <Router className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-gray-50 to-slate-50">
   
        <Navbar/>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/recommendation" element={<Recommendation />} />
      </Routes>
      <Footer/>
    </Router>
  );
}