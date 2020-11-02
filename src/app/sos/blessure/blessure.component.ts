import { Component, OnInit } from '@angular/core';
import { SosService } from '../service/sos.service';
import * as dialogs from "tns-core-modules/ui/dialogs";
@Component({
  selector: 'ns-blessure',
  templateUrl: './blessure.component.html',
  styleUrls: ['./blessure.component.css']
})
export class BlessureComponent implements OnInit {

  constructor(public SosServ:SosService) { }

  ngOnInit(): void {
  }
  causeBlessureSosCollision(Collision:string){
    this.SosServ.sos.Collision=Collision;
  }
  causeBlessureSosChute(Chute:string){
    this.SosServ.sos.Chute=Chute;
  }
  causeBlessureSosAutres(Autres:string){
    this.SosServ.sos.Autres=Autres;
  }
  typeBlessureSosTete(Tete:string){
    this.SosServ.sos.Tete=Tete;
  }
  typeBlessureSosBras(Bras:string){
    this.SosServ.sos.Bras=Bras;
  }
  typeBlessureSosEpaule(Epaule:string){
    this.SosServ.sos.Epaule=Epaule;
  }
  typeBlessureSosGenou(Genou:string){
    this.SosServ.sos.Genou=Genou;
  }
  typeBlessureSosJambe(Jambe:string){
    this.SosServ.sos.Jambe=Jambe;
  }
  typeBlessureSosAutre(Autre:string){
    this.SosServ.sos.Autre=Autre;
  }
  submit() {
    dialogs.confirm({
      title: "Reception des Complements d'Informations",
      message: "Les secours sont prevenus,Ils seront bientot à vos cotés.Restez calme,Respirez profondement,Respirez Calmement",
      okButtonText: "ok",
      cancelButtonText: "",
      neutralButtonText: ""
    })
  }
}



















