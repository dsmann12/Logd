import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongListsListComponent } from './long-lists-list.component';

describe('LongListsListComponent', () => {
  let component: LongListsListComponent;
  let fixture: ComponentFixture<LongListsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongListsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongListsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
