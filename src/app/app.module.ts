import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { TreeAndLogicComponent } from './tree-and-logic/tree-and-logic.component';
import {
  MatNestedTreeNode,
  MatTree,
  MatTreeNode,
  MatTreeNodeDef, MatTreeNodeOutlet,
  MatTreeNodePadding,
  MatTreeNodeToggle,
} from "@angular/material/tree";
import { MatFormFieldModule } from '@angular/material/form-field';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import { FinalTryComponent } from './final-try/final-try.component';
import {MatFormField} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import { NodeComponent } from './node/node.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    TreeAndLogicComponent,
    TreeDemoComponent,
    FinalTryComponent,
    NodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTree,
    MatTreeNodePadding,
    MatTreeNode,
    MatNestedTreeNode,
    MatIcon,
    MatTreeNodeToggle,
    MatTreeNodeDef,
    MatIconButton,
    MatTreeNodeOutlet,
    MatButton,
    MatFormField,
    MatOption,
    MatSelect,
    MatFormFieldModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
