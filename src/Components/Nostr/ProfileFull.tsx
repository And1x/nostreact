import { useProfile } from "nostr-react";

export default function ProfileFull({ pubkey }: { pubkey: string }) {
  const { data: userData } = useProfile({
    pubkey,
  });

  return (
    <div className="flex gap-2 h-auto w-[75vw]  text-emerald-50 font-bold ">
      <img
        src={
          userData?.picture ? userData?.picture : "src/assets/img/ostrich.png"
        }
        alt="user picture"
        className="h-32 w-32 border-solid border-2 rounded-full border-emerald-600"
      />
      <table>
        <tr className="even:break-all">
          <td className="text-emerald-400 pr-2">name:</td>
          <td>
            {/* todo: display not all in a row */}
            {userData?.name} {userData?.display_name} {userData?.username}
          </td>
        </tr>
        <tr className="even:break-all">
          <td className="text-emerald-400 pr-2">npub:</td>
          <td> {userData?.npub}</td>
        </tr>
        <tr className="even:break-all">
          <td className="text-emerald-400 pr-2">about:</td>
          <td>{userData?.about}</td>
        </tr>
        <tr className="even:break-all">
          <td className="text-emerald-400 pr-2">lud16:</td>
          <td>{userData?.lud16}</td>
        </tr>
      </table>
    </div>
  );
}
