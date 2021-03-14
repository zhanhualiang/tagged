import { Injectable } from '@angular/core';
import * as url from 'src/assets/API_ROUTE.json'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Task } from '../class/task';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  getTodaysTasks(uid: number, date: string): Observable<Task[]> {
    return this.http.get<Task[]>(url.LOCALHOST + url.USER + uid.toString() + '/' + date);
  }

  postTask(task: Task): Observable<Task> {
    const body = {
      uid: task.uid,
      title: task.title,
      desc: task.description,
      taskOrder: task.task_order,
      share: task.share,
      date: task.date
    }

    return this.http.post<Task>(url.LOCALHOST + url.TASK + url.ADD, body).pipe(
      catchError(this.handleError)
    );
  }

  updateTask(task: Task): Observable<Task> {
    const body = {
      title: task.title,
      desc: task.description,
      taskOrder: task.task_order,
      share: task.share,
    }

    return this.http.patch<Task>(url.LOCALHOST + url.TASK + url.UPDATE + task.id + '/', body).pipe(
      catchError(this.handleError)
    );
  }

  mapRespondIntoList(data: Task[]) {
    var result: Task[] = [];
    data.forEach(task => {
      const newTask = new Task(task.uid, task.title, task.description, task.date, task.task_order);
      newTask.id = task.id;
      newTask.share = task.share;
      newTask.finish = task.finish;
      result.push(newTask);
    });
    return result;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      console.error(error)
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
