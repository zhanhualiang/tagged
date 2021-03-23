import { Injectable } from '@angular/core';
import * as moment from 'moment'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getCurrentDate() {
    const date: string = moment().format("YYYY-MM-DD");
    return date;
  }

  getCurrentDay(date: string) {
    const day = moment(date).format("ddd");
    return day;
  }

  isBeforeToday(day: string) {
    return moment(day).isBefore(moment(),"days");
  }

  getPreviousDate(day: string) {
    return moment(day).subtract(1,"day").format("YYYY-MM-DD");
  }

  getNextDate(day: string) {
    return moment(day).add(1,"day").format("YYYY-MM-DD");
  }
}
