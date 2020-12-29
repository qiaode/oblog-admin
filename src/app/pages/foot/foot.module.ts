import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FootComponent} from './foot.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';


@NgModule({
  declarations: [FootComponent],
  imports: [
    CommonModule,
    NzLayoutModule
  ],
  exports: [
    FootComponent
  ]
})
export class FootModule {
}
