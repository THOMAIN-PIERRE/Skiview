import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import { DangerService } from '../serviceDanger/danger.service';

@Component({
  selector: 'ns-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(public DangerServ:DangerService) { }

  ngOnInit(): void {
  }

  categorieDangerEtatPistes(etatPistes: string){
    this.DangerServ.danger.etatPistes = etatPistes;
  }
  categorieDangerMeteo(meteo: string){
    this.DangerServ.danger.meteo = meteo;
  }
  categorieDangerAvalanche(avalanche: string){
    this.DangerServ.danger.avalanche = avalanche;
  }
  categorieDangerSignaletique(signaletique: string){
    this.DangerServ.danger.signaletique = signaletique;
  }
  categorieDangerObstacle(obstacle: string){
    this.DangerServ.danger.obstacle = obstacle;
  }
  categorieDangerCrevasse (crevasse: string){
    this.DangerServ.danger.crevasse = crevasse;
  }
  categorieDangerAnimaux(animaux: string){
    this.DangerServ.danger.animaux = animaux;
  }
  categorieDangerAutres(autres: string){
    this.DangerServ.danger.autres = autres;
  }


  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
}
