
exports.min = function min (array) {
  if(!array) return 0;
   return array.reduce((acc,i) => Math.min(acc,i), 0);
}

exports.max = function max (array) {
  if(!array) return 0;
  return array.reduce((acc,i) => Math.max(acc,i), 0);
}

exports.avg = function avg (array) {
  if(!array) return 0;
  let sum = array.reduce((acc,i) => acc + i, 0);
  return sum / array.length || 0;
}
