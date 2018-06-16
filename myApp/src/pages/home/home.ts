import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private obj;

  constructor(public navCtrl: NavController) {
    var now = new Date();
    console.log('toString', now.toString());
    console.log('toISOString', now.toISOString());
    console.log('toGMTString', now.toGMTString());
    console.log('toLocaleString', now.toLocaleString());
    this.obj = {
      now: now.toISOString()
    };
    console.log(this.obj);
  }

  logForm() {
    console.log(this.obj)
  }

}
