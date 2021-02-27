import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tagged-today-tab',
  templateUrl: './tagged-today-tab.component.html',
  styleUrls: ['./tagged-today-tab.component.css']
})
export class TaggedTodayTabComponent implements OnInit {

  Date: string = "2021-02-27";
  isToday: boolean = false;

  todayTaskList = [
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
    if(this.Date == this.getCurrentDate()) {
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
