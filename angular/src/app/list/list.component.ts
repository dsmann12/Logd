import { AuthService } from './../auth.service';
import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() type = '';
  @Input() list: any;
  games: any[] = [];
  like: any;
  user: any;

  constructor(private dataService: DataService,
              private authService: AuthService) { }

  ngOnInit() {
    this.games = this.list.games.slice(0, 5);
    if (this.authService.loggedIn()) {
      this.user = this.authService.user;
      this.dataService.getListLike(this.list._id, this.user._id)
        .subscribe((response) => {
          if (response.success) {
            this.like = response.like;
          } 
        });
    }
  }

  toggleLike() {
    if(!this.like) {
      this.dataService.addListLike(this.list._id, this.user._id)
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
