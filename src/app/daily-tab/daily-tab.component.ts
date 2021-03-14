import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Task } from '../class/task';
import { DateService } from '../service/date.service';
import { OpenDialogService } from '../service/open-dialog.service';
import { WebService } from '../service/web.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-daily-tab',
  templateUrl: './daily-tab.component.html',
  styleUrls: ['./daily-tab.component.scss']
})
export class DailyTabComponent implements OnInit {
  @Input('date') inputDate! : string;
  //next: child to parent data sharing.

  date: string = "";
  uid: number = 2;
  isToday: boolean = false;
  hasTask: boolean = false;

  todayTaskList: Task[] = []

  constructor(public dateService: DateService, 
              private dialogService: OpenDialogService, 
              private dialog: MatDialog, 
              public webService: WebService) { }

  ngOnInit(): void { 
    if(this.inputDate) {
      this.date = this.inputDate;
    }

    this.refreshTodayTasksList(this.uid, this.date);

    if(this.date == this.dateService.getCurrentDate()) {
      this.isToday = true;
    }

   }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todayTaskList, event.previousIndex, event.currentIndex);
  }

  refreshTodayTasksList(userId: number, date: string) {
    this.webService.getTodaysTasks(userId, date).subscribe((data) => {
      this.todayTaskList = this.webService.mapRespondIntoList(data);
      this.emptyTaskList();
      console.log(this.todayTaskList);
    });
  }

  addTask(){
    const addTaskDialog = this.dialogService.openTaskDetailDialog(this.dialog,new Task(this.uid,"","",this.date,this.todayTaskList.length+1))

    addTaskDialog.afterClosed().subscribe(result => {
      console.log(result);
      if(result.title != ""){
        this.webService.postTask(result).subscribe( task => {
          console.log(task);
          this.refreshTodayTasksList(this.uid, this.date)
        });
      } else {
        console.log('result is empty.')
      }
    });
  }

  emptyTaskList(){
    this.todayTaskList.length == 0 ? this.hasTask = false : this.hasTask = true;
  }
 
}
