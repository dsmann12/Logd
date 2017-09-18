import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewEditComponent } from './review-edit.component';

describe('ReviewEditComponent', () => {
  let component: ReviewEditComponent;
  let fixture: ComponentFixture<ReviewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
