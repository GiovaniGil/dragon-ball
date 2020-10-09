import { PlanetasService } from './../../planetas/planetas-service/planetas.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Personagem } from './../personagens-model/personagem';
import { PersonagensService } from './../personsagens-service/personagens.service';


@Component({
  selector: 'app-personagens-list',
  templateUrl: './personagens-list.component.html',
  styleUrls: ['./personagens-list.component.css']
})
export class PersonagensListComponent implements OnInit {

  title = 'app';
  nomeBusca = '';
  personagens: Personagem[] = [];


  cols: number;

  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
  };


  ngOnInit() {

    }

  constructor(private personagensService: PersonagensService,
              private planetasService: PlanetasService,
              private breakpointObserver: BreakpointObserver,
              private activatedRoute: ActivatedRoute){

    // Verifica parâmetros de busca de residentes/planetas
    const planeta = this.activatedRoute.snapshot.params.planeta;
    if (planeta) {
      this.planetasService.findByName(planeta)
      .subscribe((planeta) => {
        if (planeta) {
          planeta.residents.forEach((residente) => {
            this.personagensService.findByName(residente).subscribe((personagem) => this.personagens.push(personagem));
          });
        }
      });
    } else {
    this.personagensService.list()
      .subscribe(personagens => this.personagens = personagens);
    }

    /*this.personagens = [
      { id: '0', image: 'https://dragon-ball-api.herokuapp.com/../images/Goku.jpg', name: 'Goku' },
      { id: '1', image: 'https://dragon-ball-api.herokuapp.com/../images/Goku.jpg', name: 'Goku' },
      { id: '2', image: 'https://dragon-ball-api.herokuapp.com/../images/Goku.jpg', name: 'Goku' },
      { id: '3', image: 'https://dragon-ball-api.herokuapp.com/../images/Goku.jpg', name: 'Goku' },
    ];*/

    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.md;
        }
      }
    });
  }


  filtrarPersonagens() {
    if (this.nomeBusca) {
      const exp = new RegExp(this.nomeBusca.trim(), 'i');
      return this.personagens.filter(personagem => exp.test(personagem.name));
    }
    return this.personagens;
  }

  formatarUrlImagem(url) {
    if (url.includes('http')) {
      return url;
    } else if (url.includes('..')) {
      return 'https://dragon-ball-api.herokuapp.com/' + url;
    }
  }
}
