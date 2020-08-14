function f(arr) {
  let temp = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }

  return arr;
}

console.log(f([19, 34, 41, 29, 31, 20, 49, 43]));
