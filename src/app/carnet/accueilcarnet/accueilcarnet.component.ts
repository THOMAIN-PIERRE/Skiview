import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import { CarnetSanteService } from '~/app/services/carnet-sante.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-accueilcarnet',
  templateUrl: './accueilcarnet.component.html',
  styleUrls: ['./accueilcarnet.component.css']
})
export class AccueilcarnetComponent implements OnInit {

  constructor(private route:RouterExtensions, public carnetServ:CarnetSanteService) { }

  ngOnInit(): void {
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
}
