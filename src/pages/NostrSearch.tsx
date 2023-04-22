import React from "react";
import { useState } from "react";
import { NostrProvider } from "nostr-react";
import { nip19 } from "nostr-tools";
import Profile from "../Components/Nostr/Profile";
import Note from "../Components/Nostr/Note";
import ContentBox from "../Components/ContentBox";

const relayUrls = [
  "wss://nostr.wine",
  "wss://nostr-pub.wellorder.net",
  "wss://relay.nostr.ch",
  "wss://nostr.mom",
  "wss://relay.damus.io",
  "wss://nos.lol",
  "wss://relay.snort.social",
];

export default function NostrSearch() {
  let query: string | null | undefined;
  const [searchJSX, setSearchJSX] = useState(<></>);

  function handleSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    query = formData.get("search")?.toString();

    const result = searchResponse();

    setSearchJSX(result ? result : <></>);
  }

  function searchResponse() {
    try {
      const decodeQuery = nip19.decode(query ? query : "");
      const decodedValues = Object.values(decodeQuery);

      if (decodedValues[0] === "npub") {
        return <Profile pubkey={decodedValues[1]} />;
      } else if (decodedValues[0] === "note") {
        return <Note noteID={decodedValues[1]} />;
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        return <p className="text-red-500">Invalid query: {` ${e}`}</p>;
      } else {
        // todo: dont handle this error on site
        return <p className="text-red-500">event unknown: {` ${e}`}</p>;
      }
    }
  }

  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
      <div className="flex flex-col items-center justify-center mb-12 gap-3">
        {/* SEARCH PROMPT */}
        <form method="post" onSubmit={handleSubmit} className="flex gap-1">
          <input
            name="search"
            placeholder="npub, note, hex..."
            className="outline-none border-emerald-600 border-solid rounded-md w-96"
          ></input>
          <button type="reset" className="text-red-600">
            X
          </button>
          <button type="submit">🔎</button>
        </form>

        {/* SEARCH Result */}
        {searchJSX.type !== React.Fragment ? (
          <ContentBox>{searchJSX}</ContentBox>
        ) : (
          <></>
        )}
      </div>
    </NostrProvider>
  );
}
