import githubIcon from "/src/assets/img/GitHub-Mark-32px.png";

export default function Footer() {
  return (
    <div className="flex justify-center items-center h-11 bg-emerald-800 mt-auto">
      <img
        src={githubIcon}
        alt="Github-Logo"
        className="object-contain h-6 w-auto mr-1"
      />
      <a href="https://github.com/And1x/nostreact">Github</a>
    </div>
  );
}
