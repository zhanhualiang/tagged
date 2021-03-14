import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Task } from '../class/task';
import { DateService } from '../service/date.service';

@Component({
  selector: 'app-pop-up-task-dialog',
  templateUrl: './pop-up-task-dialog.component.html',
  styleUrls: ['./pop-up-task-dialog.component.scss']
})
export class PopUpTaskDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<PopUpTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task, public dateService: DateService) { }

  backupData: Task = new Task(this.data.uid, this.data.title, this.data.description, this.data.date, this.data.task_order);
  alreadyExist = this.backupData.title == "" ? false : true;
  taskStatus!: string;

  ngOnInit(): void {
    this.backupData.id = this.data.id;
    this.backupData.finish = this.data.finish;
    this.backupData.share = this.data.share;
    this.checkStatus();
  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  checkStatus() {
    switch (this.backupData.finish){
      case 0:
        if(this.dateService.isBeforeToday(this.backupData.date)) {
          this.taskStatus = "Failed";
        } else {
          this.taskStatus = "On Going";
        }
        break;
      case 1:
        this.taskStatus = "Finished";
        break;
    }
  }

  deleteTask(): void {
    //delete task dialog
    const action = {action: "delete"};
    this.dialogRef.close(action)
  }

  toggleFinish() {
    this.backupData.finish = this.backupData.finish == 1? 0 : 1;
    this.checkStatus();
  }
}
