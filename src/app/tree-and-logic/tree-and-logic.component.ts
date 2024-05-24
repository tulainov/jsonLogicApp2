import { Component } from '@angular/core';
import * as jsonLogic from 'json-logic-js'
import {FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-tree-and-logic',
  templateUrl: './tree-and-logic.component.html',
  styleUrls: ['./tree-and-logic.component.css']
})
//TODO: use JSON Pipe to represent the logic in the end
export class TreeAndLogicComponent {

  constructor(private formBuilder: FormBuilder) {
  }

  logic = this.formBuilder.group({
      // TODO: condition split with split() add all operations, with switch case go though them, if equals something - then we'll be using it, if no - throw an error
      data: ['', Validators.required],
      condition: ['', Validators.required],

      nodes: this.formBuilder.array([this.formBuilder.control('')])
  });

  get nodes() {
    return this.logic.get('nodes') as FormArray;
  }

  addNode() {
    const node = this.formBuilder.group({
        data: ['', Validators.required],
        condition: ['', Validators.required]
    });
    this.nodes.push(node);
  }
}
