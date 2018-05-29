import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Location } from '@angular/common';
import { TwitchApiProvider} from '../../providers/twitch-api/twitch-api';
import { Streamer } from '../../streamer'
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the StreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stream',
  templateUrl: 'stream.html',
  providers: [TwitchApiProvider],
})
export class StreamPage {

  name;
  videoUrl;
  dangerousVideoUrl;
  chatUrl;
  dangerousChatUrl;


  constructor(public navCtrl: NavController, public navParams: NavParams, private service: TwitchApiProvider, private sanitizer: DomSanitizer) {
    this.name = navParams.get('data');
    this.updateVideoUrl();
    this.updateChatUrl(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StreamPage');
  }

  updateVideoUrl() {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.dangerousVideoUrl = 'http://player.twitch.tv/?channel=' + this.name ;
    this.videoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);

  }
  updateChatUrl() {
    this.dangerousChatUrl = 'https://www.twitch.tv/embed/'+this.name+ '/chat?darkpopout' ;
    this.chatUrl =
            this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousChatUrl);
  
  }


}
