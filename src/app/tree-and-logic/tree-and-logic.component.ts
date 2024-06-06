import { Component } from '@angular/core';
import * as jsonLogic from 'json-logic-js';
import {FormBuilder, FormArray, Validators, FormGroup} from '@angular/forms';
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
  treeControl = new NestedTreeControl<LogicNode>(node => node.children);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addNode(); // Add the initial node
  }

  get nodes() {
    return this.logic.get('nodes') as FormArray;
  }

  createNode(): FormGroup {
    return this.formBuilder.group({
      firstVal: [null, Validators.required],
      condition: ['', Validators.required],
      secondVal: [null, Validators.required],
      logicalOperator: ['and', Validators.required],
      children: this.formBuilder.array([])
    });
  }

  addNode(parentNode?: LogicNode) {
    const nodeGroup = this.createNode();

    const newNode: LogicNode = {
      firstVal: (nodeGroup.value.firstVal as number | null) ?? 0,
      condition: nodeGroup.value.condition as string,
      secondVal: (nodeGroup.value.secondVal as number | null) ?? 0,
      logicalOperator: nodeGroup.value.logicalOperator as string,
      children: []
    };

    if (parentNode) {
      parentNode.children = parentNode.children || [];
      parentNode.children.push(newNode);
    } else {
      this.nodes.push(nodeGroup);
      this.dataSource.data = [...this.dataSource.data, newNode];
    }

    this.updateTreeData();
  }

  updateTreeData() {
    this.dataSource.data = [...this.dataSource.data];
    this.treeControl.dataNodes = this.dataSource.data;
    this.treeControl.expandAll();
  }

  hasChild = (_: number, node: LogicNode) => {
    return node && node.children && node.children.length > 0;
  };

  performJsonLogic(node: LogicNode): boolean {
    const { firstVal, condition, secondVal, logicalOperator, children } = node;

    let result = jsonLogic.apply({
      [condition]: [{ "var": "firstVal" }, secondVal]
    }, {
      firstVal
    });

    if (children && children.length > 0) {
      const childResults = children.map(child => this.performJsonLogic(child));
      if (logicalOperator === 'and') {
        result = result && childResults.every(res => res);
      } else if (logicalOperator === 'or') {
        result = result || childResults.some(res => res);
      }
    }

    return result;
  }

  removeNode(node: LogicNode) {
    // Function to remove a node from the tree
  }
}
