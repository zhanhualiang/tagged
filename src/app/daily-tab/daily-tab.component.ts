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
      this.emptyTaskList();
    }

    if(this.date == this.dateService.getCurrentDate()) {
      this.isToday = true;

    }
   }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todayTaskList, event.previousIndex, event.currentIndex);
  }

  addTask(){
    //const addTaskDialog = this.dialogService.openAddTaskDialog(this.dialog, this.todayTaskList, this.date);
    const addTaskDialog = this.dialogService.openTaskDetailDialog(this.dialog,new Task("",this.date))

    addTaskDialog.afterClosed().subscribe(result => {
      if(result.name != ""){
        console.log(result);
        this.todayTaskList.push(result);
        this.emptyTaskList();
      } else {
        console.log('result is empty.')
      }
    });
  }

  emptyTaskList(){
    this.todayTaskList.length == 0 ? this.hasTask = false : this.hasTask = true;
  }
 
}
