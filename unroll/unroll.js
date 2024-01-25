function unroll(square) {
    const result = [];
  
    while (square.length > 0) {
      // Move right
      result.push(...square.shift());
  
      // Move down
      for (let i = 0; i < square.length; i++) {
        result.push(square[i].pop());
      }
  
      // Move left
      if (square.length > 0) {
        result.push(...square.pop().reverse());
      }
  
      // Move up
      for (let i = square.length - 1; i >= 0; i--) {
        result.push(square[i].shift());
      }
    }
  
    return result;
  }
  
