var fibonacci = require('../app/fibonacci');
var bubblesort = require('../app/bubblesort');

describe('fibonacci', function() {
  it('should do fib', () => {
    expect(fibonacci(13)).toEqual([1, 1, 2, 3, 5, 8, 13]);
    expect(fibonacci(2000)).toEqual([ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597]);
  });
});

describe('sort', function() {
  it('should sort', () => {
    expect(bubblesort([3, 5, 1, 4, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(bubblesort([3, 5, 1, 9, 1, 4, 2])).toEqual([1, 1, 2, 3, 4, 5, 9]);
    expect(bubblesort([-3, -5, 0, 9, 1, 4, 2])).toEqual([-5, -3, 0, 1, 2, 4, 9]);
  });
});
