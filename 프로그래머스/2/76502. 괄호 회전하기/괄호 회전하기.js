const isValid = s => {
  const stack = [];
  const bracketPairs = { ')': '(', ']': '[', '}': '{' };

  for (const char of s) {
    if (['(', '[', '{'].includes(char)) {
      stack.push(char);
    } else if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
      return false;
    }
  }
  return stack.length === 0;
};

const solution = s => {
  let count = 0;
  const n = s.length;

  for (let i = 0; i < n; i++) {
    if (isValid(s)) count++;
    s = s.slice(1) + s[0]; 
  }

  return count;
};

