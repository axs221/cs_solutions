function bubblesort(list) {
  for (var i = 0; i < list.length - 1; i++) {
    for (var j = list.length - 1; j >= i; j--) {
      if (list[j] < list[j-1]) {
        var itemJ = list.splice(j, 1)[0];
        list.splice(j-1, 0, itemJ);
      } else {
      }
    }
  }

  return list;
}

function insertionsort(list) {
  for (var i = 0; i < list.length - 1; i++) {
    var next = list[i + 1];

    for (var j = i; j >= 0; j--) {
      if (next <= list[j] && (j === 0 || next > list[j - 1])) {
        var next = list.splice(i + 1, 1)[0];
        list.splice(j, 0, next);
        break;
      }
    }
  }

  return list;
}

function mergesort(list) {
  if (list.length <= 1) {
    return list;
  }

  var listA = list.slice(0, list.length / 2);
  var listB = list.slice(list.length / 2, list.length);

  var sortedA = mergesort(listA);
  var sortedB = mergesort(listB);

  var finalSorted = [];

  while (sortedA.length > 0 && sortedB.length > 0) {
    if (sortedA[0] < sortedB[0]) {
      finalSorted.push(sortedA.shift());
    } else {
      finalSorted.push(sortedB.shift());
    }
  }

  finalSorted = finalSorted.concat(sortedA).concat(sortedB);

  return finalSorted;
}

function quicksort(list) {
  if (list.length <= 1) {
    return list;
  }

  var pivot = list.pop();
  var leftList = list; // Reuse the data structure so we don't use extra memory or have to pop everything.
  var rightList = [];

  for (var i = 0; i < leftList.length; i++) {
    var number = leftList[i];

    if (number > pivot) {
      number = leftList.splice(i, 1)[0];
      rightList.push(number);
      i -= 1;
    }
  }

  return quicksort(leftList)
    .concat([ pivot ])
    .concat(quicksort(rightList));
}

module.exports = {
  bubblesort: bubblesort,
  insertionsort: insertionsort,
  mergesort: mergesort,
  quicksort: quicksort
}

// var arr = [1,3,2];
// var arr = [3,5,1,4,2];
// var arr = [5,7,4,9,6,6];
// var arr = [1,2,3,4,5];
var arr = [3,5,1,4,2,9,15,23,22,8,12,4,7,21,13,23,17,19,25,77,74,63,2,1,23,4,1,2,421,412,4,5,32,5,235];
arr = arr.concat(arr).concat(arr).concat(arr);
arr = arr.concat(arr).concat(arr).concat(arr);
arr = arr.concat(arr).concat(arr).concat(arr);

console.time("insertion");
insertionsort(arr);
console.timeEnd("insertion");

console.time("bubble");
bubblesort(arr);
console.timeEnd("bubble");

console.time("merge");
mergesort(arr);
console.timeEnd("merge");

console.time("quick");
quicksort(arr);
console.timeEnd("quick");
