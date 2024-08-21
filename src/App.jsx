import Navbar from "./components/Navbar";

export default function App() {
  return(
  <div className="min-h-screen bg-gray-100">
   
      <Navbar />

     
      <main className="p-4 md:p-8 lg:p-12">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-[#37003c]">
          Welcome to Fantasy Football AI
        </h1>
        {/* Your app's content goes here */}
      </main>
    </div>
  );
}