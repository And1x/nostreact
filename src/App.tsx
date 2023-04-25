import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RouteSwitch from "./RouteSwitch";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Navbar />

      <h1 className="text-3xl text-center text-emerald-700 pt-2 font-bold underline p-5">
        NOSTR Resources and other stuff...
      </h1>
      <div className="flex justify-center">
        <RouteSwitch />
      </div>
      <Footer />
    </div>
  );
}

export default App;
