const solution = (nums) => {
    const map = new Map();
    nums.forEach(num => map.set(num, (map.get(num) || 0) + 1));
    return Math.min(map.size, nums.length / 2);
};
