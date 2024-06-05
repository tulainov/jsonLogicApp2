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
  MatTreeNodeToggle
} from "@angular/material/tree";
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    TreeAndLogicComponent,
    TreeDemoComponent,
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
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
