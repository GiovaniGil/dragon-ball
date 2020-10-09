import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planeta } from '../planetas-model/planeta';

const API = 'https://dragon-ball-api.herokuapp.com/api/planet';

@Injectable({ providedIn: 'root'})
export class PlanetasService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  list() {
    return this.http
    .get<Planeta[]>(API);
  }

  findByName(name: string) {
    return this.http
    .get<Planeta>(API + '/' + name);
  }

}
