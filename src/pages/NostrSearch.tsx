import React from "react";
import { useState } from "react";
import { nip19 } from "nostr-tools";
import Profile from "../Components/Nostr/ProfileFull";
import NoteList from "../Components/Nostr/NoteList";
import { useNavigate } from "react-router-dom";

export default function NostrSearch() {
  let query: string | null | undefined;

  const navigate = useNavigate();

  // const [searchJSX, setSearchJSX] = useState(<></>);

  function handleSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    query = formData.get("search")?.toString();

    // const result = searchResponse();

    // setSearchJSX(result ? result : <></>);
    // navigate(`/p/${query}`);

    parseQuery(query ? query : "");
  }

  function parseQuery(query: string) {
    // todo: better check if it's hex -> let decide if its note/profile etc.
    if (query.length > 1 && !query.startsWith("n")) {
      navigate(`/p/${query}`);
    }

    try {
      const decodeQuery = nip19.decode(query ? query : "");
      const decodedValues = Object.values(decodeQuery);

      if (decodedValues[0] === "npub") {
        navigate(`/p/${decodedValues[1]}`);
      } else if (decodedValues[0] === "note") {
        navigate(`/n/${decodedValues[1]}`);
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
  // TODO: route to Results don't integrate in Search
  // function searchResponse() {
  //   try {
  //     const decodeQuery = nip19.decode(query ? query : "");
  //     const decodedValues = Object.values(decodeQuery);

  //     if (decodedValues[0] === "npub") {
  //       return <Profile pubkey={decodedValues[1]} />;
  //     } else if (decodedValues[0] === "note") {
  //       // todo: additional paths -> Parents are handled diff. than Child Notes
  //       console.log("hereeee", decodedValues[1]);
  //       return <NoteList noteID={decodedValues[1]} />;
  //     }
  //   } catch (e: unknown) {
  //     if (e instanceof Error) {
  //       return <p className="text-red-500">Invalid query: {` ${e}`}</p>;
  //     } else {
  //       // todo: dont handle this error on site
  //       return <p className="text-red-500">event unknown: {` ${e}`}</p>;
  //     }
  //   }
  // }

  return (
    <div className="flex flex-col items-center justify-centergap-3">
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
      {/* {searchJSX.type !== React.Fragment ? (
        <div className="flex flex-col gap-2 min-w-[54rem] max-w-[54rem]">
          {searchJSX}
        </div>
      ) : (
        <></>
      )} */}
    </div>
  );
}
