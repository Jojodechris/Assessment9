const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("unrolls a 3x3 matrix correctly", function () {
    const squareMatrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const expectedUnrolledArray = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    expect(unroll(squareMatrix)).toEqual(expectedUnrolledArray);
  });

  // Add more test cases as needed

});

