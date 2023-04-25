import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import NostrSearch from "./pages/NostrSearch";
import ProfileFull from "./Components/Nostr/ProfileFull";
import NoteList from "./Components/Nostr/NoteList";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default RouteSwitch;
