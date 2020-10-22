import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { HttpClientModule } from "@angular/common/http";
import { DataService } from "./services/data.service";
import { CarnetSanteService } from "./services/carnet-sante.service";
import { IdService } from "./services/id.service";
import { DropDownModule } from "nativescript-drop-down/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// import { registerElement } from "nativescript-angular";
// registerElement("PreviousNextView", () => require("nativescript-iqkeyboardmanager").PreviousNextView);

// import { InscriptionComponent } from "../app/inscription/inscription.component";

// //TODO: should be imported from kinvey-nativescript-sdk/angular but declaration file is currently missing
// import { KinveyModule, UtilisateurService as KinveyUserService } from "kinvey-nativescript-sdk/lib/angular";

// import { UtilisateurService } from "../app/services/utilisateur.service";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpClientModule,
        DropDownModule,
        NativeScriptFormsModule,
        HttpClientModule 

        // KinveyModule.init({
        //     appKey: "kid_rkG3IIwt8",
        //     appSecret: "7810f8a0f91a4bd0b24df66e32d8a746"
        // })
    ],
    declarations: [
        AppComponent,
        // InscriptionComponent
    ],
    providers:[CarnetSanteService, DataService, IdService, ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
