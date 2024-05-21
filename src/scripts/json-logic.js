import * as jsonLogic from "json-logic-js";

export class JsonLogicClass {
  form = '';
  jsonlogic = '';
  jsonlogicresult = '';
  operations;

  data = JSON.stringify({}, null, '  ');

  formula() {
    this.jsonlogic = this.form;
  }

  logic() {
    this.jsonlogicresult = jsonLogic.apply(JSON.parse(this.jsonlogic), JSON.parse(this.data));
  }

  js2jsonlogic() {
    this.formula();
    this.logic();
    this.operations = this.jsonlogic;
  }
}
