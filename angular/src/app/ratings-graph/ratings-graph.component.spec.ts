import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsGraphComponent } from './ratings-graph.component';

describe('RatingsGraphComponent', () => {
  let component: RatingsGraphComponent;
  let fixture: ComponentFixture<RatingsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
