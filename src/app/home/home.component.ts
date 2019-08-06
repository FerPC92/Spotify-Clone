import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { element } from 'protractor';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flag=  true;
  

  enterToList(){
    
    this._mainService.flag= !this._mainService.flag
    this._mainService.flagList= !this._mainService.flagList
  }

  constructor(public _mainService : MainService) { }

  ngOnInit() {
  }

}
