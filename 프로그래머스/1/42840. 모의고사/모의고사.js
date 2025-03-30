// const solution = (answers) => {
//   const pattern1 = [1, 2, 3, 4, 5];
//   const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   let count1 = 0, count2 = 0, count3 = 0;

//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i] === pattern1[i % pattern1.length]) count1++;
//     if (answers[i] === pattern2[i % pattern2.length]) count2++;
//     if (answers[i] === pattern3[i % pattern3.length]) count3++;
//   }

//   const maxCount = Math.max(count1, count2, count3);
//   const result = [];
//   if (count1 === maxCount) result.push(1);
//   if (count2 === maxCount) result.push(2);
//   if (count3 === maxCount) result.push(3);

//   return result;
// };

const solution = (answers) => {
  const patterns = [
    [1, 2, 3, 4, 5], 
    [2, 1, 2, 3, 2, 4, 2, 5], 
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];

  // 정답 개수 세기
  const scores = patterns.map(pattern => 
    answers.reduce((score, ans, i) => score + (ans === pattern[i % pattern.length] ? 1 : 0), 0)
  );

  // 최대 점수 구하기
  const maxCount = Math.max(...scores);

  // 최대 점수를 가진 사람 찾기
  return scores.map((score, idx) => score === maxCount ? idx + 1 : null).filter(v => v);
};

