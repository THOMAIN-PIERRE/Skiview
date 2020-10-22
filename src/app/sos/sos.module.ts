import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SosRoutingModule } from './sos-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AccueilSOSComponent } from './accueil-sos/accueil-sos.component';
import { EtatComponent } from './etat/etat.component';
import { GraviteComponent } from './gravite/gravite.component';
import { AppelComponent } from './appel/appel.component';
import { NatureComponent } from './nature/nature.component';
import { ActiviteComponent } from './activite/activite.component';
import { BlessureComponent } from './blessure/blessure.component';
import { GestesecoursComponent } from './gestesecours/gestesecours.component';
import { ComplementComponent } from './complement/complement.component';


@NgModule({
  declarations: [AccueilSOSComponent, EtatComponent, GraviteComponent, AppelComponent, NatureComponent, ActiviteComponent, BlessureComponent, GestesecoursComponent, ComplementComponent],
  imports: [
    SosRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SosModule { }
