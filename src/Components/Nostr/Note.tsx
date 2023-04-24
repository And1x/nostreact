import ProfileMin from "./ProfileMin";
import { Event } from "nostr-tools";

export default function Note({ event }: { event: Event }) {
  return (
    <>
      <div
        key={event.id}
        className="flex gap-2 h-auto max-w-[75vw] text-emerald-50 "
      >
        <ProfileMin pubkey={event.pubkey}></ProfileMin>

        <div>
          <div className="break-all">msg: {event.content}</div>
          <h3>Stats:</h3>
          <div>
            {event.tags.map((tag, i) => {
              return (
                <div>
                  {`${i}: `}
                  {tag}
                </div>
              );
            })}
          </div>

          {/* <div>EV tags:{event.tags[0]}</div> */}
          <div>EV kind: {event.kind}</div>
          <div>EV pub: {event.pubkey}</div>
          <div>---------------------</div>
        </div>
      </div>
    </>
  );
}
