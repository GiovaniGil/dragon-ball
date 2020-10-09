import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Personagem } from '../personagens-model/personagem';

const API = 'https://dragon-ball-api.herokuapp.com/api/character';

@Injectable({ providedIn: 'root' })
export class PersonagensService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  list() {
    return this.http
    .get<Personagem[]>(API);
  }

  findByName(name: String) {
    return this.http
    .get<Personagem>(API + '/' + name);
  }
}
