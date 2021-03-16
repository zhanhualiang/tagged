import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  //todo: moment.js
  reformatDateStringArray(date: string[]) {
    return date[2]+'-'+date[1]+'-'+date[0];
  }

  getCurrentDate() {
    const today = new Date().toLocaleDateString().split('/');
    return this.reformatDateStringArray(today);
  }

  isBeforeToday(day: string) {
    return new Date(day).valueOf() < new Date(this.getCurrentDate()).valueOf();
  }

  getPreviousDate(day: string) {
    const previousDay = new Date(new Date(day).getTime() - 864e5).toLocaleDateString().split('/');
    return this.reformatDateStringArray(previousDay);
  }

  getNextDate(day: string) {
    const nextDay = new Date(new Date(day).getTime() + 864e5).toLocaleDateString().split('/');
    return this.reformatDateStringArray(nextDay);
  }
}
