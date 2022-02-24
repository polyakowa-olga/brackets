module.exports = function check(str, bracketsConfig) {

  let arr = [...str];
  let keep = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] == bracketsConfig[j][0]) {
        if (
          bracketsConfig[j][0] == bracketsConfig[j][1] &&
          keep[keep.length - 1] == bracketsConfig[j][0]
        ) {
          keep.pop();
        } else if (
          bracketsConfig[j][0] == bracketsConfig[j][1] &&
          keep[keep.length - 1] !== bracketsConfig[j][0]
        ) {
          keep.push(arr[i]);
        } else {
          keep.push(arr[i]);
        }
      } else if (arr[i] == bracketsConfig[j][1]) {
        if (keep.pop() !== bracketsConfig[j][0]) return false;
      }
    }
  }

  if (keep.length !== 0) {
    return false;
  }

  return true;
};
