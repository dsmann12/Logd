import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-mini-item',
  templateUrl: './user-list-mini-item.component.html',
  styleUrls: ['./user-list-mini-item.component.css']
})
export class UserListMiniItemComponent implements OnInit {
  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}
