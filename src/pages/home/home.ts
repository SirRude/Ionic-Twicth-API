import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LinksPageModule } from '../links/links.module';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController, private streamingMedia: StreamingMedia) {

  }

startVideo() {
 let options: StreamingVideoOptions = {
   successCallback: () => {console.log},
   errorCallback: () => {console.log},
   orientation: 'landscape'
 }

 this.streamingMedia.playVideo('http://player.twitch.tv/?channel=ziggydlive', options)
}


}
