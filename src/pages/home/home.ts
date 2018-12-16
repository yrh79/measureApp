import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http'

interface dataItem {
  v: number;
  a: number;
  ts: string;
}

class httpData {
  result: string;
  data: dataItem[];
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  items: any [];

  constructor(public navCtrl: NavController, private http: HttpProvider) {
    this.getData();
  }

  getData() {
    this.http.getData().subscribe ((res: httpData) => {
      this.items = res.data;
    })
  }

  getTimestamp(ts: String) {
    return ts.substring(12, 26);
  }

}
