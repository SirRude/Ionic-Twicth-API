import { HttpParams, HttpHeaders} from '@angular/common/http';
import { Http, Response} from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Header } from 'ionic-angular';
import { RaizQtPage } from '../raiz-qt/raiz-qt'
import { NugiyenPage } from '../nugiyen/nugiyen';
import { CohhCarnagePage } from '../cohh-carnage/cohh-carnage';
import { TestVideoHtml5SCriptPage } from '../test-video-html5-s-cript/test-video-html5-s-cript';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Streamer } from '../../streamer';
import { Headers, RequestOptions } from '@angular/http';



/**
 * Generated class for the LinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-links',
  templateUrl: 'links.html',
})
export class LinksPage {

 
  ID: string;
  reqOpts;
  testText;
  
  Url:  string = "https://api.twitch.tv/kraken/streams/";
  raizQt = RaizQtPage;
  nugiyen = NugiyenPage;
  cohhcarnage = CohhCarnagePage;
  testvideo = TestVideoHtml5SCriptPage;

  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
    this.ID = "rbltgng4vkv4yp7ogvxwf1jluzqw2e";
   
    this.reqOpts= {
      headers: {
        'Client-ID': this.ID,
 
      },
      params: new HttpParams()
    };
    this.Isonline().subscribe(response => this.testText = response.json);
  }


  public Isonline() {
     return this.http.get("https://api.twitch.tv/kraken/streams/raizqt")
     .map(response => response
       
       //return data.result.stream;
  
    );
  };

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinksPage');
  }

}
