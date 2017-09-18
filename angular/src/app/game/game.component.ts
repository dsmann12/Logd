import { Observable } from 'rxjs/Observable';
import { DataService } from './../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  id: Number;
  game: any;
  popularReviews: any[];
  observe: Observable<any>;


  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
   }

  ngOnInit() {
    this.dataService.getGameByIGDBId(this.id).subscribe(
      (gameResponse) => {
        this.game = gameResponse.json();
        console.log(this.game);
        // sort reviews
        // need to do this in aggregate on backend or in service
        this.popularReviews = this.game.reviews.slice();
        this.popularReviews.sort((a, b) => {
          if (a.likesCount < b.likesCount) {
            return 1;
          } else if (a.likesCount > b.likesCount) {
            return -1;
          } else {
            return 0;
          }
        });
      }
    );
  }

}
