import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoeTestPage } from './poe-test';

@NgModule({
  declarations: [
    PoeTestPage,
  ],
  imports: [
    IonicPageModule.forChild(PoeTestPage),
  ],
})
export class PoeTestPageModule {}
