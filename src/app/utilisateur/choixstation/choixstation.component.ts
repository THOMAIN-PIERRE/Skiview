import { Component, OnInit } from '@angular/core';
import { EventData } from 'tns-core-modules/data/observable/observable';
import { ListPicker } from "tns-core-modules/ui/list-picker";



@Component({
  moduleId : module . id ,
  selector: 'ns-choixstation',
  templateUrl: './choixstation.component.html',
  styleUrls: ['./choixstation.component.css'],
})
// export class ChoixstationComponent implements OnInit {

//   constructor() {
//   }

//   ngOnInit(): void {
//     // console.log("Choix station chargé dans le routeur");

//     var observable = require("data/observable");
//     exports.onLoaded = function(args: { object: any; }){
//     var page = args.object;
//     var listItems = new observable.Observable();
//     listItems.items = ["Arette La Pierre Saint Martin", "Gourette", "Artouste", "Cauteret"];
//     page.bindingContext = listItems;

//     }
//   }

// }
export class ChoixstationComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  public stations: Array<string> = ["^", "Arette La Pierre Saint Martin", "Artouste", "Cauterets", "Gourette", "Grand Tourmalet", "Luz-Ardiden", "Peyragudes", "Piau-Engaly" ];
  // public stations: Array<number> = [1, 2, 3, 4, 5];

    public onSelectedIndexChanged(args: EventData) {
        const picker = <ListPicker>args.object;
        console.log(`index: ${picker.selectedIndex}; item" ${this.stations[picker.selectedIndex]}`);
    }
}
  
