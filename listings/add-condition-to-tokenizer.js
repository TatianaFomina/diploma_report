// @flow
import { types as tt } from "./types";

export default class Tokenizer {
  ...
  readToken_dot() {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (next >= charCodes.digit0 && next <= charCodes.digit9) {
      this.readNumber(true);
      return;
    }
    if (
      next === charCodes.dot &&
      this.input.charCodeAt(this.state.pos + 2) === charCodes.dot
    ) {
    %\colorbox{highlight}{if (this.input.charCodeAt(this.state.pos + 3) === }%
      %\colorbox{highlight}{charCodes.numberSign)\{}%
        %\colorbox{highlight}{this.state.pos += 4;}%
        %\colorbox{highlight}{this.finishToken(tt.ellipsisHash);}%
      %\colorbox{highlight}{\} else \{}% 
        this.state.pos += 3;
        this.finishToken(tt.ellipsis);
      %\colorbox{highlight}{\}}%
    } else {
      ++this.state.pos;
      this.finishToken(tt.dot);
    }
  }
  ...
}
