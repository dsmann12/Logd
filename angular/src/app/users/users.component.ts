import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe((response) => {
      if (response.success) {
        this.users = response.users;
        console.log(this.users);
      }
    })
  }

}
