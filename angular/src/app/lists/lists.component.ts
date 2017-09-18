import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getLists().subscribe(
      (response) => {
        this.lists = response.json();
      }
    );
  }

}
