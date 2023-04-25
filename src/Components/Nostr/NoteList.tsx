import { useNostrEvents } from "nostr-react";
import ContentBox from "../ContentBox";
import Note from "./Note";

// todo: rethink to create Lists not only from noteIDs eg. #hashtags
export default function NoteList({ noteID }: { noteID: string }) {
  const parentEV = getEventsFiltered({ noteID }, true);
  const events = getEventsFiltered({ noteID }, false);

  return (
    <>
      {parentEV.map((event) => {
        return (
          <ContentBox>
            <Note event={event}></Note>
          </ContentBox>
        );
      })}

      {events.map((event) => {
        // todo: events should already be filtered -> this check is just to be safe
        // only child events with tag ["e"noteID] are included
        if (event.tags.find((el) => el.includes(noteID))) {
          return (
            <ContentBox>
              <Note event={event}></Note>
            </ContentBox>
          );
        }
      })}
    </>
  );
}

// note: Parents id = noteID all references have this noteID in the tags field
// todo: research better solution
function getEventsFiltered({ noteID }: { noteID: string }, isParent: boolean) {
  let filter;
  if (isParent) {
    filter = {
      ids: [noteID],
      kinds: [0, 1],
    };
  } else {
    filter = {
      kinds: [0, 1],
      "#e": [noteID],
    };
  }

  const { events } = useNostrEvents({
    filter: filter,
  });

  return events;
}
