import { useNostrEvents } from "nostr-react";
import ContentBox from "../ContentBox";
import Note from "./Note";
import { useParams } from "react-router-dom";
import { toHex } from "../../utils/formatNIP19";

// todo: rethink to create Lists not only from noteIDs eg. #hashtags
export default function NoteList() {
  document.title = "notes";
  let params = useParams();
  // todo: handle invalid noteID
  if (!params.noteID) {
    return <></>;
  }

  let noteID = toHex(params.noteID, "note");

  const parentEV = getEventsFiltered({ noteID }, true);
  const events = getEventsFiltered({ noteID }, false);

  return (
    <div className="flex flex-col items-center justify-center ">
      {parentEV.map((event) => {
        return (
          <>
            <ContentBox borderColor="border-t-orange-400">
              <Note event={event} />
            </ContentBox>
            <div className="h-5 border-x "></div>
          </>
        );
      })}

      {events.map((event) => {
        // todo: events should already be filtered -> this check is just to be safe
        // only child events with tag ["e"noteID] are included
        if (event.tags.find((el) => el.includes(noteID))) {
          return (
            <ContentBox margin="mb-3">
              <Note event={event} />
            </ContentBox>
          );
        }
      })}
    </div>
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
