import {Component, OnInit} from '@angular/core';
import * as jsonLogic from 'json-logic-js';
import {FormBuilder, Validators, FormArray, FormGroup} from "@angular/forms";
import {Operations} from './Operations';
import {OperationInterface} from "./OperationInterface";
import {FormService} from "../../services/form-service";

@Component({
  selector: 'app-final-try',
  templateUrl: './final-try.component.html',
  styleUrl: './final-try.component.css'
})
export class FinalTryComponent implements OnInit {

  form!: FormGroup;

  constructor(public formService: FormService) {}

  ngOnInit() {
    this.form = this.formService.createChildGroup();
  }

  get box() {
    return this.form.get('box') as FormArray;
  }

  addBox() {
    this.box.push(this.formService.createChildGroup());
  }

  removeBox(index: number) {
    this.box.removeAt(index);
  }
}
