import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogListItemComponent } from './log-list-item.component';

describe('LogListItemComponent', () => {
  let component: LogListItemComponent;
  let fixture: ComponentFixture<LogListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
