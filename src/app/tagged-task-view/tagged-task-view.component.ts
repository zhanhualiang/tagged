import { Component, OnInit } from '@angular/core';
import { Task } from '../class/task';

@Component({
  selector: 'app-tagged-task-view',
  templateUrl: './tagged-task-view.component.html',
  styleUrls: ['./tagged-task-view.component.css']
})
export class TaggedTaskViewComponent implements OnInit {

  yesterday: string = "";
  date: string = "2021-02-28";
  tomorrow: string = "";

  previousTaskList: Task[] = [
    {
      name: "walk the dog.",
      date: "2021-02-27",
      finish: true
    },
    {
      name: "play games.",
      date: "2021-02-27",
      finish: true
    },
  ];

  mainTaskList: Task[] = [
    {
      name: "walk the dog.",
      date: "2021-02-27",
      finish: true
    },
    {
      name: "call mum.",
      date: "2021-02-27",
      finish: false
    },
    {
      name: "play PUBG.",
      date: "2021-02-27",
      finish: false
    }
  ];

  nextTaskList: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    this.yesterday = this.getPreviousDate(this.date);
    this.tomorrow = this.getNextDate(this.date);
  }

  getCurrentDate() {
    return new Date().toISOString().split('T')[0];
  }

  getPreviousDate(day: string) {
    return new Date(new Date(day).getTime() - 864e5).toISOString().split('T')[0];
  }

  getNextDate(day: string) {
    return new Date(new Date(day).getTime() + 864e5).toISOString().split('T')[0];
  }

}
