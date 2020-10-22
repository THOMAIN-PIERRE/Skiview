import { Component, OnInit } from '@angular/core';
import { CarnetSanteService } from '~/app/services/carnet-sante.service';

@Component({
  selector: 'ns-formulaire-dossier-medical',
  templateUrl: './formulaire-dossier-medical.component.html',
  styleUrls: ['./formulaire-dossier-medical.component.css']
})
export class FormulaireDossierMedicalComponent implements OnInit {

  constructor(public carnetServ:CarnetSanteService) { }

  ngOnInit(): void {
  }

}
