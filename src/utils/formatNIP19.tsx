import { nip19 } from "nostr-tools";

export function toHex(s: string, prefix: string) {
  let result = s.startsWith(prefix)
    ? Object.values(nip19.decode(s))[1]
    : // todo: check if valid hex string instead len > 1
    s.length > 1
    ? s
    : // todo: don't use empty string incase it's invalid HEX
      "";

  return result;
}
