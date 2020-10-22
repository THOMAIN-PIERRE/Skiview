import { Component, OnInit } from '@angular/core';
import { CarnetSanteService } from '~/app/services/carnet-sante.service';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";

@Component({
  selector: 'ns-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor(public carnetServ:CarnetSanteService) { }

  ngOnInit(): void {
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
}
