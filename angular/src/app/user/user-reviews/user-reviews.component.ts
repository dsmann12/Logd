import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.css']
})
export class UserReviewsComponent implements OnInit {
  reviews: any[];
  page = 1;
  start = 0;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.userService.user.subscribe((user) => {
      if (user) {
        this.reviews = user.reviews;
        this.route.params.subscribe((params: Params) => {
          if (params['page'] > 1) {
            this.page = +params['page'];
            this.start = (this.page - 1) * 10;
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
