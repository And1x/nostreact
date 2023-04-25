import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RouteSwitch from "./RouteSwitch";
import { NostrProvider } from "nostr-react";
const relayUrls = [
  "wss://nostr.wine",
  "wss://nostr-pub.wellorder.net",
  "wss://relay.nostr.ch",
  "wss://nostr.mom",
  "wss://relay.damus.io",
  "wss://nos.lol",
  "wss://relay.snort.social",
];

function App() {
  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
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
    </NostrProvider>
  );
}

export default App;
