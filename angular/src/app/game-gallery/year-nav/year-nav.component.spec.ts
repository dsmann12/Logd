import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearNavComponent } from './year-nav.component';

describe('YearNavComponent', () => {
  let component: YearNavComponent;
  let fixture: ComponentFixture<YearNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
