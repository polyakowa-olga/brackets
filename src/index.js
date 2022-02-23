module.exports = function check(str, bracketsConfig) {
  let arr = [...str];
  let keep = [];

  if (arr.length % 2) return false; //work

  for (let i = 0; i < bracketsConfig.length; i++) {
    if (arr[0] == bracketsConfig[i][1]) return false;

    if (arr[arr.length - 1] == bracketsConfig[i][0]) return false;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] == bracketsConfig[j][0]) {
        keep.push(arr[i]);
      } else if (arr[i] == bracketsConfig[j][1]) {
        let a = keep.pop();

        if (a !== bracketsConfig[j][0]) return false;
      }
    }
  }

  if (keep.length !== 0) {
    return false;
  }

  return true;
};
