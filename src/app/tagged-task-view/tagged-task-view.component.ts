import { Component, OnInit } from '@angular/core';
import { DateService } from '../service/date.service';

@Component({
  selector: 'app-tagged-task-view',
  templateUrl: './tagged-task-view.component.html',
  styleUrls: ['./tagged-task-view.component.scss']
})
export class TaggedTaskViewComponent implements OnInit {


  constructor(public dateService: DateService) { }


  yesterday: string = "";
  date: string = this.dateService.getCurrentDate();
  tomorrow: string = "";

  ngOnInit(): void {
    this.yesterday = this.dateService.getPreviousDate(this.date);
    this.tomorrow = this.dateService.getNextDate(this.date);

  }

}
