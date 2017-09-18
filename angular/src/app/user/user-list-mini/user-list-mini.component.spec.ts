import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListMiniComponent } from './user-list-mini.component';

describe('UserListMiniComponent', () => {
  let component: UserListMiniComponent;
  let fixture: ComponentFixture<UserListMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
