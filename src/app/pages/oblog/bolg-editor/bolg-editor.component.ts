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

  submitBlob() {
    this.blogService.addBlog(this.blogContent).subscribe();
  }

  ngOnInit(): void {
  }


}
