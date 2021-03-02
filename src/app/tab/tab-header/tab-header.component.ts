import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss']
})
export class TabHeaderComponent implements OnInit {
  @Input('date') inputDate?: string;
  date: string = '';
  isToday: boolean = false;


  constructor() {

  }

  ngOnInit(): void {
    if(this.inputDate) {
      this.date = this.inputDate;
    }

    if(this.date == this.getCurrentDate()) {
      this.isToday = true;
    }
  }

  getCurrentDate() {
    return new Date().toISOString().split('T')[0];
  }

}
