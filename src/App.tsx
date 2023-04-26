import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RouteSwitch from "./RouteSwitch";
import { NostrProvider } from "nostr-react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import NostrSearch from "./pages/NostrSearch";
import ProfileFull from "./Components/Nostr/ProfileFull";
import NoteList from "./Components/Nostr/NoteList";

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
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gray-800">
          <Navbar />
          <h1 className="text-3xl text-center text-emerald-700 pt-2 font-bold underline p-5">
            NOSTR Resources and other stuff...
          </h1>
          <div className="flex justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/search" element={<NostrSearch />} />

              {/* test here: */}
              <Route
                path="/p/:pubkey"
                // loader={({ params }) => {
                //   console.log(params.pubkey);
                // }}
                element={<ProfileFull />}
              />
              <Route path="/n/:noteID" element={<NoteList />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </NostrProvider>
  );
}

export default App;

// function App() {
//   return (
//     <NostrProvider relayUrls={relayUrls} debug={true}>
//       <div className="flex flex-col min-h-screen bg-gray-800">
//         <BrowserRouter>
//           <Navbar />
//           <div className="flex justify-center">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/resources" element={<Resources />} />
//               <Route path="/search" element={<NostrSearch />} />

//               {/* test here: */}
//               <Route
//                 path="/p/:pubkey"
//                 // loader={({ params }) => {
//                 //   console.log(params.pubkey);
//                 // }}
//                 element={<ProfileFull />}
//               />
//               <Route path="/n/:noteID" element={<NoteList />} />
//             </Routes>
//           </div>
//         </BrowserRouter>

//         <h1 className="text-3xl text-center text-emerald-700 pt-2 font-bold underline p-5">
//           NOSTR Resources and other stuff...
//         </h1>
//         <Footer />
//       </div>
//     </NostrProvider>
//   );
// }
