const tplt = require('.');

test('test string input', () => {
  expect(tplt`unicorns`).toEqual('unicorns');
});

test('test string input as method', () => {
  expect(tplt('unicorns')).toEqual('unicorns');
});

test('test input with values', () => {
  const name = 'john';
  expect(tplt`Hello ${name} your age ${25}`).toEqual('Hello john your age 25');
});

test('test number input', () => {
  expect(() => {
    throw new Error(tplt(123));
  }).toThrow();
});

test('test blank input', () => {
  expect(() => {
    throw new Error(tplt());
  }).toThrow();
});
