import { Component } from '@angular/core';
import * as jsonLogic from 'json-logic-js';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { LogicNode } from "./LogicNode";
import { MatTreeNestedDataSource, MatTreeNodeToggle, MatTreeNode } from "@angular/material/tree";
import { NestedTreeControl } from "@angular/cdk/tree";

// TODO: add the json string with JSON pipe

@Component({
    selector: 'app-tree-and-logic',
    templateUrl: './tree-and-logic.component.html',
    styleUrls: ['./tree-and-logic.component.css']
})
export class TreeAndLogicComponent {

  logic = this.formBuilder.group({
    nodes: this.formBuilder.array([])
  });

  dataSource = new MatTreeNestedDataSource<LogicNode>();
  treeControl = new NestedTreeControl<LogicNode>
                                                    (node => node.children);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addNode();
  }

  // get nodes() {
  //     return this.logic.get('nodes') as FormArray;
  // }

  addNode() {

      // this.logic.push(node.children);
  }


  refreshPage() {
      window.location.reload();
  }

  hasChild = (_: number, node: LogicNode) => {
        return node && node.children && node.children.length > 0;
    };
}


