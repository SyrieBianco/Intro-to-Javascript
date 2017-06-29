// #1 my each

Array.prototype.myEach = function(callback) {
  for ( let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}


// #2 my map
// why this no worky?

Array.prototype.myMap = function (callback) {
  result = []
  this.myEach(result.push(callback))
  return result
}

function plusTwo(num) { (num + 2) }

const arr = [1, 2, 3, 4]

arr.myMap(plusTwo)

// #3 my reduce

Array.prototype.myReduce = function (callback, [initialValue]) {
  let acc = 0
  let arr = this

  if (!initialValue) {
    acc = arr[0];
    arr = arr.slice(1);
    } else { acc = initialValue }

  for ( let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i])
  }
  return acc
}
