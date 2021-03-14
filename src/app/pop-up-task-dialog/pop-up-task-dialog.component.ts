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


  ngOnInit(): void {
    this.backupData.id = this.data.id;
  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }
}
