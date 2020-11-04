import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BolgEditorComponent} from './bolg-editor.component';
import {QuillModule} from 'ngx-quill';




@NgModule({
  declarations: [BolgEditorComponent],
  imports: [
    CommonModule,
    QuillModule.forRoot()
  ],
  exports: [BolgEditorComponent]
})
export class BlogEditorModule { }
