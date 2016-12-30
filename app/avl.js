// This mostly works, I'm sure it isn't perfect.
//
var AvlTree = function(number) {
  this.value = number;
  this.height = 0;
  this.left = null;
  this.right = null;
}

AvlTree.prototype.add = function(number) {
  if (this.value == null) {
    this.value = number;
  } else if (number > this.value) {
    if (this.right === null) {
      this.right = new AvlTree();
    }
    this.right.add(number);

    this.height = Math.max(this.height, this.right.height + 1);
  } else {
    if (this.left === null) {
      this.left = new AvlTree();
    }
    this.left.add(number);

    this.height = Math.max(this.height, this.left.height + 1);
  }

  var leftHeight = this.left ? this.left.height : 0;
  var rightHeight = this.right ? this.right.height : 0;

  if (leftHeight - rightHeight >= 1) {
    this.rebalance('left', this.left, this.right);
  } else if (rightHeight - leftHeight >= 1) {
    this.rebalance('right', this.right, this.left);
  }
}

AvlTree.prototype.rebalance = function(rebalanceDirection, rebalanceSide, oppositeSide) {
  var oppositeDirection = rebalanceDirection === 'right' ? 'left' : 'right';

  var originalRebalanceValue = rebalanceSide.value;
  rebalanceSide.value = this.value
  this.value = originalRebalanceValue;

  this[oppositeDirection] = this[rebalanceDirection];
  if (rebalanceSide[rebalanceDirection]) {
    this[rebalanceDirection] = rebalanceSide[rebalanceDirection];
    rebalanceSide[rebalanceDirection] = null;
  }
  this[oppositeDirection][rebalanceDirection] = this[oppositeDirection][oppositeDirection];
  this[oppositeDirection][oppositeDirection] = oppositeSide;

  if (oppositeSide) {
    this[oppositeDirection][oppositeDirection] = oppositeSide;
  }

  this.updateHeight();
  rebalanceSide.updateHeight();
  if (oppositeSide) {
    oppositeSide.updateHeight();
  }
}

AvlTree.prototype.updateHeight = function(number) {
  if (!this.left && !this.right) {
    this.height = 0;
  } else if (!this.left) {
    this.height = this.right.height + 1;
  } else if (!this.right) {
    this.height = this.left.height + 1;
  } else if (this.right.height > this.left.height) {
    this.height = this.right.height + 1;
  } else if (this.left.height > this.right.height) {
    this.height = this.left.height + 1;
  } else {
    // balanced
  }
}


var tree = new AvlTree();

function addAndPrint(number) {
  console.log('Adding number:', number);
  tree.add(number);
  console.log(JSON.stringify(tree, null, '\t'));
  console.log('------');
}

addAndPrint(1);
addAndPrint(2);
addAndPrint(3);
addAndPrint(4);
addAndPrint(5);
addAndPrint(6);
addAndPrint(7);
addAndPrint(221);
addAndPrint(219);
addAndPrint(217);
addAndPrint(230);
addAndPrint(300);
