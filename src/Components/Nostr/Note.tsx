import ProfileMin from "./ProfileMin";
import { Event, nip10 } from "nostr-tools";

type Probs = {
  event: Event;
};

export default function Note({ event }: Probs) {
  return (
    <>
      <div
        key={event.id}
        className="flex gap-2 h-auto max-w-[75vw] w-[42rem] font-normal text-emerald-50 "
      >
        <ProfileMin pubkey={event.pubkey}></ProfileMin>

        <div className="[overflow-wrap:anywhere]  border-l pl-4 border-emerald-600">
          {event.content}
        </div>
      </div>
    </>
  );
}
