/*
 * Angular 2 decorators and services
 */

/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';


import jquery from 'jquery';

declare var jQuery: JQueryStatic;
declare var $: JQueryStatic;

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Editor!';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
    console.log(jquery);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
