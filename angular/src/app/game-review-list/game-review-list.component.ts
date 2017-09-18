import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-review-list',
  templateUrl: './game-review-list.component.html',
  styleUrls: ['./game-review-list.component.css']
})
export class GameReviewListComponent implements OnInit {
  @Input() reviews: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

}
