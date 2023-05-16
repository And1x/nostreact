import ProfileMin from "../Components/Nostr/ProfileMin";
import ostrichGang from "/src/assets/img/ostrich-gang.png";

export default function Home() {
  return (
    <>
      {/* <div className="flex justify-center items-center"> */}
      <div className="flex">
        <div className="halsjfsljfsl">
          <div className="max-w-[29rem]">
            <h1 className="text-3xl text-center text-emerald-700 pt-2 font-bold underline p-5">
              What is Nostr?
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
            className="opacity-10 max-h-[29rem] mx-auto"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="text-white text-center">Explore:</h4>
          <ProfileMin pubkey="82341f882b6eabcd2ba7f1ef90aad961cf074af15b9ef44a09f9d2a8fbfbe6a2" />
          <ProfileMin pubkey="3bf0c63fcb93463407af97a5e5ee64fa883d107ef9e558472c4eb9aaaefa459d" />
          <ProfileMin pubkey="84dee6e676e5bb67b4ad4e042cf70cbd8681155db535942fcc6a0533858a7240" />
          <ProfileMin pubkey="32e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245" />
          <ProfileMin pubkey="fe2dfd2319f99f35c535f47e3b9902f916ece4c3d09f7be1bc39aad0b105da3a" />
        </div>
      </div>
    </>
  );
}
