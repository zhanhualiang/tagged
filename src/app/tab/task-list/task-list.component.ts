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
  tasks: Task[] = []

  constructor(public dialog: MatDialog, public dateService: DateService, private dialogService: OpenDialogService) { }

  ngOnInit(): void {
    if(this.inputTasks) {
      this.tasks = this.inputTasks;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  openTaskDialog(index: number){
    this.dialogService.openDialog(this.dialog, this.tasks, index);
  }

  

}
