import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { DateService } from 'src/app/service/date.service';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss']
})
export class TabHeaderComponent implements OnInit {
  @Input('date') inputDate!: string;
  isToday: boolean = false;


  constructor(public dateService: DateService) {

  }

  ngOnInit(): void {
    this.checkIfToday();
  }

  checkIfToday() {
    this.inputDate == this.dateService.getCurrentDate() ? this.isToday = true : this.isToday = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.checkIfToday()
  }

}
