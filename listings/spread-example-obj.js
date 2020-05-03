const object1 = {a: 1, b: 2};
const object2 = {object1, c: 3};    // {object1: {a: 1, b: 2}, c: 3}
const object3 = {...object1, c: 3}; // {a: 1, b: 2, c: 3}