export interface LogicNode {

  firstVal: number;
  condition: string;
  secondVal: number;
  children: LogicNode[];
  logicalOperator: 'and' | 'or';
}
