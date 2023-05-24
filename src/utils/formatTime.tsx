// helper function to format time to display on notes
const formatUnixTime = (eventTime: number) => {
  const date = new Date();
  const now = Math.floor(date.getTime() / 1000);

  const diff = now - eventTime;
  console.log("now: ", now);
  console.log("evT: ", eventTime);
  console.log(diff);

  let result;

  if (diff < 60) {
    result = `${diff} seconds ago`;
  } else if (diff < 3600) {
    result = `${Math.floor(diff / 60)} minutes ago`;
  } else if (diff < 86400) {
    result = `${Math.floor(diff / 3600)} hours ago`;
  } else {
    result = new Date(eventTime * 1000).toLocaleDateString("en-US");
  }
  return result;
};

export { formatUnixTime };
