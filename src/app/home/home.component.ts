import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { element } from 'protractor';
import { environment } from 'src/environments/environment.prod';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //añadiendo imgs  como bidings para que las reconozca gh Pages al compilar en DOCS/DIST
  imgHome = [environment.img_prefix +environment.img_prefix + 'assets/spoti2.png'];


  flag=  true;
  

  enterToList(){
    
    this._mainService.flag= !this._mainService.flag
    this._mainService.flagList= !this._mainService.flagList
  }

  constructor(public _mainService : MainService) { }

  ngOnInit() {
  }

}
