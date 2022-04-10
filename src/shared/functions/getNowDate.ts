export function getNowDate(): string {
  const nowDay = new Date().getDate();
  const nowMonth = new Date().getMonth() + 1;
  const nowYear = new Date().getFullYear();
  return `${nowMonth}/${nowDay}/${nowYear}`;
}
