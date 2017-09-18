import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeatureComponent } from './user-feature.component';

describe('UserFeatureComponent', () => {
  let component: UserFeatureComponent;
  let fixture: ComponentFixture<UserFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
