//@flow
export default class LValParser {
  ...
  parseSpread(
    %\colorbox{highlight}{isDeep = false,}%
    refExpressionErrors: ?ExpressionErrors,
    refNeedsArrowPos?: ?Pos,
  ): SpreadElement {
    const node = this.startNode();
    this.next();
    node.argument = this.parseMaybeAssign(
      false,
      refExpressionErrors,
      undefined,
      refNeedsArrowPos,
    );
    %\colorbox{highlight}{node.deep = isDeep;}%
    return this.finishNode(node, 'SpreadElement');
  }
  ...
}
