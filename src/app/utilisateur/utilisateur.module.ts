import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { GestionCompteComponent } from './gestion-compte/gestion-compte.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreationcompteComponent } from './creationcompte/creationcompte.component';
import { AccueilutilisateurComponent } from './accueilutilisateur/accueilutilisateur.component';
import { ChoixstationComponent } from './choixstation/choixstation.component';
import { CguappliComponent } from './cguappli/cguappli.component';
import { StationComponent } from './station/station.component';
import { GestionmdpComponent } from './gestionmdp/gestionmdp.component';
import { GestionmailComponent } from './gestionmail/gestionmail.component';


@NgModule({
  declarations: [GestionCompteComponent, InscriptionComponent, ConnexionComponent, CreationcompteComponent, AccueilutilisateurComponent, ChoixstationComponent, CguappliComponent, StationComponent, GestionmdpComponent, GestionmailComponent],
  imports: [
    UtilisateurRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UtilisateurModule { }
