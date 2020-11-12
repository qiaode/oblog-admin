import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OblogRoutingModule } from './oblog-routing.module';
import {OblogComponent} from './oblog.component';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {BlogEditorModule} from '../components/bolg-editor/blog-editor.module';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { BolgContentComponent } from './bolg-content/bolg-content.component';
import { ArticleComponent } from './article/article.component';
import { BolgSortComponent } from './bolg-sort/bolg-sort.component';


@NgModule({
  declarations: [OblogComponent, BolgContentComponent, ArticleComponent, BolgSortComponent],
  imports: [
    CommonModule,
    OblogRoutingModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzDropDownModule,
    NzMenuModule,
    NzIconModule,
    BlogEditorModule,
    NzButtonModule,
    NzButtonModule
  ],
  exports: [OblogComponent]
})
export class OblogModule { }
