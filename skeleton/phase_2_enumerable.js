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
