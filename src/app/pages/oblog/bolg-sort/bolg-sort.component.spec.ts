import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolgSortComponent } from './bolg-sort.component';

describe('BolgSortComponent', () => {
  let component: BolgSortComponent;
  let fixture: ComponentFixture<BolgSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolgSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolgSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
