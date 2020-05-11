//@flow
import template from "@babel/template";

const helpers = Object.create(null);
export default helpers;
const helper = (minVersion: string) => tpl => ({
  minVersion,
  ast: () => template.program.ast(tpl),
});
...
helpers.deepCopy = helper("7.0.0-beta.0")`
  export default function _deepCopy(inObject) {
    let outObject, value, key

    if (typeof inObject !== "object" || inObject === null) {
      return inObject;
    }
    outObject = Array.isArray(inObject) ? [] : {};
    for (key in inObject) {
      value = inObject[key];
      outObject[key] = _deepCopy(value);
    }
    return outObject;
  }
`;