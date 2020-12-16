import {Component, OnInit} from '@angular/core';
import {OblogService} from '../../serves/oblog.service';

@Component({
  selector: 'app-bolg-editor',
  templateUrl: './bolg-editor.component.html',
  styleUrls: ['./bolg-editor.component.scss']
})
export class BolgEditorComponent implements OnInit {

  constructor(private blogService: OblogService) {
  }

  blogContent = '请输入内容';

  characterCount = '1/100';
  blogTitle?: string;
  visible = false;
  inputValue: string | null = null;
  showSortInput = false;

  submitBlob() {
    this.blogService.addBlog(this.blogContent).subscribe();
  }

  blogTitleChange() {
    this.characterCount = this.blogTitle.length + '/100';
  }

  ngOnInit(): void {
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }


}
