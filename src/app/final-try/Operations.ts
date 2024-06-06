import {OperationInterface} from "./OperationInterface";

export class Operations {

    static childOperations: OperationInterface[] = [
        { label: '==', value: '=='},
        { label: '===', value: '==='},
        { label: '!=', value: '!='},
        { label: '!==', value: '!=='},
        { label: '!', value: '!'},
        { label: '!!', value: '!!'},
        { label: 'or', value: 'or'},
        { label: 'and', value: 'and'},
        {label: 'greater', value: '>'},
        {label: 'greater equal', value: '>='},
        {label: 'less', value: '<'},
        {label: 'less equal', value: '<='},
    ];

  static rootOperations: OperationInterface[] = [
    {label: 'and', value: 'and'},
    {label: 'or', value: 'or'},
  ];
}
