import { Component, OnInit } from '@angular/core';
import { CarnetSanteService } from '~/app/services/carnet-sante.service';

@Component({
  selector: 'ns-formulaire-contact',
  templateUrl: './formulaire-contact.component.html',
  styleUrls: ['./formulaire-contact.component.css']
})
export class FormulaireContactComponent implements OnInit {

  constructor(public carnetServ:CarnetSanteService) { }

  ngOnInit(): void {
  }

}
