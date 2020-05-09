import { declare } from '@babel/helper-plugin-utils';
import { types as t } from '@babel/core';

export default declare((api) => {
  api.assertVersion(7);

  return {
    name: 'transform-deep-spread-operator',

    visitor: {
      SpreadElement(path) {
        if (path.node.deep) {
          path.node.deep = false;
          const arg = path.node.argument;
          path.replaceWith(
            t.spreadElement(t.callExpression(this.addHelper('deepCopy'), [arg]))
          );
        }
      }
    },
  };
});
