import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImgListComponent } from './img-list/img-list.component';
import { PlayComponent } from './play/play.component';

import {MainService} from './services/main.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImgListComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
