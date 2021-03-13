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

  getPreviousDate(day: string) {
    return new Date(new Date(day).getTime() - 864e5).toISOString().split('T')[0];
  }

  getNextDate(day: string) {
    return new Date(new Date(day).getTime() + 864e5).toISOString().split('T')[0];
  }
}
