import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BolgEditorComponent} from './bolg-editor.component';
import {QuillModule} from 'ngx-quill';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [BolgEditorComponent],
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    NzButtonModule,
    NzLayoutModule,
    FormsModule
  ],
  exports: [BolgEditorComponent]
})
export class BlogEditorModule { }
