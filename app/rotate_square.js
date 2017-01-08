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

printSquare(square);
