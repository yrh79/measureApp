import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  private url: string = "http://192.168.1.245:5003/get"

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  getData () {
    return this.http.get(this.url);
  }

}
