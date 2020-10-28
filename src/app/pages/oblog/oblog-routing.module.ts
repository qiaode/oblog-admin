import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OblogComponent} from './oblog.component';

const routes: Routes = [
  { path: '', component: OblogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OblogRoutingModule { }
