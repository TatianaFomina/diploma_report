//@flow
import LValParser from "./lval";

export default class ExpressionParser extends LValParser {
  ...
  parseObjectMember(
    isPattern: boolean,
    refExpressionErrors?: ?ExpressionErrors,
  ): N.ObjectMember | N.SpreadElement | N.RestElement {
  
    //.......
  
    if (this.match(tt.ellipsis) %\colorbox{highlight}{|| this.match(tt.ellipsisHash)}%) {
      if (decorators.length) this.unexpected();
      if (isPattern) {
        this.next();
        // Don't use parseRestBinding() as we only allow Identifier here.
        prop.argument = this.parseIdentifier();
        this.checkCommaAfterRest(charCodes.rightCurlyBrace);
        return this.finishNode(prop, "RestElement");
      }
  
      return this.parseSpread(%\colorbox{highlight}{this.match(tt.ellipsisHash)}%);
    }
  
    //.......
  }
  
  parseExprListItem(
    allowEmpty: ?boolean,
    refExpressionErrors?: ?ExpressionErrors,
    refNeedsArrowPos: ?Pos,
    allowPlaceholder: ?boolean,
  ): ?N.Expression {
    let elt;
    if (allowEmpty && this.match(tt.comma)) {
      elt = null;
    } else if (this.match(tt.ellipsis) %\colorbox{highlight}{|| this.match(tt.ellipsisHash)}%) {
      const spreadNodeStartPos = this.state.start;
      const spreadNodeStartLoc = this.state.startLoc;
      elt = this.parseParenItem(
        this.parseSpread(%\colorbox{highlight}{this.match(tt.ellipsisHash)}%, refExpressionErrors, refNeedsArrowPos),
        spreadNodeStartPos,
        spreadNodeStartLoc,
      );
    }
    // ........
  }
}

