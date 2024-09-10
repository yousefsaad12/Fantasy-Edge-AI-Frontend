import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Review from "./components/Review";

export default function App() {
  return(
    <div className="min-h-screen w-full overflow-x-hidden ">
   
      <Navbar />
      <Hero />
      <Review/>
     
    </div>
  );
}