import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tagged-today-tab',
  templateUrl: './tagged-today-tab.component.html',
  styleUrls: ['./tagged-today-tab.component.css']
})
export class TaggedTodayTabComponent implements OnInit {

  todayTaskList = [
    {
      name: "walk the dog.",
      date: "2020-02-27",
      status: "finish"
    },
    {
      name: "call mum.",
      date: "2020-02-27",
      status: "going"
    },
    {
      name: "play PUBG.",
      date: "2020-02-27",
      status: "going"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todayTaskList, event.previousIndex, event.currentIndex);
  }

}
