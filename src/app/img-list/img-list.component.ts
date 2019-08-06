import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.css']
})
export class ImgListComponent implements OnInit {

  //añadiendo imgs  como bidings para que las reconozca gh Pages al compilar en DOCS/DIST
  imgKey = [environment.img_prefix + environment.img_prefix + 'assets/key1.png'];

  imgSpotiLogo = [environment.img_prefix + environment.img_prefix + 'assets/spoti3.png'];

  


  flag = false;

  displayPlay(id){
    this._mainService.displayPlay(id);
    
    let body= document.querySelector('body');
    body.style.background= 'black';
  }

  constructor(public _mainService : MainService) { }

  ngOnInit() {
  }

}
