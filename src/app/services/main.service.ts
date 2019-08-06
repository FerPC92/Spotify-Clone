import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

/* TODO : CAMBIAR LINKS RELATIVOS POR EL IMGPREFIX QUE MODIFICAMOS EN LOS ENTORNOS DE DEV Y DE PROD)*/

@Injectable({
  providedIn: 'root'
})
export class MainService {

  flag=true

  flagList= false

  flagPlay= false;

  id : number= 0;

  

  listado: object[] = [
    {
    "id" : 0 ,"artist" : "Maddona", "song": "Hang Up" ,"img" : "https://wallpapermemory.com/uploads/545/madonna-background-full-hd-1080p-335077.jpg", "src" : environment.img_prefix + "assets/hungup.mp3", "album" : "Confessions on a Dance Floor"
    },
    {
    "id" : 1 ,"artist" : "Gorillaz",  "song": "Feel Good Inc" ,"img" : "http://wrmx00.epimg.net/radio/imagenes/2018/08/22/entretenimiento/1534962335_984045_1534962640_noticia_normal.jpg", "src" : environment.img_prefix + "assets/feelgoodinc.mp3", "album" : "Demon Days"
    },
    {
    "id" : 2 ,"artist" : "Rolling Stones",  "song": "Paint It,Black" ,"img" : "http://www.gsfdcy.com/data/img1/88/2171203-the-rolling-stones-wallpaper.jpg",
    "src" : environment.img_prefix + "assets/paintit.mp3", "album" : "Aftermath"
    }
                      /*environment.img_prefix agregar antes de ../../ */
  ];

  /*imgs = [environment.img_prefix + 'assets/circle-random2.png'] src="{{img[0]}}"*/

  displayPlay(id){
    this.flagPlay = !this.flagPlay
    this.flagList= !this.flagList
    this.id = id
    console.log(id)
  }



  constructor() { }
}
