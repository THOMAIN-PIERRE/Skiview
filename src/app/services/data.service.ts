import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class DataService {
    stations: Array<any>;
    constructor(private http: HttpClient) {}

    getData() {
        this.http
            .get<Array<any>>(
                "https://thomain-pierre.github.io/skiviewV3/jeuDeTest/station.json"
            )
            .subscribe((data) => {
                console.log(data);
                this.stations = data;
            });
    }


}
