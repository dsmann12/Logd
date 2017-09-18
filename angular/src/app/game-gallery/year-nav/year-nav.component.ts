import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-year-nav',
  templateUrl: './year-nav.component.html',
  styleUrls: ['./year-nav.component.css']
})
export class YearNavComponent implements OnInit {
  decade: number;
  years: number[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params.subscribe((params: Params) => {
      this.decade = +params['decade'];

      for (let i = 0; i < 10; i++) {
        this.years.splice(i, 1, this.decade + i);;
      }
    })
  }

}
