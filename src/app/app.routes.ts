import { Routes, RouterModule } from '@angular/router';

import { DataResolver } from './app.resolver';

import { EditorComponent } from './editor/editor.component';


export const ROUTES: Routes = [
  { path: '', component: EditorComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
      return comp.default;
    })
  },
];
