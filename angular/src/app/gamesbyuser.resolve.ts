import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class GamesByUserResolve implements Resolve<any> {
    constructor(private dataService: DataService,
                private userService: UserService
            ) {}

    resolve(route: ActivatedRouteSnapshot) {
        console.log('Page is ', route.params['page']);
        const games = new Observable<any>(this.userService.user.getValue().played);
    }
}