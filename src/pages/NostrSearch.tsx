import { nip19 } from "nostr-tools";
import { useNavigate } from "react-router-dom";

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
    if (query.length > 1 && !query.startsWith("n")) {
      navigate(`/p/${query}`);
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
      <form method="post" onSubmit={handleSubmit} className="flex gap-1">
        <input
          name="search"
          placeholder="npub, note, hex..."
          className="outline-none focus:border-2 focus:border-orange-400 border-2 border-white border-solid rounded-md w-64"
        ></input>
        <button type="reset" className="text-red-600">
          X
        </button>
        <button type="submit">🔎</button>
      </form>
    </div>
  );
}
