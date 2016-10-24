import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AceEditorDirective } from 'ng2-ace';

import { EditorComponent } from './editor.component';
import { CodeComponent } from './code/code.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [
    EditorComponent,
    CodeComponent,
    PreviewComponent,
    AceEditorDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class EditorModule {

}
