export function getNowDate(): string {
  const nowDay = new Date().getDay();
  const nowMonth = new Date().getMonth();
  const nowYear = new Date().getFullYear();
  return `${nowMonth}/${nowDay}/${nowYear}`;
}
