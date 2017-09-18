import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.css']
})
export class ReviewsPageComponent implements OnInit {
  reviews: any[];
  page = 1;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.reviews = this.route.snapshot.data['reviews'];
    console.log('Reviews', this.reviews);
    this.route.params.subscribe((params: Params) => {
      if (params['page'] > 1) {
        this.page = +params['page'];
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
