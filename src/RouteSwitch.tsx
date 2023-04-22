import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import NostrSearch from "./pages/NostrSearch";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/search" element={<NostrSearch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
