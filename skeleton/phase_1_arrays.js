// #1: uniq

Array.prototype.uniq = function() {
  const result = [];
  var arr = this;
  for (var i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}

// #2: twoSum

Array.prototype.twoSum = function() {
  let arr = this;
  const result = []
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (i === j || i > j ) {continue;
      } else if (arr[i] + arr[j] === 0) {
        result.push( [i, j] )
      }
    }
  }
  return result
}

// #3 transpose

Array.prototype.transpose = function() {
  let arr = this;
  const result = [];
  for (i = 0; i < arr.length; i++) {
      let row = arr[i]
      for (j = 0; j < row.length; j++) {
        let column = j
        if (j === 0) {
          result.push([])
        }
        result[i].push(arr[j][i])
    }
  }
  return result
}
