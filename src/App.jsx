import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return(
    <div className="min-h-screen w-full bg-gradient-to-tr from-[#37003c] to-[#da0043] overflow-x-hidden">
   
      <Navbar />
      <Hero />
    </div>
  );
}