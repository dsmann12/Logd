import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeatureItemComponent } from './user-feature-item.component';

describe('UserFeatureItemComponent', () => {
  let component: UserFeatureItemComponent;
  let fixture: ComponentFixture<UserFeatureItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFeatureItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFeatureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
