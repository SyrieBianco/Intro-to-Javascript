// #1: uniq

Array.prototype.uniq = function() {
  var result = [];
  var arr = this;
  for (var i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}

// #2 
