import { Component, OnInit } from '@angular/core';
import * as app from "tns-core-modules/application";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'ns-gestionmdp',
  templateUrl: './gestionmdp.component.html',
  styleUrls: ['./gestionmdp.component.css']
})
export class GestionmdpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
     // Ouvrir le menu burger
     onDrawerButtonTap(){
      const sideDrawer = <RadSideDrawer>app.getRootView();
      sideDrawer.showDrawer();
    }

}
