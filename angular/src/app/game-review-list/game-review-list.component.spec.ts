import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameReviewListComponent } from './game-review-list.component';

describe('GameReviewListComponent', () => {
  let component: GameReviewListComponent;
  let fixture: ComponentFixture<GameReviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameReviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
