import { UserService } from './../../user.service';
import { DataService } from './../../data.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../auth.service';
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  @ViewChild('file') input;
  searchResults: Observable<any>;
  search: String = '';
  favorites: any[] = [];
  avatar: String;
  user: any;
  username: String;
  name: String;
  email: String;
  bio: String;
  date: Number = Date.now();

  constructor(private http: Http,
              private authService: AuthService,
              private dataService: DataService,
              private userService: UserService) { }

  ngOnInit() {
    this.userService.user.subscribe((user) => {
      if (user) {
        this.username = user.username;
        this.name = user.name;
        this.email = user.email;
        this.bio = user.bio;
        this.favorites = user.favorites;
        this.avatar = user.avatar;
        console.log(user);
        this.user = user;
        console.log('This user is ',  this.user);
      }
    });
    
    // this.username = this.user.username;
    // this.name = this.user.name;
    // this.email = this.user.email;
    // this.bio = this.user.bio;
    // this.favorites = this.user.favorites;
    // this.avatar = this.user.avatar;
  }

  onSearch(form: NgForm) {
    const query = form.value.search;
    if(query === '') {
      this.searchResults = null;
      return false;
    }
    let params = new URLSearchParams();
    params.set('query', query);
    let requestOptions = new RequestOptions();
    requestOptions.params = params;
    this.searchResults = this.http.get('/api/search', requestOptions).map(
      (response) => {
        return response.json().body;
      }
    );
  }

  onSelectedGame(result) {
    //game is selected, then get from database and store database id in list
    console.log(result);
    this.searchResults = null;
    this.search = '';
    // get result id then get from data base and add result to list
    this.dataService.getGameByIGDBId(result.id)
      .subscribe((response) => {
        this.favorites.push(response.json());
      });
  }

  onRemove(index) {
    console.log('remove: ', index);
    this.favorites.splice(index, 1);
  }

  onRemoveAvatar() {
    // set avatar to undefined
    this.avatar = undefined;
    console.log(this.input.nativeElement);
    this.input.nativeElement.value = '';
    console.log(this.avatar);
    //set user avatar to undefined
  }

  onUpload() {
    console.log(this.input.nativeElement.files);

    const files: FileList = this.input.nativeElement.files;
    
    if (files && files[0]) {
      let formData = new FormData();
      formData.append('user', this.authService.user.username);    
      formData.append('avatar', files[0]);

      let headers = new Headers();
      headers.append('Authorization', this.authService.authToken);
      
      this.http.post('/api/users/avatar', formData, { headers: headers })
        .map(response => response.json())
        .subscribe((response) => {
          if (response.success) {
            console.log(response.msg);
            this.avatar = response.avatar;
            this.date = Date.now();
            console.log(this.avatar);
          }
        });
    }
  }

  onSubmit() {
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);

    // update user
    const body = {
      data: {
        username: this.username,
        name: this.name,
        email: this.email,
        bio: this.bio,
        avatar: this.avatar,
        favorites: this.favorites
      }
    };

    console.log(body);
    this.http.put('/api/users/' + this.user._id, body, { headers: headers})
      .map(response => response.json())
      .subscribe((response) => {
        if (response.success) {
          // this.authService.storeUserData(this.authService.authToken, response.user);

          this.user = response.user;
          console.log(this.user);
          console.log(this.authService.user);
        } else {
          console.log('Submit failed');
          console.log(response);
        }
      })

  }
}
