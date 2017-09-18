import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListMiniItemComponent } from './user-list-mini-item.component';

describe('UserListMiniItemComponent', () => {
  let component: UserListMiniItemComponent;
  let fixture: ComponentFixture<UserListMiniItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListMiniItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListMiniItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
