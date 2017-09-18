import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  reviews: any[];
  users: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRecentReviews().subscribe((reviews) => {
      this.reviews = reviews;
    });

    this.dataService.getUsers().subscribe((response) => {
      if (response.success) {
        this.users = response.users;
      }
    });
  }

}
