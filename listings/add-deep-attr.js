//@flow
export type SpreadElement = NodeBase & {
  type: 'SpreadElement',
  argument: Expression,
  %\colorbox{highlight}{deep: boolean,}%
};