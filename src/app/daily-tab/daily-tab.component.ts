import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../class/task';
import { DateService } from '../service/date.service';
import { OpenDialogService } from '../service/open-dialog.service';
import { WebService } from '../service/web.service';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-daily-tab',
  templateUrl: './daily-tab.component.html',
  styleUrls: ['./daily-tab.component.scss']
})
export class DailyTabComponent implements OnInit {
  @Input('date') inputDate! : Subject<string>;
  //next: child to parent data sharing.


  uid: number = Number(localStorage.getItem("uid"));
  isToday: boolean = false;
  hasTask: boolean = false;
  today: string = "";

  todayTaskList: Task[] = []

  constructor(public dateService: DateService, 
              private dialogService: OpenDialogService, 
              private dialog: MatDialog, 
              public webService: WebService,
              private router: Router) { }

  ngOnInit(): void { 
    if(!this.uid) {
      console.log("not login");
      this.router.navigate(['/'])
    }

    console.log(this.uid)

    this.inputDate.subscribe( newDate => {
      this.refreshTodayTasksList(this.uid, newDate);
      if(newDate == this.dateService.getCurrentDate()) {
        this.isToday = true;
      }
      this.today = newDate;
    });


  }



  refreshTodayTasksList(userId: number, date: string) {
    this.webService.getTodaysTasks(userId, date).subscribe((data) => {
      if(data.respond == "invalid token or token expired.") {
        console.log("invalid token or token expired. Please log in again");
        localStorage.removeItem("uid");
        localStorage.removeItem("token");
        this.router.navigate(['/'])
      } else {
        this.todayTaskList = data;
        this.emptyTaskList();
      }
    });
  }

  addTask(){
    const task: Task = {
      uid : this.uid,
      title : "",
      description : "",
      date: this.today,
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
          this.refreshTodayTasksList(this.uid, this.today)
        });
      } else {
        console.log('result is empty.')
      }
    });
  }

  emptyTaskList(){
    this.todayTaskList.length == 0 ? this.hasTask = false : this.hasTask = true;
  }

  ngOnDestroy(){
    this.inputDate.unsubscribe();
  }
 
}
