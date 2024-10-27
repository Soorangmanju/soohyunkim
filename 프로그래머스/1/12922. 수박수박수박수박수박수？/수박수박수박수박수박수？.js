function solution(n) {
  let arr = "";
  for (let i = 1; i <= n && n <= 10000; i++) {
    if (i % 2 === 0) {
      arr += "박";
    } else {
      arr += "수";
    }
  }
  return arr;
}

console.log(solution(3)); 