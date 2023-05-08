import { useProfile } from "nostr-react";
import { useParams } from "react-router-dom";
import { toHex } from "../../utils/formatNIP19";
import ContentBox from "../ContentBox";
import defaultAvatar from "/src/assets/img/ostrich.png";

export default function ProfileFull() {
  let params = useParams();
  if (!params.pubkey) {
    // todo: handle invalid pubkey
    return <></>;
  }

  let pubkey = toHex(params.pubkey, "npub");

  const { data: userData } = useProfile({
    pubkey,
  });

  let profileName = userData?.name
    ? userData.name
    : userData?.display_name
    ? userData.display_name
    : userData?.username
    ? userData.username
    : "";

  document.title = profileName;

  return (
    <ContentBox>
      <div className="flex h-auto max-w-[75vw] min-w-[42rem] font-normal text-emerald-50 ">
        <img
          src={userData?.picture ? userData?.picture : defaultAvatar}
          alt="user picture"
          className="h-32 w-32 border-solid border-2 rounded-full border-emerald-600"
        />
        <table>
          <tr className="even:break-all">
            <td className="text-emerald-400 pr-2">name:</td>
            <td>{profileName}</td>
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
    </ContentBox>
  );
}
