function reading(numberPages, pageForHour, days) {
  let allHours = numberPages / pageForHour;
  let readHourByDays = allHours / days;
  console.log(readHourByDays);
}
reading(212, 20, 2);
