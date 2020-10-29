import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OblogRoutingModule } from './oblog-routing.module';
import {OblogComponent} from './oblog.component';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzIconModule} from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [OblogComponent],
  imports: [
    CommonModule,
    OblogRoutingModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzDropDownModule,
    NzMenuModule,
    NzIconModule
  ],
  exports: [OblogComponent]
})
export class OblogModule { }
