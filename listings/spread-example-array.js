const mid = [3, 4];
const arr1 = [1, 2, mid, 5, 6];     // [1, 2, [3, 4], 5, 6]
const arr2 = [1, 2, ...mid, 5, 6];  // [1, 2, 3, 4, 5, 6]