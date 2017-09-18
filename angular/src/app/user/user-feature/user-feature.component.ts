import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-feature',
  templateUrl: './user-feature.component.html',
  styleUrls: ['./user-feature.component.css']
})
export class UserFeatureComponent implements OnInit {
  @Input() users: any[];
  constructor() { }

  ngOnInit() {
  }

}
