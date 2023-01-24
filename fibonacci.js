// Iterative version of fibonacci sequence
function fibs(fibNum) {
  if (fibNum === 1) return [0];
  if (fibNum < 1) return [];

  const currFibArr = [0, 1];
  let count = 0;
  while (count < fibNum - 2) {
    const lastIndex = currFibArr.length - 1;
    const secondToLastIndex = currFibArr.length - 2;
    currFibArr.push(currFibArr[lastIndex] + currFibArr[secondToLastIndex]);
    count += 1;
  }
  return currFibArr;
}

console.log(fibs(8));
