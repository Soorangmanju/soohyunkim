const solution = (k, tangerine) => {
 
    const sizeCount = new Map();
    tangerine.forEach(size => 
        sizeCount.set(size, (sizeCount.get(size) || 0) + 1)
    );

 
    const sizeCountOrder = [...sizeCount.values()].sort((a, b) => b - a);

  let count = 0, types = 0;
    for (const c of sizeCountOrder) {
        count += c;
        types++;
        if (count >= k) break;
    }

    return types;
};
