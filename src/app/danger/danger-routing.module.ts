import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import { PhotoComponent } from './photo/photo.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { Photo2Component } from './photo2/photo2.component';
import { ConfirmationEnvoiComponent } from './confirmation-envoi/confirmation-envoi.component';
import { HistoriqueSignalementComponent } from './historique-signalement/historique-signalement.component';
import { FicheSignalementComponent } from './fiche-signalement/fiche-signalement.component';
import { AccueilDangerComponent } from './accueil-danger/accueil-danger.component';

const routes: Routes = [{
  path: "", component: AccueilDangerComponent, children: [
    { path: "", component:CategorieComponent},
    { path: "photo", component: PhotoComponent },
    { path: "photo2", component: Photo2Component},
    { path: "recapitulatif", component: RecapitulatifComponent },
    { path: "confirmationEnvoi", component: ConfirmationEnvoiComponent },
    { path: "historiqueSignalement", component: HistoriqueSignalementComponent },
    { path: "ficheSignalement", component: FicheSignalementComponent} ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class DangerRoutingModule { }
