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
  backupData: Task = new Task('empty task', '2021-03-05');

  constructor(public dialogRef: MatDialogRef<PopUpTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task, public dateService: DateService) { }

  ngOnInit(): void {
    console.log("dialog:");
    console.log(this.data);
    this.backupData.name = this.data.name;
    this.backupData.date = this.data.date;
    this.backupData.finish = this.data.finish;
  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }
}
