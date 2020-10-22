import { Component, OnInit } from '@angular/core';
import { CarnetSanteService } from '~/app/services/carnet-sante.service';

@Component({
  selector: 'ns-formulaire-constantes',
  templateUrl: './formulaire-constantes.component.html',
  styleUrls: ['./formulaire-constantes.component.css']
})
export class FormulaireConstantesComponent implements OnInit {

  constructor(public carnetServ:CarnetSanteService) { }

  ngOnInit(): void {
  }

}
