import { DataService } from './../data.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {
  logs: any[];

  constructor(private userService: UserService,
              private dataService: DataService) { }

  ngOnInit() {
    this.userService.user.subscribe((user) => {
      if(user) {
        this.logs = user.log;
        console.log("log", this.logs);
      }
    });
  }

  toggleLike(game) {

  }

}
