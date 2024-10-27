function solution(t, p) {
  let answer = 0;

 
  for (let i = 0; i <= t.length - p.length; i++) {
    let count = '';
    
  for (let j = 0; j < p.length; j++) {
      count += t[i + j];
    }

  
    if (p >= count) answer++;
  }

  return answer;
}