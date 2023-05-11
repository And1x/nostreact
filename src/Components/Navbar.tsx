import { Link } from "react-router-dom";
import NostrSearch from "./Nostr/Search";

export default function Navbar() {
  return (
    <>
      <ul className="flex h-16 min-w-full justify-between bg-gray-700 shadow-2xl p-5 ">
        <div className="flex gap-4">
          <li className="font-bold text-slate-50 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold text-slate-50 hover:underline">
            <Link to="/resources">Resources</Link>
          </li>
        </div>
        {/* <li className="font-bold text-slate-50"> */}
        {/* todo: DropDown Navigation */}
        {/* <a href="#">DropDown</a> */}
        {/* </li> */}
        <div>
          <NostrSearch />
        </div>
      </ul>
    </>
  );
}
