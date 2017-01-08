var square = [[1, 0, 0, 1, 0, 1], [0, 1, 1, 0, 1, 1], [1, 1, 0, 0, 1, 0], [1, 1, 1, 0, 1, 0], [1, 0, 1, 1, 0, 1], [0, 1, 0, 0, 1, 1]];

function printSquare(square) {
  var output = "";
  
  output += "|";
  for (var i = 0; i < square.length; i++) {
    output += "-";
  }
  output += "|\r\n";

  for (var i = 0; i < square.length; i++) {
    output += "|";
    var row = square[i];
    for (var j = 0; j < row.length; j++) {
      var value = row[j];

      output += (value === 1 ? "*" : " ");
    }
    output += "|\r\n";
  }

  output += "|";
  for (var i = 0; i < square.length; i++) {
    output += "-";
  }
  output += "|\r\n";

  console.log(output);
}

function cloneSquare(square) {
  return JSON.parse(JSON.stringify(square));
}

function rotateSquare(square, clone, xStart, xEnd, yStart, yEnd) {
  clone = clone || cloneSquare(square);
  xStart = xStart || 0;
  xMid = xMid || 0;
  xEnd = xEnd || square.length - 1;
  yStart = yStart || 0;
  yMid = yMid || 0;
  yEnd = yEnd || square.length - 1;

  rotateSquare(square, clone, xStart, xMid, yStart, yMid);
  rotateSquare(square, clone, xMid, xEnd, yStart, yMid);
  rotateSquare(square, clone, xMid, xEnd, yMid, yEnd);
  rotateSquare(square, clone, xStart, xMid, yMid, yEnd);

  return clone;
}

printSquare(square);
