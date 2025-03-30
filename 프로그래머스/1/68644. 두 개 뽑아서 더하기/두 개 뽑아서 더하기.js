const solution = (numbers)=>{
    const total = [];
    for(let i =0; i< numbers.length; i++){
        for(let j=0; j< i; j++){
            total.push(numbers[i]+numbers[j]);
        }
    }
    return [...new Set(total)].sort((a,b)=>a-b);
}