import { NgForm } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  @Output() datePicked = new EventEmitter<any>();
  @Input() date: any;

  myOptions: INgxMyDpOptions = {
  }

  constructor() { }

  ngOnInit() {
    if (this.date) {
      this.date = {
        date: {
          year: this.date.getFullYear(),
          month: this.date.getMonth()+1,
          day: this.date.getDate()
        } 
      };
    }
  }

  onDateChanged(event: IMyDateModel): void {
    //date selected
    this.datePicked.emit(event.jsdate);
  }

}
