import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-mini',
  templateUrl: './user-list-mini.component.html',
  styleUrls: ['./user-list-mini.component.css']
})
export class UserListMiniComponent implements OnInit {
  @Input() users: any[];
  
  constructor() { }

  ngOnInit() {
  }

}
