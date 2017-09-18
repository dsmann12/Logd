import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-page',
  templateUrl: './lists-page.component.html',
  styleUrls: ['./lists-page.component.css']
})
export class ListsPageComponent implements OnInit {
  lists: any[];
  page: number = 1;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.lists = this.route.snapshot.data['lists'];

    this.route.params.subscribe((params: Params) => {
      if (params['page'] > 1) {
        this.page = +params['page'];
      }

      this.lists = this.route.snapshot.data['lists'];
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
      console.log(this.page);
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      this.router.navigate(['../', this.page-1], {relativeTo: this.route});
    }
  }

}
