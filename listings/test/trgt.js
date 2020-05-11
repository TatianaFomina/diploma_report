function %\colorbox{highlight}{\_deepCopy}%(inObject) { let outObject, value, key; if (typeof...

const object1 = {
  a: 1,
  nestedObject: {
    b: 2
  },
};
const object2 = { ...%\colorbox{highlight}{\_deepCopy(}%object1%\colorbox{highlight}{)}%
};
console.log(object2 === object1);

console.log(object2.nestedObject === object1.nestedObject);
