import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OblogComponent} from './oblog.component';
import {BolgEditorComponent} from './bolg-editor/bolg-editor.component';
import {BolgContentComponent} from './bolg-content/bolg-content.component';

const routes: Routes = [
  {
    path: '', component: OblogComponent,
    children: [
      {
        path: 'oblog/manage', component: BolgContentComponent,
      }
    ]
  },
  { path: 'oblog/editor', component: BolgEditorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OblogRoutingModule { }
