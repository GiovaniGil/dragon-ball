import { PlanetasService } from './../planetas/planetas-service/planetas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Planeta } from '../planetas/planetas-model/planeta';

@Component({
  selector: 'app-residentes',
  templateUrl: './residentes.component.html',
  styleUrls: ['./residentes.component.css']
})
export class ResidentesComponent implements OnInit {

  planeta: Planeta;

  constructor(private planetasService: PlanetasService, private activatedRoute: ActivatedRoute) {



    const planeta = this.activatedRoute.snapshot.params.planeta;
    this.planetasService.findByName(planeta)
      .subscribe(planeta => this.planeta = planeta);

      this.planeta = {id: '0', image: '/', name: 'Goku', residents: ['1', '2' , '3']};

  }
  ngOnInit() {
  }

}
