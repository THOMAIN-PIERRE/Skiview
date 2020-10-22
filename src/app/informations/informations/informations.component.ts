import { Component, OnInit } from '@angular/core';
import { DataService } from '~/app/services/data.service';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";

@Component({
  selector: 'ns-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {

  constructor(public dataServ:DataService) { }

  ngOnInit(): void {
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
}
