import { DataService } from './../data.service';
import { AuthService } from './../auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-review',
  templateUrl: './game-review.component.html',
  styleUrls: ['./game-review.component.css']
})
export class GameReviewComponent implements OnInit {
  @Input() review: any;
  like: any;
  constructor(private authService: AuthService,
              private dataService: DataService) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.dataService.getReviewLike(this.review._id, this.authService.user._id)
        .subscribe((response) => {
          if (response.success) {
            this.like = response.like;
          }
        });
    }
  }

  toggleLike() {
    if (!this.like) {
      this.dataService.addReviewLike(this.review._id, this.authService.user._id)
        .subscribe((response) => {
          if (response.success) {
            this.like = response.like;
            this.review.likesCount = this.review.likesCount + 1;
          } else {
            console.log(response.msg);
          }
        });
    } else {
      this.dataService.deleteLike(this.like._id)
        .subscribe((response) => {
          if (response.success) {
            this.like = undefined;
            this.review.likesCount = this.review.likesCount - 1;
          }
        });
    }
  }

}
