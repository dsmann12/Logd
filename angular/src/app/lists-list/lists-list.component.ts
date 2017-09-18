import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lists-list',
  templateUrl: './lists-list.component.html',
  styleUrls: ['./lists-list.component.css']
})
export class ListsListComponent implements OnInit {
  @Input() lists: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

}
