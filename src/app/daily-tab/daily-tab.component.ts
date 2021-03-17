import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../class/task';
import { DateService } from '../service/date.service';
import { OpenDialogService } from '../service/open-dialog.service';
import { WebService } from '../service/web.service';
import {MatDialog} from '@angular/material/dialog';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-daily-tab',
  templateUrl: './daily-tab.component.html',
  styleUrls: ['./daily-tab.component.scss']
})
export class DailyTabComponent implements OnInit {
  @Input('date') inputDate! : string;
  //next: child to parent data sharing.


  uid: number = 2;
  isToday: boolean = false;
  hasTask: boolean = false;

  todayTaskList: Task[] = []

  constructor(public dateService: DateService, 
              private dialogService: OpenDialogService, 
              private dialog: MatDialog, 
              public webService: WebService) { }

  ngOnInit(): void { 

    this.refreshTodayTasksList(this.uid, this.inputDate);

    if(this.inputDate == this.dateService.getCurrentDate()) {
      this.isToday = true;
    }

  }

  ngOnChanges(changes: SimpleChanges) {
    this.refreshTodayTasksList(this.uid, this.inputDate);
  }

  refreshTodayTasksList(userId: number, date: string) {
    this.webService.getTodaysTasks(userId, date).subscribe((data) => {
      this.todayTaskList = data;
      this.emptyTaskList();
      console.log(this.todayTaskList);
    });
  }

  addTask(){
    const task: Task = {
      uid : this.uid,
      title : "",
      description : "",
      date: this.inputDate,
      task_order: this.todayTaskList.length+1,
      finish: 0,
      share: 0
    };

    const addTaskDialog = this.dialogService.openTaskDetailDialog(this.dialog,task)

    addTaskDialog.afterClosed().subscribe(result => {
      console.log(result);
      if(result.title != ""){
        this.webService.postTask(result).subscribe( resopnd => {
          console.log(resopnd);
          this.refreshTodayTasksList(this.uid, this.inputDate)
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
