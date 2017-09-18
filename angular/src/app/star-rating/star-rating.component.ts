import { DataService } from './../data.service';
import { Http, Headers } from '@angular/http';
import { AuthService } from './../auth.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() rating: String;
  @Input() disabled = false;
  @Input() game: any;
  @Input() user: any;
  @Output() rated = new EventEmitter<String>();
  @Input() ratingObj: any;
  @Input() name: String;

  constructor(private authService: AuthService,
              private http: Http,
              private dataService: DataService) { }

  ngOnInit() {
    this.user = this.authService.user;
  }

  onChange(value) {
    //rating object {user (ObjectId), rating(Number), date(when)} ? is date necessary
    this.dataService.postRating(this.user._id, this.game._id, +this.rating)
      .subscribe((response) => {
        if (response.success) {
          this.ratingObj = response.rating;
          this.rated.emit(this.rating);
        } else {
          console.log('Reponse error', response.msg);
          this.rating = "0";
        }
      },
      (error) => {
        console.log(error);
        this.rating = "0"
      });

  }

  onDelete() {
    // delete rating
    this.dataService.deleteRating(this.ratingObj._id)
      .subscribe((response) => {
        if (response.success) {
          this.ratingObj = undefined;
          this.rating = "0";
        } else {
          console.log(response.msg);
        }
      });
  }

}
