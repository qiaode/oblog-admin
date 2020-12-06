import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OblogComponent} from './oblog.component';
import {BolgEditorComponent} from './bolg-editor/bolg-editor.component';

const routes: Routes = [
  { path: '', component: OblogComponent},
  { path: 'oblog/editor', component: BolgEditorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OblogRoutingModule { }
