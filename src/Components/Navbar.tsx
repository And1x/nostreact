export default function Navbar() {
  return (
    <>
      <ul className="flex min-w-full justify-between bg-gray-700 shadow-2xl p-5 ">
        <div className="flex gap-2">
          <li className="font-bold text-slate-50 hover:underline">
            <a href="/">Home</a>
          </li>
          <li className="font-bold text-slate-50 hover:underline">
            <a href="/resources">Resources</a>
          </li>
          <li className="font-bold text-slate-50 hover:underline">
            <a href="/notes">Notes</a>
          </li>
        </div>
        <li className="font-bold text-slate-50">
          {/* todo: DropDown Navigation */}
          <a href="#">DropDown</a>
        </li>
      </ul>
    </>
  );
}
