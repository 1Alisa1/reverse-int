module.exports = function reverse (n) {
  const reverseStr = n.toString().split('').reverse().join('');

  return parseInt(reverseStr);
}
