import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AccueilSOSComponent } from './accueil-sos/accueil-sos.component';
import { ActiviteComponent } from './activite/activite.component';
import { AppelComponent } from './appel/appel.component';
import { BlessureComponent } from './blessure/blessure.component';
import { EtatComponent } from './etat/etat.component';
import { GestesecoursComponent } from './gestesecours/gestesecours.component';
import { GraviteComponent } from './gravite/gravite.component';
import { NatureComponent } from './nature/nature.component';
import { ComplementComponent } from './complement/complement.component';


const routes: Routes = [
  {
    path: "", component: AccueilSOSComponent, children: [
      { path: "", component: EtatComponent },
      { path: "gravite", component: GraviteComponent },
      { path: "appel", component: AppelComponent },
      { path: "complement", component: ComplementComponent},
      { path: "nature", component: NatureComponent },
      { path: "activite", component: ActiviteComponent },
      { path: "blessure", component: BlessureComponent },
      { path: "gestesecours", component: GestesecoursComponent }] 
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class SosRoutingModule { }
