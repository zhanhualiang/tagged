import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Task } from '../../class/task'
import {MatDialog} from '@angular/material/dialog';
import { DateService } from 'src/app/service/date.service';
import { OpenDialogService } from 'src/app/service/open-dialog.service';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input('tasks') inputTasks!: Task[];
  @Input('date') inputDate!: string;
  tasks: Task[] = [];
  date: string = '';

  constructor(public dialog: MatDialog, 
              public dateService: DateService, 
              private dialogService: OpenDialogService, 
              private webService: WebService) { }

  ngOnInit(): void {
    if(this.inputDate) {
      this.date = this.inputDate;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.inputTasks, event.previousIndex, event.currentIndex);
    this.inputTasks.forEach((task, index) => {
      task.task_order = index+1;
      this.webService.updateTaskOrder(task).subscribe( result => {
        console.log(result);
      })
    });
  }

  openTaskDialog(task: Task){
    const taskDetailDialog = this.dialogService.openTaskDetailDialog(this.dialog, task);

    taskDetailDialog.afterClosed().subscribe((result: Task) => {
      if(result.title != ""){
        if(result.title !== task.title || result.description !== task.description || result.task_order !== task.task_order) {
          console.log(result.id);
          this.webService.updateTask(result).subscribe( updateTask => {
            console.log(updateTask);
          });
        }
        this.tasks[this.tasks.indexOf(task)] = result;
      } else {
        console.log('result is empty.')
      }
    });
  }

}
