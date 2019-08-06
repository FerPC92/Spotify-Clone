import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.css']
})
export class ImgListComponent implements OnInit {

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
