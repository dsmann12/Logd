import { AuthService } from './../auth.service';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  lists: any[] = [];
  reviews: any[] = [];

  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit() {
    //console.log(this.authService.user);
    this.dataService.getLists().subscribe((response) => {
        this.lists = response.json();
    });

    this.dataService.getRecentReviews().subscribe((reviews) => {
      console.log(reviews);
      this.reviews = reviews;
    })
  }

}
