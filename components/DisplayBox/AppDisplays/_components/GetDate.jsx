export default function GetDate() {
  let date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMonth();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;

  const y_m_d_h_m = `${year}-${month}-${day}T${hour}:${minute}`;
  const y_m_d_h_plus1_m = `${year}-${month}-${day}T${(
    +hour + 1
  ).toString()}:${minute}`;
  const h_plus1_m = `${(+hour + 1).toString()}:${minute}`;

  const y_m_d = `${year}-${month}-${day}`;
  const m_d = `${month}월 ${day}일`;
  const h_m = `${hour}:${minute}`;
  return {
    y_m_d_h_m,
    y_m_d,
    y_m_d_h_plus1_m,
    h_plus1_m,
    m_d,
    h_m,
  };
}
