import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {Streamer} from '../../streamer'

/*
  Generated class for the TwitchApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TwitchApiProvider {

  constructor(public http: Http) {
    console.log('Hello TwitchApiProvider Provider');
  }

  public getStreamerbyID(name: string) {
    let myHeader = new Headers();
    myHeader.append("Client-ID", "rbltgng4vkv4yp7ogvxwf1jluzqw2e");
    let options = new RequestOptions({ headers : myHeader});
    return this.http.get("https://api.twitch.tv/kraken/streams/"+name, options).map(res => res.json())
  }
  
  public getStreamerByGame() : Observable <Streamer[]>{
    let myHeader = new Headers();
    myHeader.set("Client-ID", "rbltgng4vkv4yp7ogvxwf1jluzqw2e");
    let options = new RequestOptions();
    options.headers = myHeader;
    return this.http.get( "https://api.twitch.tv/kraken/streams/?game=Path%20of%20exile", options).map(response => response.json().streams);
  }
}
