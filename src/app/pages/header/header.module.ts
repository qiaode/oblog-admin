import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NzLayoutModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
