import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-game-gallery',
  templateUrl: './user-game-gallery.component.html',
  styleUrls: ['./user-game-gallery.component.css']
})
export class UserGameGalleryComponent implements OnInit {
  played: any[];
  page: number = 1;
  start: number = 0;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.userService.user.subscribe((user) => {
      if (user) {
        this.played = user.played;
        console.log(this.played);
        this.route.params.subscribe((params: Params) => {
          if (params['page'] > 1) {
            this.page = +params['page'];
            this.start = (this.page - 1) * 50;
          }
        });
      }
    });
  }

  onNext() {
    if (this.page === 1) {
      this.router.navigate([(this.page + 1)], {relativeTo: this.route});
    } else {
      this.router.navigate(['../', this.page+1], {relativeTo: this.route});
    }
  }

  onPrevious() {
    if (this.page === 2) {
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      this.router.navigate(['../', this.page-1], {relativeTo: this.route});
    }
  }

}
