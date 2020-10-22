import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";

@Component({
  selector: 'ns-gestionmail',
  templateUrl: './gestionmail.component.html',
  styleUrls: ['./gestionmail.component.css']
})
export class GestionmailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
   // Ouvrir le menu burger
   onDrawerButtonTap(){
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

}
