import { AuthService } from './../../auth.service';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: any;
  constructor(private userService: UserService,
              private authService: AuthService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    })
  }

}
