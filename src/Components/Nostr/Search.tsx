import { nip19 } from "nostr-tools";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CloseIcon } from "/src/assets/icons/close.svg";

export default function NostrSearch() {
  let query: string | null | undefined;

  const navigate = useNavigate();

  function handleSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    query = formData.get("search")?.toString();

    parseQuery(query ? query : "");
  }

  function parseQuery(query: string) {
    // todo: better check if it's hex -> let user decide if its note/profile etc. (radio-box)
    const HEXregex = /[0-9A-Fa-f]{6}/g;
    if (query.length === 64 && query.match(HEXregex)) {
      navigate(`/p/${query}`);
      // todo: use conditions to check against more event types
    } else if (
      query.length < 63 ||
      !query.startsWith("npub") ||
      !query.startsWith("note")
    ) {
      // todo: handle text search of notes
      let str = "Search notes by text";
      navigate(`/tbd/${str}`);
    }

    try {
      const decodeQuery = nip19.decode(query ? query : "");
      const decodedValues = Object.values(decodeQuery);

      if (decodedValues[0] === "npub") {
        navigate(`/p/${query}`);
        // navigate(`/p/${decodedValues[1]}`);
      } else if (decodedValues[0] === "note") {
        // navigate(`/n/${decodedValues[1]}`);
        navigate(`/n/${query}`);
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        // todo: show error page
        console.log("query error in NostrSearch", e);
      } else {
        // todo: show error page
        console.log("query error in NostrSearch", e);
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <form method="post" onSubmit={handleSubmit} className="group flex gap-1">
        <div className="relative">
          <span className="flex absolute inset-y-0 left-0 pl-2 pr-1 border-r border-slate-600">
            <button type="submit">🔎</button>
          </span>
        </div>
        <input
          name="search"
          placeholder="npub, note, hex..."
          className="pl-8 outline-none focus:border-2 focus:border-orange-400 border-2 border-white border-solid rounded-md w-64"
        ></input>
        <button type="reset" className="invisible group-focus-within:visible">
          <CloseIcon className="w-6 h-6 fill-red-500" />
        </button>
      </form>
    </div>
  );
}
