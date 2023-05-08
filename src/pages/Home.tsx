import ostrichGang from "/src/assets/img/ostrich-gang.png";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="min-w-[26rem]">
          <h1 className="text-3xl text-center text-emerald-700 pt-2 font-bold underline p-5">
            NOSTR ?
          </h1>
          <p className="text-white text-xl p-5 italic">
            "The simplest open protocol that is able to create a
            censorship-resistant global "social" network once and for all. It
            doesn't rely on any trusted central server, hence it is resilient;
            it is based on cryptographic keys and signatures, so it is
            tamperproof; it does not rely on P2P techniques, and therefore it
            works."{" "}
            <div>
              <a
                href="https://github.com/nostr-protocol/nostr"
                className="text-sm non-italic text-slate-50 mt-3 hover:underline"
              >
                🔗 nostr - Notes and Other Stuff Transmitted by Relays
              </a>
            </div>
          </p>
        </div>
        <img
          src={ostrichGang}
          alt="ostrich gang background"
          className="opacity-10 "
        />
      </div>
    </>
  );
}
