import NostrSearch from "../pages/NostrSearch";

export default function Navbar() {
  return (
    <>
      <ul className="flex h-16 min-w-full justify-between bg-gray-700 shadow-2xl p-5 ">
        <div className="flex gap-4">
          <li className="font-bold text-slate-50 hover:underline">
            <a href="/">Home</a>
          </li>
          <li className="font-bold text-slate-50 hover:underline">
            <a href="/resources">Resources</a>
          </li>
          <li className="font-bold text-slate-50 hover:underline">
            <a href="/search">Search Nostr</a>
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
