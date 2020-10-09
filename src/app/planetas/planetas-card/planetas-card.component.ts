import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planetas-card',
  templateUrl: './planetas-card.component.html',
  styleUrls: ['./planetas-card.component.css']
})
export class PlanetasCardComponent implements OnInit {

  @Input() srcImagem: String;
  @Input() altImagem: String;
  @Input() titulo: String;
  @Input() populacao: String;
  @Input() routeTo: String;

  constructor() { }

  ngOnInit() {
  }

  exibirResidentes(planeta) {
    console.log(planeta);
  }
}
