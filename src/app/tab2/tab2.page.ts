import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
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
      var difference_in_mins = Math.floor(timediff/(1000*60));
      if (difference_in_mins<0){
        difference_in_mins = difference_in_mins+(60*24);
      }
      this.minutes = difference_in_mins+' Minutes';
      var hour1 = Math.floor(difference_in_mins/60);
      var hour2 = difference_in_mins - (60*hour1);
      this.hours = hour1+' Hours '+hour2+' Minutes';
    }
  }


  constructor(public alertController: AlertController) {
  }

}
