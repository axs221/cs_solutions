var PriorityQueue = function(number) {
  this.items = [];
}

PriorityQueue.prototype.insert = function(number) {
  this.items.push(number)
  var number_index = this.items.length;  // priority queues act as one-based for logic.

  if (number_index === 1) {
    return;
  }

  do {
    var parent_index = number_index / 2;
    var parent = this.items[parent_index - 1];

    if (parent >= number) {
      var swap = this.items[number_index - 1];
      this.items[number_index - 1] = this.items[parent_index - 1];
      this.items[parent_index - 1] = swap;
      console.log(this.items);

      number_index = parent_index;
    }
  } while (parent >= number)
}

// var pqueue = new PriorityQueue();
// pqueue.insert(1);
// pqueue.insert(4);
// pqueue.insert(2);
// pqueue.insert(3);
// console.log(pqueue.items);

module.exports = PriorityQueue;
