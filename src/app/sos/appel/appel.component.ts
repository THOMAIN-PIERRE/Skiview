import { Component, OnInit, NgZone } from '@angular/core';
import * as geolocation from "nativescript-geolocation";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
  selector: 'ns-appel',
  templateUrl: './appel.component.html',
  styleUrls: ['./appel.component.css']
})
export class AppelComponent implements OnInit {
    validersos() {
        dialogs.confirm({
          title: "Reception du SOS",
          message: "Les secours sont prevenus,Ils seront bientot à vos cotés.Restez calme,Respirez profondement,Respirez Calmement",
          okButtonText: "ok",
          cancelButtonText: "",
          neutralButtonText: ""
        })
      }
 

  public latitude: number;
    public longitude: number;
    private watchId: number;
  
    public constructor(private zone: NgZone) {
        this.latitude = 0;
        this.longitude = 0;
    }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  
    private getDeviceLocation(): Promise<any> {
        return new Promise((resolve, reject) => {
            geolocation.enableLocationRequest().then(() => {
                geolocation.getCurrentLocation({timeout: 10000}).then(location => {
                    resolve(location);
                }).catch(error => {
                    reject(error);
                });
            });
        });
    }
  
    public updateLocation() {
        this.getDeviceLocation().then(result => {
            this.latitude = result.latitude;
            this.longitude = result.longitude;
        }, error => {
            console.error(error);
        });
    }

}
