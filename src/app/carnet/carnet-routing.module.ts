import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CarnetrempliComponent } from './carnetrempli/carnetrempli.component';
import { CguComponent } from './cgu/cgu.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AccueilcarnetComponent } from './accueilcarnet/accueilcarnet.component';

const routes: Routes = [{
  path: "", component: AccueilcarnetComponent, children: [
    { path: "", component: CarnetrempliComponent},
    { path: "cgu", component: CguComponent },
    { path: "formulaire", component: FormulaireComponent},]
    // { path: "", component: Component }]
    
}
];


@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class CarnetRoutingModule { }
