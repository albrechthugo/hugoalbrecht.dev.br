export default function transformDate(date: string): string {
  const toDate = new Date(date);

  let day = '';
  let month = '';
  let year = toDate.getFullYear();

  day = toDate.getDate() < 10 ? `0${toDate.getDate()}` : `${toDate.getDate()}`;
  month =
    toDate.getMonth() < 10
      ? `0${toDate.getMonth() + 1}`
      : `${toDate.getMonth() + 1}`;

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}
