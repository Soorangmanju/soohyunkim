// const solution = (number, limit, power) => {
//   let totalWeight = 0;


//   for (let i = 1; i <= number; i++) {
//     let divisorCount = 0;

//     for (let n = 1; n <= i; n++) {
//       if (i % n === 0) {
//         divisorCount++;
//       }
//     }

//     if (divisorCount > limit) {
//       totalWeight += power;
//     } else {
//       totalWeight += divisorCount;
//     }
//   }

//   return totalWeight;
// };
const solution = (number, limit, power) => {
  let totalWeight = 0;

 
  for (let i = 1; i <= number; i++) {
    let divisorCount = 0;

    for (let n = 1; n * n <= i; n++) {
      if (i % n === 0) {
        divisorCount++;  
        if (n !== i / n) {
          divisorCount++;  
        }
      }
    }

    if (divisorCount > limit) {
      totalWeight += power;
    } else {
      totalWeight += divisorCount;
    }
  }

  return totalWeight;
};

