import '../index';

test('qoq', () => {
  let testArr = [1, 2, 3, 4];
  expect(testArr.qoq()).toStrictEqual(1);
});

test('bob', () => {
  let testArr = [1, 2, 3, 4];
  expect(testArr.bob(5)).toStrictEqual(5);
});

test('dod', () => {
  let testArr = [1, 2, 3, 4];
  expect(testArr.dod(0)).toStrictEqual(5);
});