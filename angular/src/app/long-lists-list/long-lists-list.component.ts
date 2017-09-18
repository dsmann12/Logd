import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-long-lists-list',
  templateUrl: './long-lists-list.component.html',
  styleUrls: ['./long-lists-list.component.css']
})
export class LongListsListComponent implements OnInit {
  @Input() lists: any[];
  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

}
