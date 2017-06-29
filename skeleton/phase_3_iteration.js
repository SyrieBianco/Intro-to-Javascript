// #1 bubbleSort


const sampleArray = [7, 11, 4, 5, 7, 1]

Array.prototype.bubbleSort = function() {
  let arr = this
  let sorted = false

  while (!sorted) {
    sorted = true;
    for ( var i = 0; i < arr.length; i++) {
      if ( arr[i] > arr[i + 1]) {
        let a = arr[i];
        let b = arr[i + 1];

        arr[i] = b
        arr[i + 1] = a

        sorted = false
      }
    }
  }
  return arr
}

sampleArray.bubbleSort()

// #2
