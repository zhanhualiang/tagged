import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Task } from '../class/task';
import { DateService } from '../service/date.service';
import { OpenDialogService } from '../service/open-dialog.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-daily-tab',
  templateUrl: './daily-tab.component.html',
  styleUrls: ['./daily-tab.component.scss']
})
export class DailyTabComponent implements OnInit {
  @Input('date') inputDate? : string;
  @Input('taskList') inputTaskList? : Task[];
  //next: child to parent data sharing.

  date: string = "";
  isToday: boolean = false;
  hasTask: boolean = false;

  todayTaskList: Task[] = []

  constructor(public dateService: DateService, private dialogService: OpenDialogService, private dialog: MatDialog) { }

  ngOnInit(): void { 
    if(this.inputDate) {
      this.date = this.inputDate;
    }

    if(this.inputTaskList) {
      this.todayTaskList = this.inputTaskList;
      if(this.todayTaskList.length !== 0) {
        this.hasTask = true;
      }
    }

    if(this.date == this.dateService.getCurrentDate()) {
      this.isToday = true;

    }
   }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todayTaskList, event.previousIndex, event.currentIndex);
  }

  addTask(){
    this.dialogService.openDialog(this.dialog,this.todayTaskList);
  }

}
