import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolgEditorComponent } from './bolg-editor.component';

describe('BolgEditorComponent', () => {
  let component: BolgEditorComponent;
  let fixture: ComponentFixture<BolgEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolgEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolgEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
