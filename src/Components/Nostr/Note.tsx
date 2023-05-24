import ProfileMin from "./ProfileMin";
import { Event, nip10 } from "nostr-tools";
import { formatUnixTime } from "../../utils/formatTime";

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

        <div className="flex flex-col gap-2 w-full border-l pl-4 border-emerald-600">
          <div className="self-end text-sm font-normal">
            {formatUnixTime(event.created_at)}
          </div>

          <div className="[overflow-wrap:anywhere]">{event.content}</div>
        </div>
      </div>
    </>
  );
}
