import { useNostrEvents } from "nostr-react";

export default function Note({ noteID }: { noteID: string }) {
  const { events } = useNostrEvents({
    filter: {
      ids: [noteID],
      kinds: [0, 1],

      // todo: handle nevent too?
      //   "#e": [noteID],
    },
  });

  return (
    <>
      {events.map((event) => (
        <p key={event.id} className="text-emerald-50">
          {event.pubkey} <br />
          posted: {event.content}
          <br />
          ev-id: {event.id} <br />
          ev-pubkey: {event.pubkey}
          <br />
          ev-kind: {event.kind}
          <br />
          ev-tags: {event.tags[0]}
          <br />
          <br />
          <br />
        </p>
      ))}
    </>
  );
}
