import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-gallery',
  templateUrl: './game-gallery.component.html',
  styleUrls: ['./game-gallery.component.css']
})
export class GameGalleryComponent implements OnInit {
  games: any[];
  page = 0;
  decade: number;
  year: number;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log('In component: ', this.route.data['games']);
    this.games = this.route.snapshot.data['games'];

    this.route.params.subscribe((params: Params) => {
      if(params['page']){
        this.page = +params['page'];
      }

      if(params['decade']) {
        this.decade = +params['decade'];
      }

      if (params['year']) {
        this.year = +params['year'];
      }

      this.games = this.route.snapshot.data['games'];
      
      
    });

  }

  onNext() {
    if (this.page === 0) {
      this.router.navigate([(this.page + 2)], {relativeTo: this.route});
    } else {
      this.router.navigate(['../', this.page+1], {relativeTo: this.route});
    }
  }

  onPrevious() {
    if (this.page === 2) {
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      this.router.navigate(['../', this.page-1], {relativeTo: this.route});
    }
  }

}
