import { ValidateService } from './../validate.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, 
              private validateService: ValidateService, 
              private router: Router) { }

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    const username = form.value.username;
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    const confirmPassword = form.value.confirmPassword;
    const user = {
      username: username,
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };

    console.log(user);
    console.log(user.confirmPassword);

    if (!this.validateService.validateRegister(user)) {
      console.log('Invalid user');
      return false;
    }

    //Register User
    this.authService.registerUser(user).subscribe(
      (response) => {
        if (response.success) {
          console.log('Registered');
          this.authService.storeUserData(response.token, response.user);
          this.router.navigate(['/', user.username, 'edit']);
        }
        else {
          console.log('An error occurred');
          console.log(response.msg);
          this.router.navigate(['/register']);
        }
      }
    );
  }

}
