import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  show= true;

  reproduce(){
    this.show = !this.show;
    (<HTMLAudioElement> document.querySelectorAll('.audio')[0]).play();
  }

  pause(){
    this.show = !this.show;
    (<HTMLAudioElement> document.querySelectorAll('.audio')[0]).pause();
  }

  constructor(public _mainService : MainService) { }

  ngOnInit() {

  }

}
