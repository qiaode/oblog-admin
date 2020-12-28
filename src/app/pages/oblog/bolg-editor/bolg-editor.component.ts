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
  sortName: string | null = null;
  showSortInput = true;
  sorts: TitleSort[] = [];

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

  addBlogSort(): void {
    const titleSort = new TitleSort(null, this.sortName, true);
    this.sorts.push(titleSort);
    console.log(this.sorts);
  }

  clearSortNameInput(sort): void {
    const index = this.sorts.indexOf(sort);
    this.sorts.splice(index, 1);
    console.log(this.sorts);
  }

  selectBlogSort(ids: number[]): void {
    ids.forEach(id => {
      if (!this.checkTitleSort(id)) {
        this.sorts.push(new TitleSort(id, 'aa', false));
      }
    });
    console.log(this.sorts);
  }

  checkTitleSort(id: number): boolean {
    this.sorts.forEach(titleSort => {
      if (id == titleSort.id) {
        return true;
      }
    });
    return false;
  }

}

export class TitleSort {
  constructor(id: number, sortName: string, isNew: boolean) {
    this.sortName = sortName;
    this.isNew = isNew;
    this.id = id;
  }

  sortName: string;
  isNew: boolean;
  id: number;
}
