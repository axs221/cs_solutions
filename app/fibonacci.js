function fibonacci(max, values) {
  if (!values) {
    values = [];
  }

  var nextValue;

  if (values.length < 2) {
    nextValue = 1;
  } else {
    nextValue = values[values.length - 1] + values[values.length - 2];
  }

  if (nextValue > max) {
    return values;
  } else {
    values.push(nextValue);
    return fibonacci(max, values);
  }
}

module.exports = fibonacci;
