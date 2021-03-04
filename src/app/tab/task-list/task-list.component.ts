import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Task } from '../../class/task'
import {MatDialog} from '@angular/material/dialog';
import { PopUpTaskDialogComponent } from 'src/app/pop-up-task-dialog/pop-up-task-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input('tasks') inputTasks?: Task[];
  tasks: Task[] = []

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.inputTasks) {
      this.tasks = this.inputTasks;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(PopUpTaskDialogComponent, {
      width: '50%',
      data: this.tasks[index]
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != ""){
        console.log(result);
        this.tasks[index] = result;
      } else {
        console.log('result is empty.')
      }
    });
  }

}
