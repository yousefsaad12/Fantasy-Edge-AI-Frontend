import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return(
  <div className="min-h-screen bg-gray-100">
   
      <Navbar />
      <Hero />
    </div>
  );
}