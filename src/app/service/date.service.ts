import { Injectable } from '@angular/core';
import * as moment from 'moment'

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
    const date = moment().format("YYYY-MM-DD");
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
