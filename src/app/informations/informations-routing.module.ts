import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { InformationsComponent } from './informations/informations.component';


const routes: Routes = [
  {path:"", component:InformationsComponent}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class InformationsRoutingModule { }
