const solution = (arr1, arr2) => {
  const al = arr1.length; //행
  const a = arr1[0].length; //열
  const bl = arr2.length; 
  const b = arr2[0].length; 



  const answer = Array.from({ length: al }, () => Array(b).fill(0));

  for (let i = 0; i < al; i++) {
    for (let j = 0; j < b; j++) {
      for (let k = 0; k < a; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j]; 
      }
    }
  }
  return answer;
};

