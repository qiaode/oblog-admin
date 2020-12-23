import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OblogRoutingModule } from './oblog-routing.module';
import {OblogComponent} from './oblog.component';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { BolgContentComponent } from './bolg-content/bolg-content.component';
import { ArticleComponent } from './article/article.component';
import { BolgSortComponent } from './bolg-sort/bolg-sort.component';
import {BolgEditorComponent} from './bolg-editor/bolg-editor.component';
import {QuillModule} from 'ngx-quill';
import {FormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';


@NgModule({
  declarations: [OblogComponent, BolgContentComponent, ArticleComponent, BolgSortComponent, BolgEditorComponent],
  imports: [
    CommonModule,
    OblogRoutingModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzDropDownModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzButtonModule,
    QuillModule.forRoot(),
    NzFormModule,
    FormsModule,
    NzInputModule,
    NzRadioModule,
    NzDrawerModule,
    NzSelectModule,
    NzDatePickerModule,
    NzCardModule,
    NzCheckboxModule
  ],
  exports: []
})
export class OblogModule { }
