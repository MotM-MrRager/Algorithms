
// Ignore this function
//
if(!Array.prototype.equals) {

  // attach the .equals method to Array's prototype to call it on any array
  //
  Array.prototype.equals = function (array) {

    // if the other array is a falsy value, return
    //
    if (!array) {
      return false;
    }

    // compare lengths - can save a lot of time
    //
    if (this.length != array.length) {
      return false;
    }

    for (var i = 0, l = this.length; i < l; i++) {

      // Check if we have nested arrays
      //
      if (this[i] instanceof Array && array[i] instanceof Array) {

        // recurse into the nested arrays
        //
        if (!this[i].equals(array[i])) {
          return false;
        }
      }
      else if (this[i] != array[i]) {
        // Warning - two different object instances will never be equal: {x:20} != {x:20}
        //
        return false;
      }
    }
    return true;
  };

  // Hide method from for-in loops
  //
  Object.defineProperty(Array.prototype, "equals", {enumerable: false});
}
//
// Ignore that function


// Arrays are efficient for random access.  They are also the most common data structure,
//  being built into nearly every programming language.  The following exercises should
//  serve as a glorious warm-up to the next few topics.
//

// [ ] Fill any array with value, zero if none provided, return original array
// [ ] Return the sum of all values in any array
// [ ] Return the average value of any array
// [ ] Return the median of any array that has both an odd and even number of values
// [ ] Return the index the value specified, or null if not found
// [ ] Return index of nth last odd in any array, 1 being the fist, etc., null = not found
//    [ ] Use only a single iteration
// [ ] Select a range of values in any array, return the average of the values of the range
//




// [ ] Fill any array with value, zero if none provided, return original array
//
var z = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function fillArray(a, value) {
  z.length
  // fill it
}

console.log("zero(z): " + (fillArray(z).equals([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])));
console.log("zero(z, 5): " + (fillArray(z, 5).equals([5, 5, 5, 5, 5, 5, 5, 5, 5, 5])));


// [ ] Return the sum of all values in any array
//
var a = [1, 2, 3, 4, 5, 6, 7, 8];

function sum(array) {
    var total = 0;
    for (i = 0; i <= array.length - 1; i++) {
        total += array[i];
    }
    return total;
}

console.log("sum(a): " + (sum(a) === 36));

// [ ] Return the average value of any array
//
var a1 = [23, 17, 23, 42, 8, 2, 73, 101, 83, 92];

function average(array) {
  // return average
    var average = 0;
    average = sum(array)/(array.length);
    return average;
}

console.log("average(a1): " + (average(a1) === 46.4));


//  [ ] Return the median of any array that has both an odd and even number of values
//
var a2 = [1,2,4,4,6,7,8,9,12];
var a3 = [4,5,9,10,11,15,22,20,21,21];

function median(array) {
  // return median
    var median;
    if (array.length%2 !== 0) {
      var median = array[(array.length-1)/2];
      return median;
    }
    else {
      var median = array[(array.length)/2];
      return median;
    }
}

console.log("median(a2): " + (median(a2) === 6));
console.log("median(a3): " + (median(a3) === 13));


// [ ] Return the index the value specified, or null if not found
//
var a4 = ["zero", "one", "two", "three", "four", "five"];

function findIndex(array, value) {
  // return index or null
    for (var i = 0; i <= array.length -1; i++) {
      var indexPosition;
      if (array[i] == value) {
          console.log("Found it!");
          indexPosition = i;
          console.log(indexPosition);
      }
      else {
       // console.log("Couldn't find it!");
      }
    }
    return indexPosition;
    console.log(indexPosition);
}

console.log("findIndex('three'): " + (findIndex(a4, "three") === 3));

// [ ] Return index of nth last odd in any array, 1 being the fist, etc., null = not found
// [ ] Use only a single iteration
//
var a5 = [4, 3, 8, 8, 6, 9, 10, 12, 10, 9, 0, 5, 16, 2];

function findNthLastOdd(array, n) {
  // return nth last odd
    for (var i = array.length - 1; i >= 0; i--) {
      if (array[i]%2 === 1) {
        console.log(array[i]);
      }
    }
}

console.log("findNthLastOdd(a5, 1): " + (findNthLastOdd(a5, 1) === 11));
console.log("findNthLastOdd(a5, 2): " + (findNthLastOdd(a5, 2) === 9));
console.log("findNthLastOdd(a5, 4): " + (findNthLastOdd(a5, 4) === 1));


// [ ] Select a range of values in any array, return the average of the values of the range
//
var a6 = [0, 1, 2, 3, 4, 5, 10, 15, 23, 54, 22, 1, 8, 4, 2, 2, 2, 0, 1];

function getAverageOfRange(array, start, end) {
  // return average of values selected from a subarray
    var arrayRange =[];
    for (var i = start; i <= end; i++) {
      arrayRange.push(array[i]);
    }
    console.log("Average for the selected range: " + average(arrayRange));
}

console.log("getAverageOfRange(a6, 5, 9): " + (getAverageOfRange(a6, 5, 9) === 21.4));