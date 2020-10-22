
import { Component, OnInit } from "@angular/core";
import { getNumber, getString, getBoolean, setNumber, remove, setString, setBoolean, clear } from "tns-core-modules/application-settings";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
 selector: 'ns-gravite',
   moduleId: module.id,
   templateUrl: './gravite.component.html',
   styleUrls: ['./gravite.component.css']
})
export class GraviteComponent implements OnInit {

   num: string = "";
   str: string = "";
   bool: boolean = false;

   constructor() {
   }

   ngOnInit(): void {
       // second parameter to getXXX() is a default value
       const num = getNumber("someNumber", 0);
       this.num = num === 0 ? "" : num.toString();

       this.str = getString("someString", "");
       this.bool = getBoolean("someBoolean", false);
   }

   // saveNumber() {
   //     if (!isNaN(parseFloat(this.num))) {
   //         setNumber("someNumber", parseFloat(this.num));
   //         alert("You saved: " + getNumber("someNumber"));
   //     }
   // }

   // removeNumber() {
   //     remove("someNumber");
   //     this.num = "";
   //     alert("You removed the number from app settings!");
   // }

   // saveString() {
   //     setString("someString", this.str);
   //     alert("You saved: " + getString("someString"));
   // }

   // removeString() {
   //     remove("someString");
   //     this.str = "";
   //     alert("You removed the string from app settings!");
   // }

   saveetat1() {
       setBoolean("someBoolean", this.bool);
       alert("Vous avez indiqué la blessure gravité en tant que SEVERE: " + getBoolean("someBoolean"));
   }
   saveetat2() {
       setBoolean("someBoolean", this.bool);
       alert("Vous avez indiqué la blessure gravité en tant que SERIEUSE: " + getBoolean("someBoolean"));
   }
   saveetat3() {
       setBoolean("someBoolean", this.bool);
       alert("Vous avez indiqué la blessure gravité en tant que MODEREE: " + getBoolean("someBoolean"));
   }
   saveetat4() {
       setBoolean("someBoolean", this.bool);
       alert("Vous avez indiqué la blessure gravité en tant que LEGERE: " + getBoolean("someBoolean"));
   }
   removeBoolean() {
       remove("someBoolean");
       this.bool = false;
       alert("You removed the boolean from app settings!");
   }

   removeAll() {
       clear();
       this.num = "";
       this.str = "";
       this.bool = false;
       // alert("All app settings values have been cleared!");
   }
}