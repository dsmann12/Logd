import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  url = 'http://localhost:8080/api'

  constructor(private http: Http) {
    if (this.loggedIn() && !this.user) {
      this.loadUser();
      this.loadToken();
      console.log('AuthService: ', this.user);
    }
  }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + '/users/register', user, {headers: headers})
      .map(response => response.json());
  }

  authenticateUser(user){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + '/users/authenticate', user,{headers: headers})
      .map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loadUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.user = user;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
}
