import { StreamPage} from '../stream/stream';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import {TwitchApiProvider} from '../../providers/twitch-api/twitch-api';
import {Streamer } from '../../streamer'
import { Http } from '@angular/http';



/**
 * Generated class for the PoeTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-poe-test',
  templateUrl: 'poe-test.html',
  providers:[TwitchApiProvider]
})
export class PoeTestPage {

  streamers: string[];
  pramas;
  streamPage = StreamPage;
  private streamer: Streamer[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: TwitchApiProvider) {
    this.loadstreams();
    
  }

  loadstreams(){
    console.log(this.service.getStreamerByGame().subscribe(response => this.streamer = response))
  }
  loadsingle(){
    this.service.getStreamerbyID(this.pramas).subscribe(response => this.streamer = response)
  }



    


  goTo(name) {
              
    let datas = {
      data: name};

    this.navCtrl.push(this.streamPage, datas)
  }
}
