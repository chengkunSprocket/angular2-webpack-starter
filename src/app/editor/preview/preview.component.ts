/// <reference path="../../../../node_modules/@types/jointjs/index.d.ts" />


import { Component, Input } from '@angular/core';

//import * as joint from 'joint';
import * as d3 from 'd3';

declare var joint: any;

@Component({
  selector: 'preview-area',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  @Input()
  editorData = {};

  ngAfterViewInit() {
    console.log(joint)
    //const graph = new joint.dia.Graph
  }

  onChange() {

  }
}
