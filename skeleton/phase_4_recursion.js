// #1 range

function range(start, end) {
  if (start === end) {
    return [];
  }

  let result = range(start, end - 1)
  result.push(end - 1)
  return result
}

range(3,5)

// #2 recursive sum

function recSum(arr) {
  if (arr.length < 1) { return 0; }

  let sum = recSum(arr.slice(0, -1)) + arr[arr.length - 1]
  return sum
  console.log(arr)
}

recSum([1, 2, 3])

// #3 exponent 1

function exponent1(base, exp) {
  if (exp === 0) { return 1 }

  let result = base * exponent1(base, exp - 1)
  return result
}

exponent1(5, 3)

// #4 exponent2

function exponent2(base, exp) {
  if (exp === 0) { return 1 }
  if (exp === 1) { return base }

  if(exp % 2 === 0){
    return exponent2(base, exp/2) * exponent2(base, exp/2)
  } else {
    return base *
    (exponent2(base, (exp - 1) / 2) * exponent2(base, (exp - 1) / 2))
  }
}

exponent2(5, 3)


// #5 fibbonaci(n)

function fibonacci(n) {
  if (n === 0) { return [] }
  if (n === 1) { return [0] }
  if (n === 2) { return [0, 1] }

  let fibs = fibonacci(n-1);
  let newFib = fibs[n-2] + fibs[n-3] ;
  fibs.push(newFib)
  return fibs
}

fibonacci(9)

// # 6 binary search
// REVISIT THIS PLZ!! //


function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
    }

  let midIdx = Math.floor(arr.length / 2);
  let middle = arr[midIdx];

  if (middle === target) {
    return midIdx;
  } else if (middle > target) {
    let left = arr.slice(0, midIdx);
    return bsearch(left, target);
  } else {
    let right = arr.slice(midIdx + 1);
    subIndex = bsearch(right, target);
    return subIndex === -1 ? -1 : midIdx + subIndex + 1;
  }

}

const array = [1, 2, 3, 4, 5, 6, 7]
console.log(bsearch(array, 1))
console.log(bsearch(array, 2))
console.log(bsearch(array, 3))
console.log(bsearch(array, 4))
console.log(bsearch(array, 5))
console.log(bsearch(array, 6))
console.log(bsearch(array, 7))
console.log(bsearch(array, 8))


// #7 mergesort
// WHY ISNT THIS EVER TOUCHING THE LAST NUMBER?


function merge(left, right) {
  let merged = []

  while( (left.length > 0) && (right.length > 0)  ) {
    if (left[0] <= right [0]){
      merged.push(left.shift())
    } else {
      merged.push(right.shift())
    }
  }
  merged = left.concat(merged)
  merged = merged.concat(right)

  return merged
}


function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = arr.length / 2;

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  console.log(left)
  console.log(right)

  const sortedL = mergesort(left);
  const sortedR = mergesort(right);

  let merged = merge(sortedL, sortedR);
  return merged;
}
