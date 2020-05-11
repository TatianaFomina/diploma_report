const object1 = {
  a: 1,
  nestedObject: {
    b: 2
  },
};
const object2 = {%\colorbox{highlight}{...@}%object1};
console.log(object2 === object1);
console.log(object2.nestedObject === object1.nestedObject);
