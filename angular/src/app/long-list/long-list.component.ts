import { AuthService } from './../auth.service';
import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-long-list',
  templateUrl: './long-list.component.html',
  styleUrls: ['./long-list.component.css']
})
export class LongListComponent implements OnInit {
  @Input() list: any;
  games: any[] = [];
  like: any;

  constructor(private dataService: DataService,
              private authService: AuthService) { }

  ngOnInit() {
    this.games = this.list.games.slice(0, 5);
    if (this.authService.loggedIn()) {
      this.dataService.getListLike(this.list._id, this.authService.user._id)
        .subscribe((response) => {
          if (response.success) {
            this.like = response.like;
          }
        });
    }
  }

  toggleLike() {
    if(!this.like) {
      this.dataService.addListLike(this.list._id, this.authService.user._id)
        .subscribe((response) => {
          if (response.success) {
            this.like = response.like;
            this.list.likesCount = this.list.likesCount + 1;
          } 
        });
    } else {
      this.dataService.deleteLike(this.like._id)
        .subscribe((response) => {
          if (response.success) {
            this.like = undefined;
            this.list.likesCount = this.list.likesCount - 1;
          }
        });
    }
  }
}
