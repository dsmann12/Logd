import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-nav',
  templateUrl: './games-nav.component.html',
  styleUrls: ['./games-nav.component.css']
})
export class GamesNavComponent implements OnInit {
  // searchResults: any[];
  searchResults: Observable<any>;
  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

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

}
