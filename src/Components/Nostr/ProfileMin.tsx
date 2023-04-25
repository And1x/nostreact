import { useProfile } from "nostr-react";

export default function ProfileMin({ pubkey }: { pubkey: string }) {
  const { data: userData } = useProfile({
    pubkey,
  });

  return (
    // <div className="flex flex-col max-w-fit min-w-max text-emerald-50 text-xs  border-r-[1px] pr-2 border-emerald-600">
    <div className="flex flex-col w-28 min-w-[7rem] text-emerald-50 text-xs  border-r-[1px] pr-1 border-emerald-600">
      <img
        src={
          userData?.picture ? userData?.picture : "src/assets/img/ostrich.png"
        }
        alt="user picture"
        // todo profile sizing
        className="h-24 w-24 border-solid border-2 rounded-full self-center border-emerald-600"
      />
      <div className="min-w-0 text-center truncate">
        {userData?.name
          ? userData?.name
          : userData?.display_name
          ? userData?.display_name
          : userData?.username
          ? userData?.username
          : "noname"}
      </div>
    </div>
  );
}
