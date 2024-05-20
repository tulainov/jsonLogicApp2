import { Component } from '@angular/core';
import { JsonLogicClass } from '../scripts/json-logic';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    jsonLogicClass = new JsonLogicClass();

    applyLogic() {
        this.jsonLogicClass.js2jsonlogic();
    }
}
