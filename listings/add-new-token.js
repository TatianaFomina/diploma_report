export const types = {
  ...,
  arrow: new TokenType("=>", { beforeExpr }),
  ellipsis: new TokenType("...", { beforeExpr }),
  ellipsisAt: new TokenType("...@", { beforeExpr }),
  ...
}