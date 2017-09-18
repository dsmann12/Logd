import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-feature-item',
  templateUrl: './user-feature-item.component.html',
  styleUrls: ['./user-feature-item.component.css']
})
export class UserFeatureItemComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit() {
  }

}
