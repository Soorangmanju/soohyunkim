function solution(food) {
    let left = ''; 
    
    // 각 음식에 대해 반복
    for (let i = 1; i < food.length; i++) {
        const count = Math.floor(food[i] / 2);  
        left += String(i).repeat(count);  // 왼쪽
    }
    
  
    return left + '0' + [...left].reverse().join('');
}

