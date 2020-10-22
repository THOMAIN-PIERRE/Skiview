import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";

@Component({
  selector: 'ns-accueil-danger',
  templateUrl: './accueil-danger.component.html',
  styleUrls: ['./accueil-danger.component.css']
})
export class AccueilDangerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
}
