const solution = (answers) => {
  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count1 = 0, count2 = 0, count3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === pattern1[i % pattern1.length]) count1++;
    if (answers[i] === pattern2[i % pattern2.length]) count2++;
    if (answers[i] === pattern3[i % pattern3.length]) count3++;
  }

  const maxCount = Math.max(count1, count2, count3);
  const result = [];
  if (count1 === maxCount) result.push(1);
  if (count2 === maxCount) result.push(2);
  if (count3 === maxCount) result.push(3);

  return result;
};

