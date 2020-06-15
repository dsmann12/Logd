import { AuthService } from './../auth.service';
import { DataService } from './../data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  games: any[] = [];
  searchResults: Observable<any>;
  search: String = '';
  url = 'https://images.igdb.com/igdb/image/upload/t_cover_small/';
  id: String;
  editMode: Boolean = false;
  list: any;
  name: String;
  description: String;

  constructor(private http: Http,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private dataService: DataService) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = (params['id'] != null);
    });
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      if (this.id ) {
        // get list
        this.dataService.getListById(this.id)
          .map(response => response.json())
          .subscribe((response) => {
            //populate form with list data
            this.list = response;
            this.games = response.games;
            this.name = this.list.title;
            this.description = this.list.description;
          })
      }
    });
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
    this.searchResults = this.http.get('/api/search', requestOptions)
    .map((response) => {
        return response.json();
    });
  }

  onSelectedGame(result) {
    //game is selected, then get from database and store database id in list
    console.log(result);
    this.searchResults = null;
    this.search = '';
    // get result id then get from data base and add result to list
    this.dataService.getGameByIGDBId(result.id)
      .subscribe((response) => {
        this.games.push(response.json());
      });
  }

  onSave() {
    const body = {
      // user: this.authService.user,
      title: this.form.value.name,
      description: this.form.value.description,
      games: this.games,
      comments: [],
      likes: [],
    };

    // const body = {
    //   list: obj
    // };

    // if edit mode
    // call put request
    // else call post request
    if(this.editMode) {
      // this.http.put('http://localhost:3000/lists/' + this.list._id, body)
      //   .map(response => response.json())
      this.dataService.updateList(this.list._id, body)
        .subscribe((response) => {
          if (response.success) {
            this.list = response.list;
          }
        });

    } else {
      //post list
      // this.http.post('http://localhost:3000/lists', body)
      //   .map(response => response.json())
      this.dataService.postList(body)
        .subscribe((response) => {
          if (response.success) {
            this.editMode = true;
            this.list = response.list;
          }
        });
    }
  }

  onDelete() {
    console.log(this.list._id);
    if (this.editMode) {
      // call delete request
      this.dataService.deleteList(this.list._id).subscribe((response) => {
        if (response.success) {
          this.router.navigate(['/games']);
        }
      });
    } else {
      this.router.navigate(['/games']);
    }

    // navigate to games
  }

  onRemove(index) {
    console.log('remove: ', index);
    this.games.splice(index, 1);
  }

}
