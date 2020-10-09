import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanetasListComponent } from './planetas/planetas-list/planetas-list.component';
import { PersonagensListComponent } from './personagens/personagens-list/personagens-list.component';
import { SobreComponent } from './sobre/sobre.component';


const routes: Routes = [
  {path: '' , component: PersonagensListComponent},
  {path: 'personagens' , component: PersonagensListComponent},
  {path: 'planetas' , component: PlanetasListComponent},
  {path: 'sobre' , component: SobreComponent},
  {path: 'residentes/:planeta' , component: PersonagensListComponent},
]
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
