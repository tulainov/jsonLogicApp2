import {Component, Input} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {OperationInterface} from "../final-try/OperationInterface";
import {Operations} from "../final-try/Operations";

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrl: './node.component.css'
})
export class NodeComponent {

  @Input() form!: FormGroup;
  childOperations: OperationInterface[] = Operations.childOperations;
  rootOperations: OperationInterface[] = Operations.rootOperations;

  constructor(private fb: FormBuilder) {
  }

  get children() {
    return this.form.get('children') as FormArray;
  }

  addChild() {
    this.children.push(this.createChildGroup());
  }

  removeChild(index: number) {
    this.children.removeAt(index);
  }

  private createChildGroup() {
    return this.fb.group({
      firstVal: 0,
      condition: '',
      secondVal: 0,
      children: this.fb.array([])
    });
  }

  protected readonly FormGroup = FormGroup;
}
