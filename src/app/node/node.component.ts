import {Component, Input} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {OperationInterface} from "../final-try/OperationInterface";
import {Operations} from "../final-try/Operations";
import {FormService} from "../../services/form-service";

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrl: './node.component.css'
})
export class NodeComponent {

  @Input() form!: FormGroup;

  constructor(public formService: FormService) {}

  get children() {
    return this.form.get('children') as FormArray;
  }

  addChild() {
    this.children.push(this.formService.createChildGroup());
  }

  removeChild(index: number) {
    this.children.removeAt(index);
  }
}
