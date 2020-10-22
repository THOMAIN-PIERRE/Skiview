import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SosService {
sos:any;
  constructor() {
    this.sos={
      Victime:"",
      Temoin:"",
      Severe:"",
      Serieuse:"",
      Moderee:"",
      Legere:"",
      Adulte:"",
      Enfant:"",
      Randonee:"",
      Luge:"",
      Snow:"",
      Collision:"",
      Chute:"",
      Autres:"",
      Tete:"",
      Bras:"",
      Epaule:"",
      Genou:"",
      Autre:"",

    };
   }
}

