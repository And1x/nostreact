import ProfileMin from "./ProfileMin";
import { Event } from "nostr-tools";
import { formatUnixTime } from "../../utils/formatTime";
import InfoModal from "../InfoModal";
import { useState } from "react";
import { nip19 } from "nostr-tools";
import { Link } from "react-router-dom";
import { ReactComponent as RepliesIcon } from "/src/assets/icons/replies.svg";
import { ReactComponent as MoreIcon } from "/src/assets/icons/more.svg";

type Probs = {
  event: Event;
  replies: number;
};

export default function Note({ event, replies }: Probs) {
  const [showModal, setShowModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const noteId = nip19.noteEncode(event.id);

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

      <div className="flex justify-between border-t border-emerald-600 mt-2 pt-[2px]">
        <Link
          to={`/n/${noteId}`}
          reloadDocument
          className="flex items-center text-white font-normal gap-1 fill-current hover:text-orange-500"
        >
          <RepliesIcon className="w-4 h-4" />
          {replies}
        </Link>

        <div onClick={() => setShowMore(!showMore)} className="relative">
          <MoreIcon className="w-6 h-6 fill-white hover:fill-orange-500 hover:cursor-pointer" />
          <div
            className={`${
              showMore ? "visible" : "hidden"
            } absolute w-24 z-10 bg-gray-200 rounded-lg shadow-lg text-black text-sm  font-normal p-1`}
          >
            <ul>
              <li className="hover:text-orange-500 mb-1">
                <button onClick={() => setShowModal(true)}>JSON</button>
              </li>
              <li className="hover:text-orange-500 mb-1">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(noteId);
                  }}
                >
                  Copy Note ID
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
