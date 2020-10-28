import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OblogRoutingModule } from './oblog-routing.module';
import {OblogComponent} from './oblog.component';


@NgModule({
  declarations: [OblogComponent],
  imports: [
    CommonModule,
    OblogRoutingModule
  ],
  exports: [OblogComponent]
})
export class OblogModule { }
