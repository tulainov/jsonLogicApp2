import { Component } from '@angular/core';
import * as jsonLogic from 'json-logic-js';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'app-tree-and-logic',
    templateUrl: './tree-and-logic.component.html',
    styleUrls: ['./tree-and-logic.component.css']
})
export class TreeAndLogicComponent {

    operation: any;
    val: any;
    result: any;

    constructor(private formBuilder: FormBuilder) {}

    logic = this.formBuilder.group({
        data: ['', Validators.required],
        condition: ['', Validators.required],
        logicalOperator: ['', Validators.required],
        nodes: this.formBuilder.array([])
    });

    get nodes() {
        return this.logic.get('nodes') as FormArray;
    }

    get condition() {
        return this.logic.get('condition');
    }

    get data() {
        return this.logic.get('data');
    }

    get logicalOperator() {
        return this.logic.get('logicalOperator');
    }

    addNode() {
        const node = this.formBuilder.group({
            data: ['', Validators.required],
            condition: ['', Validators.required]
        });
        this.nodes.push(node);
    }

    convertOpAndVal() {
        const cond = this.condition?.value as string;

        if (!cond) {
            throw new Error('Condition is required');
        }

        const parts = cond.split(' ');

        if (parts.length === 2) {
            this.operation = parts[0];
            this.val = parseFloat(parts[1]); // Ensure the value is treated as a number
        } else {
            throw new Error('Invalid condition format');
        }
    }

    applyLogic() {
        this.convertOpAndVal();

        const dataValue = parseFloat(this.data?.value as string); // Ensure the data is treated as a number

        // Construct JSON Logic rule
        const rule = {
            [this.operation]: [dataValue, this.val]
        };

        // Apply JSON Logic
        this.result = jsonLogic.apply(rule, {});
    }

    refreshPage() {
        window.location.reload();
    }
}
