import { Component } from '@angular/core';
import * as jsonLogic from 'json-logic-js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  rule: any;
  data: any;

  getRuleAndData() {

  }


  // result: any = jsonLogic.apply(this.rule, this.data);
}
