import { Component, OnInit } from '@angular/core';
// import * as app from "tns-core-modules/application";
import { SosService } from '../service/sos.service';
@Component({
  selector: 'ns-etat',
  templateUrl: './etat.component.html',
  styleUrls: ['./etat.component.css']
})
export class EtatComponent implements OnInit {

  constructor(public SosServ:SosService) { }

  ngOnInit(): void {
  }
etatsosVictime(Victime:string){
  this.SosServ.sos.Victime=Victime;
}
etatSosTemoin(Temoin:string){
  this.SosServ.sos.Temoin=Temoin;
}
}







