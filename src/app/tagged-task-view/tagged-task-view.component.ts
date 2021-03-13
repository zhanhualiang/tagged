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
      id: 11,
      uid: 1,
      title: "walk the dog",
      desc: "",
      taskOrder: 1,
      date: "2021-03-12",
      finish: 1,
      share: 0,
    },
    {
      id: 12,
      uid: 1,
      title: "walk the dog twice",
      desc: "He wants it so bad!",
      taskOrder: 2,
      date: "2021-03-12",
      finish: 0,
      share: 0,
    },
  ];

  mainTaskList: Task[] = [
    {
      id: 13,
      uid: 1,
      title: "call Tim",
      desc: "for moving out",
      taskOrder: 1,
      date: "2021-03-13",
      finish: 0,
      share: 0,
    },
    {
      id: 14,
      uid: 1,
      title: "Play pubg.",
      desc: "",
      taskOrder: 2,
      date: "2021-03-13",
      finish: 0,
      share: 0,
    }
  ];

  nextTaskList: Task[] = [];

  ngOnInit(): void {
    this.yesterday = this.dateService.getPreviousDate(this.date);
    this.tomorrow = this.dateService.getNextDate(this.date);
  }

}
