import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() refreshTasksRequest = new EventEmitter();
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
    const updateList:{id:string,task_order:string}[] = [];
    this.inputTasks.forEach((task, index) => {
      updateList.push(
        {id:`${task.id}`,task_order:`${index+1}`}
      )
    });
    this.webService.updateTaskOrderInBatch(updateList).subscribe( result => {
      console.log(result);
    })
  }

  openTaskDialog(task: Task){
    const taskDetailDialog = this.dialogService.openTaskDetailDialog(this.dialog, task);
    const taskIndex = this.inputTasks.indexOf(task);
    taskDetailDialog.afterClosed().subscribe(result => {
      if(result.action == "delete"){
        if(task.id){
          this.webService.deleteTask(task.id).subscribe( response => {
            console.log(response);
            this.refreshTasksRequest.emit();
          });
        }

      } else if(result.title != ""){
        if(result.title !== task.title || result.description !== task.description || result.task_order !== task.task_order || result.finish !== task.finish) {
          this.webService.updateTask(result).subscribe( updateTask => {
            console.log(updateTask);
          });
        }
        this.inputTasks[taskIndex] = result;
      } else {
        console.log('result is empty.')
      }
    });
  }

  checkFinish(task: Task) {
    return task.finish == 1? true : false;
  }

}
