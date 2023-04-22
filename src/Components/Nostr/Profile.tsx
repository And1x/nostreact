import { useProfile } from "nostr-react";

export default function Profile({ pubkey }: { pubkey: string }) {
  const { data: userData } = useProfile({
    pubkey,
  });

  return (
    <div className="flex justify-center gap-7 text-emerald-50 font-bold ">
      <img
        src={userData?.picture}
        alt="user picture"
        className="h-32 w-32 border-solid border-2 rounded-full border-emerald-600"
      />
      <table>
        <tbody>
          <tr>
            <td className="text-emerald-400 pr-2">name:</td>
            <td>{userData?.name}</td>
          </tr>
          <tr>
            <td className="text-emerald-400 pr-2">npub:</td>
            <td>{userData?.npub}</td>
          </tr>
          <tr>
            <td className="text-emerald-400 pr-2">about:</td>
            <td>{userData?.about}</td>
          </tr>
          <tr>
            <td className="text-emerald-400 pr-2">lud16:</td>
            <td>{userData?.lud16}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
