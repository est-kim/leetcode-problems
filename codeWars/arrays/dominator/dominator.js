// source: https://www.codewars.com/kata/559e10e2e162b69f750000b4/train/javascript

function dominator(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  for (let key in obj) {
    if (obj[key] > arr.length / 2) {
      return parseInt(key);
    }
  }
  return -1;
}

