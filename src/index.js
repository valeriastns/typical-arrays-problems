
exports.min = function min(array) {
  if(array === undefined) {
    return 0
  }
  let min = 0
  array.forEach(element => {
    if (element < min) {
      min = element
    }
  });
  return min;
}

exports.max = function max(array) {
  if(array === undefined) {
    return 0
  }
  let max = 0
  array.forEach(element => {
    if (element > max) {
      max = element
    }
  });
  return max;
}

exports.avg = function avg(array) {
  if(array === undefined || array.length == 0) {
    return 0
  }
  let sum = 0
  array.forEach(elem =>{
    sum+=elem
  });
  return sum/array.length;
}
