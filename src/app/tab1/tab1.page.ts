import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  from: Date = null;
  to: Date = null;
  last: boolean = false;
  days: string='-';
  weeks: string='-';
  years2: string='-';
  months: string='-';
  hours: string='-';
  minutes: string='-';

  check(){
    if (this.from == null || this.to == null){
      
    }else{
      var todate = new Date(this.to);
      var fromdate = new Date(this.from);
      var timediff = todate.getTime()-fromdate.getTime();
      var difference_in_days = Math.floor(timediff/(1000*3600*24));
      if (this.last == true){
        if (todate>=fromdate){
          difference_in_days = difference_in_days + 1;
        } else {
          difference_in_days = difference_in_days - 1;
        }
      }
      this.days = difference_in_days+' Days';
      var difference_in_weeks1 = difference_in_days/7;
      if (difference_in_weeks1>0){
        difference_in_weeks1 = Math.floor(difference_in_weeks1);
      }else{
        difference_in_weeks1 = Math.ceil(difference_in_weeks1);
      }
      var difference_in_weeks2 = Math.floor(difference_in_days - (7*difference_in_weeks1));
      this.weeks = difference_in_weeks1+' Weeks '+difference_in_weeks2+' Days';
      var yeardiff = todate.getFullYear() - fromdate.getFullYear();
      var monthdiff = todate.getMonth() - fromdate.getMonth();
      var daydiff = todate.getDate() - fromdate.getDate();
      if (this.last == true){
        if (todate>=fromdate){
          daydiff = daydiff + 1;
        } else {
          daydiff = daydiff - 1;
        }
      } else if (this.last == false){
        if (todate>=fromdate){
          daydiff = daydiff;
        } else {
          daydiff = daydiff;
        }
      }
      var totalmonth =  yeardiff*12 + monthdiff;
      var totaldays = totalmonth * 30 + daydiff;  
      var month1 = totaldays/30;
      if (month1>0){
        month1 = Math.floor(month1);
      }else{
        month1 = Math.ceil(month1);
      }
      var month2 = Math.ceil(totaldays-(30*month1));
      this.months = month1+' Months '+month2+' Days';
      var year1 = totaldays/30/12;
      if (year1>0){
        year1 = Math.floor(year1);
      }else{
        year1 = Math.ceil(year1);
      }
      var year2 = totalmonth-(year1*12);
      this.years2 = year1+' Years '+year2+' Months '+month2+' Days';
      this.hours = difference_in_days*24+' Hours';
      this.minutes = difference_in_days*24*60+' Minutes';
    }
  }

  constructor(public alertController: AlertController) {
  }

}
