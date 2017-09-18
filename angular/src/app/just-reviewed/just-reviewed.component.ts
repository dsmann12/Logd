import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-just-reviewed',
  templateUrl: './just-reviewed.component.html',
  styleUrls: ['./just-reviewed.component.css']
})
export class JustReviewedComponent implements OnInit {
  games: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.getGames().subscribe(
    //   (response) => {
    //     this.games = response.json().slice(0, 12);
    //   }
    // );
    this.dataService.getJustReviewed().subscribe((response) => {
      this.games = response.slice(0, 12);
    })
  }

}
