import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../class/task';
import { PopUpTaskDialogComponent } from '../pop-up-task-dialog/pop-up-task-dialog.component';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class OpenDialogService {
 
  constructor(private dateService: DateService) { }

  openTaskDetailDialog(dialog: MatDialog, taskList: Task[], index: number) {
    const dialogRef = dialog.open(PopUpTaskDialogComponent, {
      width: '50%',
      data: taskList[index],
      disableClose: true
    });
    return dialogRef;
  }

  openAddTaskDialog(dialog: MatDialog, taskList: Task[], date: string) {
    const dialogRef = dialog.open(PopUpTaskDialogComponent, {
      width: '50%',
      data: new Task('',date),
      disableClose: true
    });
    return dialogRef;
  }

}
