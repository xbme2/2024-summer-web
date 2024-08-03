export function TranslateTime(timeStr) {
  const times = timeStr.split("-");
  const year = times[0];
  const month = times[1];

  const day = times[2].split("T");

  return `${year}/${month}/${day[0]}`;
}

export function CompareTime(a, b) {
  let date1 = new Date(a.created_at);
  let date2 = new Date(b.created_at);

  return date2.getTime() - date1.getTime(); //实现最新评论在前
}
