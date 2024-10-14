function unroll(squareArray) {
    let result = [];
    while (squareArray.length > 0) {
      // Remove the first row (top row) and add it to the result
      result = result.concat(squareArray.shift());
  
      // Remove the last element from each remaining row (right column)
      for (let i = 0; i < squareArray.length; i++) {
        result.push(squareArray[i].pop());
      }
  
      // If there are still rows left, remove the last row (bottom row) and reverse it
      if (squareArray.length > 0) {
        result = result.concat(squareArray.pop().reverse());
      }
  
      // Remove the first element from each remaining row (left column) and reverse the order
      for (let i = squareArray.length - 1; i >= 0; i--) {
        result.push(squareArray[i].shift());
      }
    }
  
    return result;
  }
  
  module.exports = unroll;
  