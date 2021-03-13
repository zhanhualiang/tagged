import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Task } from '../../class/task'
import {MatDialog} from '@angular/material/dialog';
import { DateService } from 'src/app/service/date.service';
import { OpenDialogService } from 'src/app/service/open-dialog.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input('tasks') inputTasks?: Task[];
  @Input('date') inputDate?: string;
  tasks: Task[] = [];
  date: string = '';

  constructor(public dialog: MatDialog, public dateService: DateService, private dialogService: OpenDialogService) { }

  ngOnInit(): void {
    if(this.inputTasks) {
      this.tasks = this.inputTasks;
    }
    if(this.inputDate) {
      this.date = this.inputDate;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  openTaskDialog(task: Task){
    const taskDetailDialog = this.dialogService.openTaskDetailDialog(this.dialog, task);

    taskDetailDialog.afterClosed().subscribe(result => {
      if(result.name != ""){
        console.log(result);
        this.tasks[this.tasks.indexOf(task)] = result;
      } else {
        console.log('result is empty.')
      }
    });
  }

}
