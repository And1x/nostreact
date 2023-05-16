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
    <div className="flex flex-col items-center justify-center">
      <ContentBox>
        <div className="flex max-w-[75vw] min-w-[42rem] font-normal text-emerald-50 gap-2">
          <img
            src={userData?.picture ? userData?.picture : defaultAvatar}
            alt="user picture"
            className="h-32 w-32 border-solid border-2 rounded-full border-emerald-600"
          />
          <div className="min-w-0">
            <div className="flex">
              <h4 className="w-20 text-emerald-400">Name:</h4>
              <p className="truncate w-full">{profileName}</p>
            </div>
            <div className="flex">
              <h4 className="w-20 text-emerald-400">Npub:</h4>
              <p className="w-full">{userData?.npub}</p>
            </div>
            <div className="flex">
              <h4 className="w-20 text-emerald-400">About:</h4>
              <p className="w-full">{userData?.about}</p>
            </div>
            <div className="flex">
              <h4 className="w-20 text-emerald-400">LN Addr:</h4>
              <p className="w-full">{userData?.lud16}</p>
            </div>
          </div>
        </div>
      </ContentBox>
    </div>
  );
}
