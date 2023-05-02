import ostrichGang from "/src/assets/img/ostrich-gang.png";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center">
        <img
          src={ostrichGang}
          alt="ostrich gang background"
          className="opacity-20 "
        />
      </div>
    </>
  );
}
