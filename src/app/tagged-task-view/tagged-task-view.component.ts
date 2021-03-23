import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscriber } from 'rxjs';
import { DateService } from '../service/date.service';

@Component({
  selector: 'app-tagged-task-view',
  templateUrl: './tagged-task-view.component.html',
  styleUrls: ['./tagged-task-view.component.scss']
})
export class TaggedTaskViewComponent implements OnInit {


  constructor(public dateService: DateService) { }


  // yesterday: string = "";
  // date: string = this.dateService.getCurrentDate();
  // tomorrow: string = "";

  yesterday: Subject<string> = new Subject()
  date: Subject<string> = new Subject()
  tomorrow: Subject<string> = new Subject()
  currentDate: string = this.dateService.getCurrentDate() 
 
  ngOnInit(): void {
    // this.yesterday = this.dateService.getPreviousDate(this.date);
    // this.tomorrow = this.dateService.getNextDate(this.date);
    this.updateDate(this.currentDate);

  }

  ngAfterViewInit():void {
    setTimeout(()=>{this.updateDate(this.currentDate);},0)
    
  }

  updateDate(newDate: string) {
    this.yesterday.next(this.dateService.getPreviousDate(newDate));
    this.date.next(newDate);
    this.tomorrow.next(this.dateService.getNextDate(newDate));
  }

  nextDate() {
    // this.yesterday = this.date;
    // this.date = this.tomorrow;
    // this.tomorrow = this.dateService.getNextDate(this.tomorrow);
    this.currentDate = this.dateService.getNextDate(this.currentDate)
    this.updateDate(this.currentDate)
    console.log(this.currentDate);
  }

  previousDate() {
    // this.tomorrow = this.date;
    // this.date = this.yesterday;
    // this.yesterday = this.dateService.getPreviousDate(this.yesterday);
    this.currentDate = this.dateService.getPreviousDate(this.currentDate)
    this.updateDate(this.currentDate)
    console.log(this.currentDate);
  }

}
