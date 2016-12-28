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

module.exports = bubblesort;
