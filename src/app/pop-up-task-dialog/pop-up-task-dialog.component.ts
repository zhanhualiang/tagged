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

  backupData: Task = {
    id: this.data.id,
    uid : this.data.uid,
    title : this.data.title,
    description : this.data.description,
    date: this.data.date,
    task_order: this.data.task_order,
    finish: this.data.finish,
    share: this.data.share
  }
  

  alreadyExist = this.backupData.title == "" ? false : true;
  taskStatus!: string;
  statusColour: string = "#ffd740";

  ngOnInit(): void {
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
          this.statusColour = "red";
        } else {
          this.taskStatus = "On Going";
          this.statusColour = "#ffd740";
        }
        break;
      case 1:
        this.taskStatus = "Finished";
        this.statusColour = "#69f0ae";
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
