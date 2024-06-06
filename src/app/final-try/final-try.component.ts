import { Component } from '@angular/core';
import * as jsonLogic from 'json-logic-js';
import {FormBuilder, Validators, FormArray, FormGroup} from "@angular/forms";
import {Operations} from './Operations';

@Component({
  selector: 'app-final-try',
  templateUrl: './final-try.component.html',
  styleUrl: './final-try.component.css'
})
export class FinalTryComponent {

  form: FormGroup;
  childOperations: Operations[] = Operations.childOperations;
  rootOperations: Operations[] = Operations.rootOperations;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      root: '',
      boxes: this.fb.array([])
    });
  }

  get box() {
    return this.form.get('boxes') as FormArray;
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
