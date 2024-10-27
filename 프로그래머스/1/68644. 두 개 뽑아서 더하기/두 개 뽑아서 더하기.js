function solution(numbers) {
  let answer = [];


  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      let same = false;


      for (let k = 0; k < answer.length; k++) {
        if (answer[k] === sum) {
          same = true;
          break;
        }
      }


      if (!same) {
        answer.push(sum);
      }
    }
  }


  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 0; j < answer.length - 1 - i; j++) {
      if (answer[j] > answer[j + 1]) {
        let temp = answer[j];
        answer[j] = answer[j + 1];
        answer[j + 1] = temp;
      }
    }
  }

  return answer;
}
