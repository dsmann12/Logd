import { AuthService } from './../auth.service';
import { DataService } from './../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  id: String;
  list: any;
  like: any;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.dataService.getListById(this.id).subscribe(
          (response) => {
            this.list = response.json();
            if (this.authService.loggedIn()) {
              this.dataService.getListLike(this.list._id, this.authService.user._id)
              .subscribe((likeResponse) => {
                if (likeResponse.success) {
                  this.like = likeResponse.like;
                }
              });
            }
          }
        );
      }
    );
  }

  toggleLike() {
    if(!this.like) {
      console.log('Like');
      this.dataService.addListLike(this.list._id, this.authService.user._id)
        .subscribe((response) => {
          if (response.success) {
            this.like = response.like;
          } else {
            console.log(response.msg);
          }
        });
    } else {
      console.log('Delete');
      this.dataService.deleteLike(this.like._id)
        .subscribe((response) => {
          if (response.success) {
            this.like = undefined;
          }
        });
    }
  }

}
