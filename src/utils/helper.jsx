export function TranslateTime(timeStr) {
  const times = timeStr.split("-");
  const year = times[0];
  const month = times[1];

  const day = times[2].split("T");

  return `${year}/${month}/${day[0]}`;
}
