import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGameGalleryComponent } from './user-game-gallery.component';

describe('UserGameGalleryComponent', () => {
  let component: UserGameGalleryComponent;
  let fixture: ComponentFixture<UserGameGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGameGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGameGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
