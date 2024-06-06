import {Component, OnInit} from '@angular/core';
import * as jsonLogic from 'json-logic-js';
import {FormArray, FormGroup} from "@angular/forms";
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

  get boxes() {
    return this.form.get('boxes') as FormArray;
  }

  addBox() {
    this.boxes.push(this.formService.createChildGroup());
  }

  removeBox(index: number) {
    this.boxes.removeAt(index);
  }
}
