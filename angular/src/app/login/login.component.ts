import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    const user = {
      username: form.value.username,
      password: form.value.password
    }
    
    this.authService.authenticateUser(user).subscribe(
      (response) => {
        if (response.success) {
          console.log('In login');
          // store user data
          this.authService.storeUserData(response.token, response.user);

          // navigate to home
          this.router.navigate(['/games']);
        }
        else {
          console.log('Something went wrong');
          // navigate to login
          this.router.navigate(['/login']);

        }
      }
    );
  }

}
