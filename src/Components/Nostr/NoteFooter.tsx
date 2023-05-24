import { Link } from "react-router-dom";
import { nip19 } from "nostr-tools";

type Probs = {
  eventID: string;
  replies: number;
};

export default function NoteFooter({ eventID, replies }: Probs) {
  return (
    <div className="flex justify-between border-t border-emerald-600 mt-2 pt-2">
      <Link
        to={`/n/${nip19.noteEncode(eventID)}`}
        reloadDocument
        className="flex text-white font-normal gap-1 fill-current hover:text-orange-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className=" w-6 h-6"
        >
          <path d="M880-80 720-240H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v740ZM140-300v-520 520Zm606 0 74 80v-600H140v520h606Z" />
        </svg>
        {replies}
      </Link>
    </div>
  );
}
