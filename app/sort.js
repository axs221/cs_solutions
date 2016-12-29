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
      }
    }
  }

  return list;
}

module.exports = {
  bubblesort: bubblesort,
  insertionsort: insertionsort
}
