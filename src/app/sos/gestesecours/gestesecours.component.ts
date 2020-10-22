import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-gestesecours',
  templateUrl: './gestesecours.component.html',
  styleUrls: ['./gestesecours.component.css']
})
export class GestesecoursComponent implements OnInit {
  textDemo: string;
  news: Array<any>
  constructor() { }

  ngOnInit(): void {

    this.news = [
      {
        titre: "Cas N°1:Perte de Connaissance",
        img: "https://i.pinimg.com/736x/1c/9f/38/1c9f38ff703aea50d7a0dfc4792146dd.jpg"
      },
      {
        titre: "Cas N°2:Massage Cardiaque",
        img: "https://i.pinimg.com/236x/dc/d2/a9/dcd2a9887cdeec5eef7fbb33d3a2fd2a.jpg"

      },
      {
        titre: "Cas N°3:Etouffement total ",
        img: "https://i.pinimg.com/236x/d9/04/4f/d9044f72067d578896490cc73d6f92ca.jpg"
      },
      {
        titre: "Cas N°4:Saignements abondant",
        img: "https://i.pinimg.com/originals/95/3b/48/953b4864851bed5c6594b45833ff703c.jpg"
      },
      {
        titre: "Cas N°5: Les brulures",
        img: "https://i.pinimg.com/564x/4f/f6/af/4ff6af705cb1d717b802ec73ddd57065.jpg"
      }

    ]

  }

}
