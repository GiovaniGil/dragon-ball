import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens-card',
  templateUrl: './personagens-card.component.html',
  styleUrls: ['./personagens-card.component.css']
})
export class PersonagensCardComponent implements OnInit {

  @Input() srcImagem: String;
  @Input() altImagem: String;
  @Input() titulo: String;
  @Input() subtitulo: String;

  constructor() { }

  ngOnInit() {
  }

}
