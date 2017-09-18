import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsFeatureComponent } from './lists-feature.component';

describe('ListsFeatureComponent', () => {
  let component: ListsFeatureComponent;
  let fixture: ComponentFixture<ListsFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
