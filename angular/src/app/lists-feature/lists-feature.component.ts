import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-feature',
  templateUrl: './lists-feature.component.html',
  styleUrls: ['./lists-feature.component.css']
})
export class ListsFeatureComponent implements OnInit {
  lists: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getLists().subscribe(
      (response) => {
        this.lists = response.json().slice(0, 3);
        console.log(this.lists);
      }
    );
  }

}
