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
