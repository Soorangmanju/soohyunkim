const solution = (k, m, score) => {
  score.sort((a, b) => b - a);

  let maxProfit = 0;

  for (let i = m - 1; i < score.length; i += m) {
    maxProfit += score[i] * m; 
  }

  return maxProfit;
};
