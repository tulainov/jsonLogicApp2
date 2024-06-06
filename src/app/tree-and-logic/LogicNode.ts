export interface LogicNode {

  firstVal: number;
  condition: string;
  secondVal: number;
  logicalOperator: string;
  children?: LogicNode[];
}
