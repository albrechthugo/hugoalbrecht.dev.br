export default function transformDate(date: string): string {
  const toDate = new Date(date);

  if (toDate.getMonth() < 12) {
    toDate.setMonth(toDate.getMonth() + 1);
  }

  const formattedDate = `${toDate.getDate()}/${toDate.getMonth()}/${toDate.getFullYear()}`;
  return formattedDate;
}
