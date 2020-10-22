import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions  } from 'nativescript-angular/router';

@Component({
  selector: 'ns-accueilutilisateur',
  templateUrl: './accueilutilisateur.component.html',
  styleUrls: ['./accueilutilisateur.component.css']
})
export class AccueilutilisateurComponent implements OnInit {

  constructor(private router:RouterExtensions ) { }

  ngOnInit(): void {
    console.log("Accueil utilisateur chargé");
  }
  // Open burger menu
  onDrawerButtonTap(){
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
