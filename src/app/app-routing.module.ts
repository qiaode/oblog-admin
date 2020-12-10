import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/oblog'},
  {
    path: 'oblog',
    loadChildren: () => import('./pages/oblog/oblog.module').then(m => m.OblogModule),
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
