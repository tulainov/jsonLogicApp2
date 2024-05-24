import { Component } from '@angular/core';
import * as jsonLogic from 'json-logic-js'
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-tree-and-logic',
  templateUrl: './tree-and-logic.component.html',
  styleUrls: ['./tree-and-logic.component.css']
})
export class TreeAndLogicComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nodes: this.fb.array([])
    });
  }

  get nodes() {
    return this.form.get('nodes') as FormArray;
  }

  addNode() {
    const node = this.fb.group({
      variable: ['', Validators.required],
      condition: ['', Validators.required],
      operator: ['']
    });

    this.nodes.push(node);
  }

  removeNode(index: number) {
    this.nodes.removeAt(index);
  }
}
