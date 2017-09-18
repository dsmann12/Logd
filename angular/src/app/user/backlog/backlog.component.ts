import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {
  backlog: any[];
  page = 1;
  start = 0;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.userService.user.subscribe((user) => {
      if (user) {
        this.backlog = user.backlog;
        this.route.params.subscribe((params: Params) => {
          if (params['page'] > 1) {
            this.page = +params['page'];
            this.start = (this.page - 1) * 10;
          }
          console.log(this.backlog);
        });
      }
    });
  }

}
