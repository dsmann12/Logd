import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-picks',
  templateUrl: './staff-picks.component.html',
  styleUrls: ['./staff-picks.component.css']
})
export class StaffPicksComponent implements OnInit {
  games: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getStaffPicks().subscribe(
      (response) => {
        this.games = response.json();
      }
    );
  }

}
