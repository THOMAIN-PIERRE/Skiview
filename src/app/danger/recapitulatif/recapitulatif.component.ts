import { Component, OnInit, NgZone } from '@angular/core';
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums"; // used to describe at what accuracy the location should be get

@Component({
  selector: 'ns-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit {
  
  // constructor() { }

  // ngOnInit(): void {
  //   geolocation.enableLocationRequest()
  //   .then(()=> {
  //     geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 })
  //     .then((location)=> {
  //       alert(JSON.stringify(location));
  //     })  
  //   })
  // }

  
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
