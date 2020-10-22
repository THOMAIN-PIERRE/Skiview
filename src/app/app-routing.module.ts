import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "utilisateur", pathMatch: "full" },
    { path: "utilisateur", loadChildren: () => import("~/app/utilisateur/utilisateur.module").then((m) => m.UtilisateurModule) },
    { path: "informations", loadChildren: () => import("~/app/informations/informations.module").then((m) => m.InformationsModule) },
    { path: "carnet", loadChildren: () => import("~/app/carnet/carnet.module").then((m) => m.CarnetModule) },
    { path: "danger", loadChildren: () => import("~/app/danger/danger.module").then((m) => m.DangerModule) },
    { path: "sos", loadChildren: () => import("~/app/sos/sos.module").then((m) => m.SosModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
