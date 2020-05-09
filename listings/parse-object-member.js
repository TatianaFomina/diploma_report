//@flow
import LValParser from "./lval";

export default class ExpressionParser extends LValParser {
  ...
  parseObjectMember(
    isPattern: boolean,
    refExpressionErrors?: ?ExpressionErrors,
  ): N.ObjectMember | N.SpreadElement | N.RestElement {
    let decorators = [];
    if (this.match(tt.at)) {
      if (this.hasPlugin("decorators")) {
        this.raise(this.state.start, Errors.UnsupportedPropertyDecorator);
      }
  
      // we needn't check if decorators (stage 0) plugin is enabled since it's checked by
      // the call to this.parseDecorator
      while (this.match(tt.at)) {
        decorators.push(this.parseDecorator());
      }
    }
  
    const prop = this.startNode();
    let isGenerator = false;
    let isAsync = false;
    let startPos;
    let startLoc;
  
    if (this.match(tt.ellipsis) %\colorbox{highlight}{|| this.match(tt.ellipsisAt)}%) {
      if (decorators.length) this.unexpected();
      if (isPattern) {
        this.next();
        // Don't use parseRestBinding() as we only allow Identifier here.
        prop.argument = this.parseIdentifier();
        this.checkCommaAfterRest(charCodes.rightCurlyBrace);
        return this.finishNode(prop, "RestElement");
      }
  
      return this.parseSpread(%\colorbox{highlight}{this.match(tt.ellipsisAt)}%);
    }
  
    if (decorators.length) {
      prop.decorators = decorators;
      decorators = [];
    }
  
    prop.method = false;
  
    if (isPattern || refExpressionErrors) {
      startPos = this.state.start;
      startLoc = this.state.startLoc;
    }
  
    if (!isPattern) {
      isGenerator = this.eat(tt.star);
    }
  
    const containsEsc = this.state.containsEsc;
    this.parsePropertyName(prop, /* isPrivateNameAllowed */ false);
  
    if (!isPattern && !containsEsc && !isGenerator && this.isAsyncProp(prop)) {
      isAsync = true;
      isGenerator = this.eat(tt.star);
      this.parsePropertyName(prop, /* isPrivateNameAllowed */ false);
    } else {
      isAsync = false;
    }
  
    this.parseObjPropValue(
      prop,
      startPos,
      startLoc,
      isGenerator,
      isAsync,
      isPattern,
      refExpressionErrors,
      containsEsc,
    );
  
    return prop;
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
    } else if (this.match(tt.ellipsis) %\colorbox{highlight}{|| this.match(tt.ellipsisAt)}%) {
      const spreadNodeStartPos = this.state.start;
      const spreadNodeStartLoc = this.state.startLoc;
      elt = this.parseParenItem(
        this.parseSpread(%\colorbox{highlight}{this.match(tt.ellipsisAt)}%, refExpressionErrors, refNeedsArrowPos),
        spreadNodeStartPos,
        spreadNodeStartLoc,
      );
    } else if (this.match(tt.question)) {
      this.expectPlugin("partialApplication");
      if (!allowPlaceholder) {
        this.raise(this.state.start, Errors.UnexpectedArgumentPlaceholder);
      }
      const node = this.startNode();
      this.next();
      elt = this.finishNode(node, "ArgumentPlaceholder");
    } else {
      elt = this.parseMaybeAssign(
        false,
        refExpressionErrors,
        this.parseParenItem,
        refNeedsArrowPos,
      );
    }
    return elt;
  }
}

