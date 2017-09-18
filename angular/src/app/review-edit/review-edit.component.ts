import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { DataService } from './../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  id: String;
  reviewId: String;
  game: any;
  liked: Boolean = false;
  user:any;
  logDate: any;
  rating: Number = 0;
  datePickerOptions: IMyDpOptions = {};
  like: any;
  ratingObj: any;
  editMode: Boolean = false;
  review: any;
  date: Date;
  text: String;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private authService: AuthService,
              private http: Http) { 
      this.route.params.subscribe((params: Params) => {
        this.id = params['id'];
        this.reviewId = params['reviewId'];
        this.editMode = (params['reviewId'] != null);
      });
    }

  ngOnInit() {
    this.user = this.authService.user;

    if (this.editMode) {
      this.dataService.getReview(this.reviewId)
        .subscribe((response) => {
          if (response.success) {
            console.log('Edit mode!');
            this.review = response.review;
            this.game = this.review.game;
            this.rating = this.review.rating;
            console.log(this.review);
            this.date = new Date(this.review.logDate);
            this.logDate = this.review.logDate;
            this.text = this.review.text;
            this.dataService.getGameLike(this.game._id, this.user._id)
            .subscribe((response) => {
              if (response.success) {
                this.like = response.like;
              }
            });
          }
        })
    } else {

      this.dataService.getGameById(this.id).subscribe((response) => {
          this.game = response.json();
          
          // get rating for game if it exists
          this.dataService.getRating(this.game._id, this.user._id)
            .subscribe((response) => {
              if (response.success) {
                this.ratingObj = response.rating;
                this.rating = this.ratingObj.rating;
              }
            });

            this.dataService.getGameLike(this.game._id, this.user._id)
            .subscribe((response) => {
              if (response.success) {
                this.like = response.like;
              }
            });
      });
    }

    
  }

  toggleLike() {
    if (!this.like) {
      this.dataService.addGameLike(this.game._id, this.user._id)
        .subscribe((response) => {
          if (response.success) {
            this.like = response.like;
          } else {
            console.log(response.msg);
          }
        });
    } else {
      this.dataService.deleteLike(this.like._id)
        .subscribe((response) => {
          if (response.success) {
            this.like = undefined;
          } else {
            console.log(response.msg);
          }
        });
    }
  }

  submit(form: NgForm) {
    console.log(this.rating);
    console.log(this.editMode);
    const body = {
      // user: this.user._id,
      game: this.game._id,
      rating: this.rating,
      text: form.value.review,
      logDate: this.logDate,
      // date: Date.now()
    };

    // const body = {
    //   review: review
    // };
    
    if (this.editMode) {
      // this.http.put('http://localhost:3000/reviews/' + this.reviewId, body)
      //   .map(response => response.json())
      this.dataService.updateReview(this.reviewId, body)
        .subscribe((response) => {
          if (response.success) {
            console.log(response.msg);
          }
        })
    } else {
      // this.http.post('http://localhost:3000/reviews', body)
      // .map(response => response.json())
      this.dataService.postReview(body)
      .subscribe((response) => {
        console.log(response);
      });
    } 
  }

  onRated(rating: String) {
    this.rating = +rating;
  }

  onDatePicked(date: any) {
    this.logDate = date;
    console.log(date);
  }

  onDelete() {
    // this.http.delete('http://localhost:3000/reviews/' + this.reviewId)
    //   .map(response => response.json())
    console.log('in delete');
    console.log('reviewid', this.reviewId);
    this.dataService.deleteReview(this.reviewId)
      .subscribe((response) => {
        if (response.success) {
          console.log(response.msg);
        }
      });
  }

}
