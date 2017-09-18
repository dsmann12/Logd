import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  @Input() reviews: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.getReviews().subscribe(
    //   (response) => {
    //     this.reviews = response.json();
    //   },
    //   (error) => console.log(error)
    // );
  }

}
