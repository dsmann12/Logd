import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ratings-graph',
  templateUrl: './ratings-graph.component.html',
  styleUrls: ['./ratings-graph.component.css']
})
export class RatingsGraphComponent implements OnInit {
  @Input() graph: any;
  @Input() rating: any;
  maxIndex: number;
  max: number;

  constructor() { }

  ngOnInit() {
    this.maxIndex = this.graph.max;
    this.max = this.graph.ratings[this.maxIndex];
  }
}
