import { Component, OnInit } from '@angular/core';
import { Task } from '../class/task';
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

  previousTaskList: Task[] = [
    {
      name: "walk the dog.",
      date: "2021-03-11",
      finish: true
    },
    {
      name: "play games.",
      date: "2021-03-11",
      finish: true
    },
  ];

  mainTaskList: Task[] = [
    {
      name: "walk the dog.",
      date: "2021-03-12",
      finish: true
    },
    {
      name: "call mum.",
      date: "2021-03-12",
      finish: false
    },
    {
      name: "play PUBG.",
      date: "2021-03-12",
      finish: false
    }
  ];

  nextTaskList: Task[] = [];

  ngOnInit(): void {
    this.yesterday = this.dateService.getPreviousDate(this.date);
    this.tomorrow = this.dateService.getNextDate(this.date);
  }

}
