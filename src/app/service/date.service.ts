import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getCurrentDate() {
    return new Date().toISOString().split('T')[0];
  }

  isBeforeToday(day: string) {
    return new Date(day).valueOf() < new Date(this.getCurrentDate()).valueOf();
  }
}
