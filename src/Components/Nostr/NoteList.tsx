import { useNostrEvents } from "nostr-react";
import ContentBox from "../ContentBox";
import Note from "./Note";
import { Link, useParams } from "react-router-dom";
import { toHex } from "../../utils/formatNIP19";
import { nip10, nip19 } from "nostr-tools";

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
        if (event.id === noteID) {
          let noteType = nip10.parse(event);
          let parentID;
          noteType.reply
            ? (parentID = noteType.reply.id)
            : noteType.root
            ? (parentID = noteType.root.id)
            : undefined;

          return (
            <>
              {parentID ? (
                <Link
                  to={`/n/${nip19.noteEncode(parentID)}`}
                  reloadDocument
                  className="text-white hover:text-orange-500"
                >
                  ↑ Go to parent note
                </Link>
              ) : (
                <></>
              )}

              <ContentBox borderColor="border-t-orange-400" padding="p-2 pb-0">
                <Note event={event} replies={events.length} />
              </ContentBox>
              <div
                className={`h-5 ${events.length > 0 ? "border-x" : null}`}
              ></div>
            </>
          );
        }
      })}

      {events.map((event) => {
        let parentID = parentEV[0]?.id;
        let noteType = nip10.parse(event);
        let replies = 0;

        // todo: add every note in an array for the replies instead of searching the events array on every note for replies
        events.forEach((e) => {
          if (nip10.parse(e).reply?.id === event.id) {
            replies++;
          }
        });

        // some notes have the root-Note as reply others not -
        if (
          (noteType.reply === undefined && noteType.root?.id === parentID) ||
          noteType.reply?.id === parentID
        ) {
          return (
            <ContentBox margin="mb-3" key={event.id} padding="p-2 pb-0">
              <Note event={event} replies={replies} />
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
