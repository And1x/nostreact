import { useNostrEvents } from "nostr-react";
import Note from "./Note";

// todo: rethink to create Lists not only from noteIDs eg. #hashtags
export default function NoteList({ noteID }: { noteID: string }) {
  const { events } = useNostrEvents({
    filter: {
      // ids: [noteID],
      kinds: [0, 1],
      "#e": [noteID],
    },
  });

  return (
    <>
      {events.map((event) => {
        // todo: events should already be filtered -> this check is just to be safe
        // only child events with tag ["e"noteID] are included
        if (event.tags.find((el) => el.includes(noteID))) {
          return <Note event={event}></Note>;
        }
      })}
    </>
  );
}
