import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { NostrProvider } from "nostr-react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import ProfileFull from "./Components/Nostr/ProfileFull";
import NoteList from "./Components/Nostr/NoteList";
import NotFound from "./Components/NotFound";
import ComingSoon from "./Components/ComingSoon";

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
      <div className="flex flex-col min-h-screen min-w-fit gap-8 bg-gray-800">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/p/:pubkey" element={<ProfileFull />} />
          <Route path="/n/:noteID" element={<NoteList />} />
          <Route path="/tbd/:query" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </NostrProvider>
  );
}

export default App;
