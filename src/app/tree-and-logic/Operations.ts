import {OperationInterface} from "./Operation";

export class Operations {

    static operations: OperationInterface[] = [
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
    ]
}
