function calculateFactorial(n) {
  // Base case: 0! or 1! is always 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case
  return n * calculateFactorial(n - 1);
}

// Example usage:
const result = calculateFactorial(5); 
console.log(result);