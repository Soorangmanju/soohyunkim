const solution = (k, score) => {
  const winner = []; 
  const result = [];    

  score.forEach((s) => {
    winner.push(s); 
    winner.sort((a, b) => b - a); 
    winner.length = Math.min(winner.length, k); 
    result.push(winner[winner.length - 1]); 
  });

  return result;
};
