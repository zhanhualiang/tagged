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

  openDialog(dialog: MatDialog, taskList?: Task[], index?: number, ): void {
    if(index && taskList){
      const dialogRef = dialog.open(PopUpTaskDialogComponent, {
        width: '50%',
        data: taskList[index],
        disableClose: true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result != ""){
          console.log(result);
          taskList[index] = result;
        } else {
          console.log('result is empty.')
        }
      });
    } else if (!index && taskList) {
      const dialogRef = dialog.open(PopUpTaskDialogComponent, {
        width: '50%',
        data: new Task('',this.dateService.getCurrentDate()),
        disableClose: true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result != ""){
          console.log(result);
          taskList.push(result);
        } else {
          console.log('result is empty.')
        }
      });
    } else {
      console.log("open dialog: missing variables.")
    }

  }
}
