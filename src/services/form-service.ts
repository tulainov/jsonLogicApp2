import {Injectable} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Operations} from "../app/final-try/Operations";
import {OperationInterface} from "../app/final-try/OperationInterface";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  childOperations: OperationInterface[] = Operations.childOperations;
  rootOperations: OperationInterface[] = Operations.rootOperations;

  constructor(private fb: FormBuilder) {}

  createChildGroup(): FormGroup {
    return this.fb.group({
      root: '',
      firstVal: 0,
      condition: '',
      secondVal: 0,
      children: this.fb.array([]),
      boxes: this.fb.array([])
    });
  }
}
