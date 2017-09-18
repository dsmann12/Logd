import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from './../../user.service';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {
  lists: any[];
  page = 1;
  start = 0;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.userService.user.subscribe((user) => {
      if (user) {
        this.lists = user.lists;
        console.log(this.lists);
        this.route.params.subscribe((params: Params) => {
          if (params['page'] > 1) {
            this.page = +params['page'];
            console.log('Page', this.page);
            this.start = (this.page-1) * 10;
            console.log(this.lists.slice(this.start, this.start + 10));
          }
        });
        console.log('Otherwise', this.page);
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
