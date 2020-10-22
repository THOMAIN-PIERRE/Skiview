import { Component, OnInit } from '@angular/core';
import { SosService } from '../service/sos.service';
@Component({
  selector: 'ns-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {

  constructor(public SosServ:SosService) { }

  ngOnInit(): void {
  }
  activiteSosSki(Ski:string){
    this.SosServ.sos.Ski=Ski;
  }
  activiteSosRandonee(Randonee:string){
    this.SosServ.sos.Randonnee=Randonee;
  }
  activiteSosLuge(Luge:string){
    this.SosServ.sos.Luge=Luge;
  }
  activiteSosSnow(Snow:string){
    this.SosServ.sos.Snow=Snow;
  }
}

