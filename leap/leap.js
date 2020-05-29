export const isLeap = (year) => {
  if(year%4 === 0) {
    if (year%100 === 0) {
      return year % 400 === 0;
    }
    return true;
  } else {
    return false;
  }
};
