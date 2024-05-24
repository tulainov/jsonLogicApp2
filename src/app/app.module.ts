import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { TreeAndLogicComponent } from './tree-and-logic/tree-and-logic.component';
import { LearnTreeComponent } from './learn-tree/learn-tree.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    TreeAndLogicComponent,
    LearnTreeComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
