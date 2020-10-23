import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CarnetRoutingModule } from './carnet-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AccueilcarnetComponent } from './accueilcarnet/accueilcarnet.component';
import { CguComponent } from './cgu/cgu.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CarnetrempliComponent } from './carnetrempli/carnetrempli.component';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { FormulaireConstantesComponent } from './formulaire-constantes/formulaire-constantes.component';
import { FormulaireDossierMedicalComponent } from './formulaire-dossier-medical/formulaire-dossier-medical.component';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { FormulaireIdentiteComponent } from './formulaire-identite/formulaire-identite.component';

@NgModule({
  declarations: [AccueilcarnetComponent, CguComponent, FormulaireComponent, CarnetrempliComponent, FormulaireConstantesComponent, FormulaireDossierMedicalComponent, FormulaireContactComponent, FormulaireIdentiteComponent],
  imports: [
    CarnetRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CarnetModule { }
