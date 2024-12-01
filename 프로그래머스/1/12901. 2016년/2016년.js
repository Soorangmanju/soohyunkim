const solution = (a, b) => {
  const year = 2016; 
  const date = new Date(year, a - 1, b); 
  const weekday = date.getDay();
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return weekdays[weekday];
};
