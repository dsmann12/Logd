import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ListsService {
  lists: any[];

  constructor(private dataService: DataService) { }

  getLists() {
    return this.dataService.getLists()
  }
}
