// 서력 기원 연수가 4로 나누어 떨어지는 해는 윤년으로 한다.
// 서력 기원 연수가 4, 100으로 나누어 떨어지는 해는 평년으로 한다.
// 서력 기원 연수가 4, 100, 400으로 나누어 떨어지는 해는 윤년으로 둔다.

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

// export const isLeap = (year) => {
//   return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
// };
