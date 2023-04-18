export default function Navbar() {
  return (
    <>
      <ul className="flex min-w-full justify-between bg-gray-700 shadow-2xl p-5 mb-7">
        <li className="font-bold text-slate-50">
          {/* todo: React-Router .../home .../resources */}
          <a href="#">Home</a>
        </li>
        <li className="font-bold text-slate-50">
          {/* todo: DropDown Navigation */}
          <a href="#">DropDown</a>
        </li>
      </ul>
    </>
  );
}
