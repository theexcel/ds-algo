function fibWithLoop(num: number): number[] {
  let arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}

// console.log(fibWithLoop(3));

function fibWithRecursion(num: number): number[] {
  if (num === 0) {
    return [0];
  }
  if (num === 1) {
    return [0, 1];
  }

  let fibSeq = fibWithRecursion(num - 1);
  let nextNum = fibSeq[num - 1] + fibSeq[num - 2];

  fibSeq.push(nextNum);

  return fibSeq;
}

console.log(fibWithRecursion(5));
