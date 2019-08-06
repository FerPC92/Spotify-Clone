import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  //añadiendo imgs  como bidings para que las reconozca gh Pages al compilar en DOCS/DIST
  imgArrow = [environment.img_prefix + environment.img_prefix + 'assets/arrow.png'];

  imgheart = [environment.img_prefix + environment.img_prefix + 'assets/heart2.png'];

  imgRandom = [environment.img_prefix + environment.img_prefix + 'assets/circle-random2.png'];

  imgSkipBack = [environment.img_prefix + environment.img_prefix + 'assets/skip-back-final.png'];

  imgPlay = [environment.img_prefix + environment.img_prefix + 'assets/playfinal.png'];

  imgPause = [environment.img_prefix + environment.img_prefix + 'assets/pausefinal.png'];

  imgSkipEnd = [environment.img_prefix + environment.img_prefix + 'assets/skip-end-final.png'];

  imgShuffle = [environment.img_prefix + environment.img_prefix + 'assets/shufle3.png'];



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
