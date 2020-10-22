import { Component, OnInit } from '@angular/core';
import { CarnetSanteService } from '~/app/services/carnet-sante.service';

@Component({
  selector: 'ns-formulaire-identite',
  templateUrl: './formulaire-identite.component.html',
  styleUrls: ['./formulaire-identite.component.css']
})
export class FormulaireIdentiteComponent implements OnInit {

  constructor(public carnetServ:CarnetSanteService) { }

  ngOnInit(): void {
  }

}
