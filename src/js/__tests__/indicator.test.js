import defineIndicator from '../indicator';

test('defineGreenIndicator test', () => {
  const user = {
    name: 'Маг',
    health: 90,
  };

  const result = defineIndicator(user);
  expect(result).toBe('healthy');
});

test('defineRedIndicator test', () => {
  const user = {
    name: 'Маг',
    health: 10,
  };

  const result = defineIndicator(user);
  expect(result).toBe('critical');
});

test('defineYellowIndicator test', () => {
  const user = {
    name: 'Маг',
    health: 30,
  };

  const result = defineIndicator(user);
  expect(result).toBe('wounded');
});
