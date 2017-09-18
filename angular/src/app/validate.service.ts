import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  //must check if there are users with same email or username

  validateRegister(user){
    if(user.name == undefined || !(this.validateEmail(user.email)) || !(this.confirmPassword(user.password, user.confirmPassword)) || user.username == undefined || user.password == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  confirmPassword(password, confirmPassword) {
    if (password === confirmPassword) {
      console.log('True');
      return true;
    } else {
      console.log('False');
      console.log('Password: ', password);
      console.log('Confirm Password ', confirmPassword);
      return false;
    }
  }

}
