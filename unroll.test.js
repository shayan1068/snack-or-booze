const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("correctly unrolls a 2x2 matrix", function () {
    const matrix = [
      [1, 2],
      [3, 4]
    ];
    expect(unroll(matrix)).toEqual([1, 2, 4, 3]);
  });

  it("correctly unrolls a 3x3 matrix", function () {
    const matrix = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    expect(unroll(matrix)).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });

  it("correctly unrolls a 4x4 matrix", function () {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    expect(unroll(matrix)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });
});
