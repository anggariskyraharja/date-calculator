import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  from: Date = null;
  end: Date;
  last: boolean = false;
  days: number = 0;
  weeks: number = 0;
  years: number = 0;
  months: number = 0;

  check(){
    if (this.from == null){
      
    }else{
      var newdate = new Date(this.from);
      newdate.setFullYear(newdate.getFullYear()+this.years);
      newdate.setMonth(newdate.getMonth()+this.months);
      var day = this.weeks*7+this.days;
      newdate.setDate(newdate.getDate()+day);
      this.end = newdate;
    }
  }

  constructor(public alertController: AlertController) {
  }

}
