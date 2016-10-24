import { Component } from '@angular/core';

@Component({
  selector: 'editor-component',
  template: `
    <div>
      <code-area [editorData]="editor"></code-area>
      <preview-area [editorData]="editor"></preview-area>
    </div>
  `
})
export class EditorComponent {

  editor = {}

  constructor() {
    this.editor = {
      html: '',
      css: '',
      javascript: '',
      body: ''
    };
  }

  ngOnInit() {
  }

}
