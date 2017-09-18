import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  user: BehaviorSubject<any> = new BehaviorSubject(undefined);

  constructor(private dataService: DataService) { }

  getUser() {
    return this.user.asObservable();
  }

  refresh(username) {
    this.dataService.getUserByUsername(username).subscribe((response) => {
      if (response.success) {
        // let userObj = response.user;
        // let popularReviews = userObj.reviews.sort()
        this.user.next(response.user);
      }
    });
  }

}
