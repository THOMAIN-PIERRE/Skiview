import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DangerRoutingModule } from './danger-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CategorieComponent } from './categorie/categorie.component';
import { PhotoComponent } from './photo/photo.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { ConfirmationEnvoiComponent } from './confirmation-envoi/confirmation-envoi.component';
import { HistoriqueSignalementComponent } from './historique-signalement/historique-signalement.component';
import { FicheSignalementComponent } from './fiche-signalement/fiche-signalement.component';
import { Photo2Component } from './photo2/photo2.component';
import { AccueilDangerComponent } from './accueil-danger/accueil-danger.component';
import { DangerService } from './serviceDanger/danger.service';


@NgModule({
  declarations: [CategorieComponent, PhotoComponent, RecapitulatifComponent, ConfirmationEnvoiComponent, HistoriqueSignalementComponent, FicheSignalementComponent, Photo2Component, AccueilDangerComponent],
  imports: [
    DangerRoutingModule,
    NativeScriptCommonModule
  ],
  providers:[
    DangerService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DangerModule { }
