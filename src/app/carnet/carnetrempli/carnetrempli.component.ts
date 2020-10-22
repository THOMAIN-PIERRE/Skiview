import { Component, OnInit } from '@angular/core';
import { CarnetSanteService } from '~/app/services/carnet-sante.service';

@Component({
  selector: 'ns-carnetrempli',
  templateUrl: './carnetrempli.component.html',
  styleUrls: ['./carnetrempli.component.css']
})
export class CarnetrempliComponent implements OnInit {

  constructor(public carnetServ:CarnetSanteService) { }

  ngOnInit(): void {
  }

}
