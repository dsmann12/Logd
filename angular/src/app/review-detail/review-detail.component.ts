import { AuthService } from './../auth.service';
import { DataService } from './../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {
  id: String;
  review: any;
  like: any;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private authService: AuthService) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['reviewId'];
    })
   }

  ngOnInit() {
    console.log('in review detail');
    this.dataService.getReview(this.id).subscribe((response) => {
      if (response.success) {
        this.review = response.review;
        this.dataService.getReviewLike(this.id, this.review.user._id)
          .subscribe((likeResponse) => {
            if (likeResponse.success) {
              this.like = likeResponse.like;
            }
          });
      }
    });
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
