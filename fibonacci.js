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

//Recursive version of fibonacci sequence
function fibsRec(fibNum) {
  if (fibNum === 2) {
    return [0, 1];
  }
  if (fibNum === 1) {
    return [0];
  }
  if (fibNum < 1) {
    return null;
  }

  const previousFibArr = fibsRec(fibNum - 1);
  const lastIndex = previousFibArr.length - 1;
  const secondToLastIndex = previousFibArr.length - 2;
  previousFibArr.push(previousFibArr[lastIndex] + previousFibArr[secondToLastIndex]);

  return previousFibArr;
}
