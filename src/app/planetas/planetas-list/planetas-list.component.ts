import { PlanetasService } from './../planetas-service/planetas.service';
import { Component, OnInit } from '@angular/core';
import { Planeta } from '../planetas-model/planeta';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-planetas-list',
  templateUrl: './planetas-list.component.html',
  styleUrls: ['./planetas-list.component.css']
})
export class PlanetasListComponent implements OnInit {

  planetaBusca = '';
  planetas: Planeta[] = [];

  cols: number;
  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
  };

  constructor(planetasService: PlanetasService, private breakpointObserver: BreakpointObserver) {

    planetasService.list()
      .subscribe(planetas => this.planetas = planetas);

      /*this.planetas = [
        {id: '0', image: '/', name: 'Goku', residents: ['1', '2' , '3']},
        {id: '1', image: '/', name: 'Majin', residents: ['1', '2' , '3']},
        {id: '2', image: '/', name: 'Pico', residents: ['1', '2' , '3']},
        {id: '3', image: '/', name: 'Gohan', residents: ['1', '2' , '3']},
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

  ngOnInit() {
  }

  filtrarPlanetas() {
    if ( this.planetaBusca ) {
      const exp = new RegExp(this.planetaBusca.trim(), 'i');
      return this.planetas.filter(planeta => exp.test(planeta.name));
    }
    return this.planetas;
  }

  formatarUrlImagem(url) {
    if (url.includes('http')) {
      return url;
    } else if (url.includes('..')) {
      return 'https://dragon-ball-api.herokuapp.com/' + url;
         }
  }
}
