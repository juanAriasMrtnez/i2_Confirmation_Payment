import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pay-ancillaries',
  templateUrl: './ancillaries.component.html',
  styleUrls: ['./ancillaries.component.scss']
})
export class AncillariesComponent implements OnInit {

  ancillaries_list: any = {
    "ancillary": [
    {
      "type": "seat",
      "title": "Selecciona tu asiento",
      "text": "No os separéis, escoge tu asiento y el de tus acompañantes. Puedes escoger entre un asiento XL, ventana o un asiento delantero para desembarcar primero.",
      "button": "Elegir asiento desde 8,00€",
      
    },
    {
      "type": "suitcase",
      "title": "Añadir equipaje",
      "text": "¿Te falta sitio en tu maleta? Añade equipaje adicional y olvídate del límite de peso.",
      "button": "Añadir maleta desde 25,00€",
      
    },
    {
      "type": "priority",
      "title": "Embarque prioritario",
      "text": "Si embarcas con el grupo Priority serás de los primeros en subir al avión y además podrás acceder de forma prioritaria a los compartimentos de equipaje.",
      "button": "Añadir prioridad desde 9,00€",
      
    }
    ]
  }; 


  constructor() { }

  ngOnInit() {
  }

}
