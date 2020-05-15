import '../index';

let testArr = [1, 2, 3, 4];

test('qoq', () => {
  expect(testArr.qoq()).toStrictEqual([2, 3, 4]);
});
