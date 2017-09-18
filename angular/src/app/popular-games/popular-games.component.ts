import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-popular-games',
  templateUrl: './popular-games.component.html',
  styleUrls: ['./popular-games.component.css']
})
export class PopularGamesComponent implements OnInit {
  // imageURLs: string[] = [
  //   "/assets/SOTC.png",
  //   "/assets/me.png",
  //   "/assets/hl2.png",
  //   "/assets/journey.png"
  // ];
  games: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.dataService.getGames().subscribe(
    //   (response) => {
    //     // console.log(response.json());
    //     const list = response.json();
    //     // console.log(list);
    //     const random = this.randomize(list);
    //     random.forEach(
    //       (game) => {
    //         this.games.push(game);
    //       }
    //     );
    //   },
    //   (error) => console.log(error)
    // );
    this.dataService.getPopularGames().subscribe((response) => {
      if (response.success) {
        this.games = response.games.splice(0, 4);
      }
    })
  }

  // randomize games
  randomize(games) {
    const list = [];
    for(let i = 0; i < 4; i++) {
      const index = this.getRandomInt(0, games.length);
      const game = games[index];
      // check if game with id is already in list
      const bool = list.find(
        (element) => {
          return element.id === game.id;
        }
      );
      
      if(bool) {
        // console.log('Already listed');
        i--;
      }
      else {
        list.push(game);
      }
    }

    // console.log('list is');
    // console.log(list);

    return list;
  }

  //random number
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

/*
this.dataService.getGames().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    */

}
