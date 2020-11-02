import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams}from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'ns-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
private appId: string;
private appCode: string;

public weather: any;
public constructor(private http:HttpClient) { 

  this.appId="75rA2Ky2y8jRs4RBr4He";
  this.appCode="gnnhsk4lid-cTjSGYEfDWQ";

}

public  ngOnInit(): void {
  // this.getweather({ latitude: 43.18793, longitude: -0.629484 });
  this.getweather({ latitude: 43.1717251, longitude: -0.6063067 });
  }
public getweather(position:any){
  let params= new HttpParams({
    fromObject:{
          product : "forecast_7days_simple",
          latitude:position.latitude,
          longitude: position.longitude,
          app_id: this.appId,
          app_code: this.appCode
    }
  });
  this.http.get("https://weather.cit.api.here.com/weather/1.0/report.json", { params: params })
  .pipe(map(result => (<any>result).dailyForecasts.forecastLocation))
  .subscribe(result => {
    this.weather = result.forecast;
}, error => {
    console.error(error);
});
};
}
