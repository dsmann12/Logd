import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from './../user.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  username: String;
  user: any;

  constructor(private authService: AuthService,
              private userService: UserService,
              private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.username = params['username'];
      this.userService.refresh(this.username);
      
    });
  }

  ngOnInit() {

    
    this.userService.user.subscribe((user) => {
      this.user = user;
      console.log('In subscription', this.user);
    });
    
  }

}
