import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarnetSanteService {
  dossierSante: any;

  constructor() {
      this.dossierSante = {
          nom:"Platini",
          prenom:"",
          age:"45",
          tel:"0707070707",
          groupe:"0+",
          taille: "180",
          poids: "80",
          donneur:"OUI",
          allergie:["Aspirine"],
          pathologie:["Diabète"],
          traitement:["Insuline", "Doliprane"],
          nom_contact: "Thomain",
          prenom_contact:"Pierre",
          tel_contact:"0607070707",

      };
  }
}