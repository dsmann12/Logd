import { DataService } from './../data.service';
import { HeaderComponent } from './../header/header.component';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from './../auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.css']
})
export class GameDashboardComponent implements OnInit {
  //just change to objects. Undefined is false? so make undefined when making false
  @Input() game: any;

  // the value of these properties when loaded
  // when toggled, they 
  backlogged: Boolean = false;
  rating: Number = 0;

  play: any;
  like: any;
  ratingObj: any;
  @Input() review: any;
  

  user: any;
  userSubscription: Subscription;

  
  constructor(private authService: AuthService,
              private http: Http,
              private dataService: DataService) { }

  ngOnInit() {
    // when initialized
    // if user logged in
    // check if user has played, liked, rated or added to watchlist this game

    if (this.authService.loggedIn()) {

      this.user = this.authService.user;
      
      this.dataService.getPlay(this.game._id, this.user._id)
        .subscribe((response) => {
          if (response.success) {
            this.play = response.play;
          } else {
            console.log(response.msg);
          }
        });

      this.dataService.getGameLike(this.game._id, this.user._id)
        .subscribe((response) => {
          if (response.success) {
            this.like = response.like;
          } else {
            console.log(response.msg);
          }
        });


      //check if user has added game to backlog
      this.dataService.getBackloggedGame(this.user._id, this.game._id)
        .subscribe((response) => {
          if (response.success) {
            this.backlogged = true;
          } else {
            console.log(response.msg);
          }
        });

        // get rating for game if it exists
        this.dataService.getRating(this.game._id, this.user._id)
        .subscribe((response) => {
          if (response.success) {
            this.ratingObj = response.rating;
            this.rating = this.ratingObj.rating;
          }
        });
    }
  }

  togglePlay() {
    if(!this.play) {
      this.dataService.postPlay(this.game._id, this.user._id)
        .subscribe((response) => {
          if (response.success) {
            this.play = response.play;
          } else {
            console.log(response.msg);
          }
        });
    } else {
      this.dataService.deletePlay(this.play._id)
        .subscribe((response) => {
          if (response.success) {
            this.play = undefined;
          } else {
            console.log(response.msg);
          }
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
          }
        });
    }
  }

  toggleBacklog() {
    if (!this.backlogged) {
      this.dataService.addBackloggedGame(this.user._id, this.game)
        .subscribe((response) => {
          if (response.ok) {
            this.backlogged = true;
          } else {
            console.log('An error occurred');
          }
        });
    } else {
      this.dataService.deleteBackloggedGame(this.user._id, this.game._id)
        .subscribe((response) => {
          if (response.ok) {
            this.backlogged = false;
          } else {
            console.log('An error occurred');
          }
        })
    }
  }

  onRated(rating) {
    this.rating = +rating;
  }

}
