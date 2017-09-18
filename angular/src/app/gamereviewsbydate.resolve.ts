import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class GameReviewsByDateResolve implements Resolve<any> {
    constructor(private dataService: DataService) {}

    resolve(route: ActivatedRouteSnapshot) {
        console.log('Page is ', route.params['page']);
        return this.dataService.getRecentGameReviews(route.params['id'], route.params['page']);
    }
}