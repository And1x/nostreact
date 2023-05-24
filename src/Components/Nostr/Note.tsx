import ProfileMin from "./ProfileMin";
import { Event } from "nostr-tools";
import { formatUnixTime } from "../../utils/formatTime";
import InfoModal from "../InfoModal";
import { useState } from "react";
import { nip19 } from "nostr-tools";
import { Link } from "react-router-dom";

type Probs = {
  event: Event;
  replies: number;
};

export default function Note({ event, replies }: Probs) {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        key={event.id}
        className="flex gap-2 h-auto max-w-[75vw] w-[42rem] font-normal text-emerald-50 "
      >
        <ProfileMin pubkey={event.pubkey}></ProfileMin>

        <div className="flex flex-col gap-2 w-full border-l pl-4 border-emerald-600">
          <div className="self-end text-sm font-normal">
            {formatUnixTime(event.created_at)}
          </div>

          <div className="[overflow-wrap:anywhere]">{event.content}</div>
        </div>
      </div>

      <InfoModal onClose={onClose} showModal={showModal}>
        <div>
          <h2 className="border-b border-orange-500 text-center text-black mb-2">
            {"JSON view:"}
          </h2>
          <pre className="text-black break-all whitespace-break-spaces">
            {JSON.stringify(event, undefined, 4)}
          </pre>
        </div>
      </InfoModal>

      <div className="flex justify-between border-t border-emerald-600 mt-2 pt-2">
        <Link
          to={`/n/${nip19.noteEncode(event.id)}`}
          reloadDocument
          className="flex text-white font-normal gap-1 fill-current hover:text-orange-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="w-6 h-6"
          >
            <path d="M880-80 720-240H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v740ZM140-300v-520 520Zm606 0 74 80v-600H140v520h606Z" />
          </svg>

          {replies}
        </Link>

        <button onClick={() => setShowModal(true)}>JSON</button>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 fill-white hover:fill-orange-500"
          xlinkTitle="more"
        >
          <path
            d="M8,12a2,2,0,1,1-2-2A2,2,0,0,1,8,12Zm10-2a2,2,0,1,0,2,2A2,2,0,0,0,18,10Zm-6,0a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"
            id="Horizontal"
          ></path>
        </svg>
      </div>
    </>
  );
}
