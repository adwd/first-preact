import { example } from './example';

test('example function adds string', () => {
  expect(example('hello')).toBe('example: hello');
});
