import { Component } from '@angular/core';
import * as jsonLogic from 'json-logic-js';
import {FormBuilder, Validators, FormArray, FormGroup} from "@angular/forms";
import {Operations} from './Operations';
import {OperationInterface} from "./OperationInterface";

@Component({
  selector: 'app-final-try',
  templateUrl: './final-try.component.html',
  styleUrl: './final-try.component.css'
})
export class FinalTryComponent {

  form: FormGroup;
  childOperations: OperationInterface[] = Operations.childOperations;
  rootOperations: OperationInterface[] = Operations.rootOperations;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      root: '',
      box: this.fb.array([])
    });
  }

  get box() {
    return this.form.get('box') as FormArray;
  }

  addBox() {
    this.box.push(this.fb.group({
      firstVal: 0,
      condition: '',
      secondVal: 0
    }));
  }

  removeBox(index: number) {
    this.box.removeAt(index);
  }

}
