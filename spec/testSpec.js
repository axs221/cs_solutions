var fibonacci = require('../app/fibonacci');
var sort = require('../app/sort');
var priority_queue = require('../app/priority_queue');

describe('fibonacci', function() {
  it('should do fib', () => {
    expect(fibonacci(13)).toEqual([1, 1, 2, 3, 5, 8, 13]);
    expect(fibonacci(2000)).toEqual([ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597]);
  });
});

describe('sort', function() {
  it('should sort with bubblesort', () => {
    expect(sort.bubblesort([3, 5, 1, 4, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(sort.bubblesort([3, 5, 1, 9, 1, 4, 2])).toEqual([1, 1, 2, 3, 4, 5, 9]);
    expect(sort.bubblesort([-3, -5, 0, 9, 1, 4, 2])).toEqual([-5, -3, 0, 1, 2, 4, 9]);
  });

  it('should sort with insertionsort', () => {
    expect(sort.insertionsort([3, 5, 1, 4, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(sort.insertionsort([3, 5, 1, 9, 1, 4, 2])).toEqual([1, 1, 2, 3, 4, 5, 9]);
    expect(sort.insertionsort([-3, -5, 0, 9, 1, 4, 2])).toEqual([-5, -3, 0, 1, 2, 4, 9]);
  });

  it('should sort with mergesort', () => {
    expect(sort.mergesort([3, 5, 1, 4, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(sort.mergesort([3, 5, 1, 9, 1, 4, 2])).toEqual([1, 1, 2, 3, 4, 5, 9]);
    expect(sort.mergesort([-3, -5, 0, 9, 1, 4, 2])).toEqual([-5, -3, 0, 1, 2, 4, 9]);
  });

  it('should sort with quicksort', () => {
    expect(sort.quicksort([3, 5, 1, 4, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(sort.quicksort([3, 5, 1, 9, 1, 4, 2])).toEqual([1, 1, 2, 3, 4, 5, 9]);
    expect(sort.quicksort([-3, -5, 0, 9, 1, 4, 2])).toEqual([-5, -3, 0, 1, 2, 4, 9]);
  });
});

describe('priority_queue', function() {
  it('should add nodes', () => {
    var pqueue = new priority_queue();
    pqueue.insert(1);
    pqueue.insert(2);
    pqueue.insert(3);
    pqueue.insert(4);
    expect(pqueue.items).toEqual([1, 2, 3, 4]);
  });

  it('should sort nodes by priority (1 being highest priority)', () => {
    var pqueue = new priority_queue();
    pqueue.insert(4);
    pqueue.insert(2);
    pqueue.insert(3);
    pqueue.insert(1);
    expect(pqueue.items).toEqual([1, 2, 3, 4]);
  });
});
