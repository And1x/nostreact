import { useProfile } from "nostr-react";
import { nip19 } from "nostr-tools";
import defaultAvatar from "/src/assets/img/ostrich.png";

export default function ProfileMin({ pubkey }: { pubkey: string }) {
  const { data: userData } = useProfile({
    pubkey,
  });

  return (
    <a
      href={`/p/${nip19.npubEncode(pubkey)}`}
      className="flex flex-col items-center w-24 min-w-[6rem]"
    >
      <img
        src={userData?.picture ? userData?.picture : defaultAvatar}
        alt="user picture"
        className="h-20 w-20 border-solid border-2 rounded-full self-center border-emerald-600"
      />

      <span className="text-emerald-50 pt-1 text-sm max-w-[5rem] truncate">
        {userData?.name
          ? userData?.name
          : userData?.display_name
          ? userData?.display_name
          : userData?.username
          ? userData?.username
          : "noname"}
      </span>
    </a>
  );
}
