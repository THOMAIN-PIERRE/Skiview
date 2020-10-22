import { Component, OnInit } from '@angular/core';
import * as app from "tns-core-modules/application";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'ns-accueil-sos',
  templateUrl: './accueil-sos.component.html',
  styleUrls: ['./accueil-sos.component.css']
})
export class AccueilSOSComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
  

}
