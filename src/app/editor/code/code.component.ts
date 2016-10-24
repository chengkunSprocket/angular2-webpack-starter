import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/mode/javascript';

declare var $: any;

@Component({
  selector: 'code-area',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {
  @Input()
  editorData = {};
  editors = ['html', 'css', 'javascript'];

  ngOnInit() {

  }

  constructor(
    private sanitizer: DomSanitizer) { }

  onChange(string, key) {
    // const data = this.editorData;
    // data[key] = string;
    // const body = `
    //   <style>${data.css}</style>
    //   <div>${data.html}</div>
    //   <script>${data.javascript}</script>
    // `;
    // data.body = this.sanitizer.bypassSecurityTrustHtml(body);
  }
}
