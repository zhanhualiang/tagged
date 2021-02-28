import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Task } from '../class/task';

@Component({
  selector: 'app-tagged-today-tab',
  templateUrl: './tagged-today-tab.component.html',
  styleUrls: ['./tagged-today-tab.component.css']
})
export class TaggedTodayTabComponent implements OnInit {

  date: string = "2021-02-28";
  isToday: boolean = false;

  todayTaskList: Task[] = [
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
  ]

  constructor() { 
    if(this.date == this.getCurrentDate()) {
      this.isToday = true;
    }
  }

  ngOnInit(): void {  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todayTaskList, event.previousIndex, event.currentIndex);
  }

  getCurrentDate() {
    return new Date().toISOString().split('T')[0];
  }

}
