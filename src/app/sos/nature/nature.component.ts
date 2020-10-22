import { Component, OnInit } from '@angular/core';
import { SosService } from '../service/sos.service';
@Component({
  selector: 'ns-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent implements OnInit {

  constructor(public SosServ:SosService) { }

  ngOnInit(): void {
  }
  natureSosAdulte(Adulte:string){
    this.SosServ.sos.Adulte=Adulte;
  }
  natureSosEnfant(Enfant:string){
    this.SosServ.sos.Enfant=Enfant;
  }
}