import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormField,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatLabel,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { PersonagensCardComponent } from './personagens/personagens-card/personagens-card.component';
import { PersonagensListComponent } from './personagens/personagens-list/personagens-list.component';
import { PersonagensModule } from './personagens/personagens.module';
import { PlanetasCardComponent } from './planetas/planetas-card/planetas-card.component';
import { PlanetasListComponent } from './planetas/planetas-list/planetas-list.component';
import { PlanetasModule } from './planetas/planetas.module';
import { SobreComponent } from './sobre/sobre.component';
import { ResidentesComponent } from './residentes/residentes.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonagensCardComponent,
    PersonagensListComponent,
    PlanetasListComponent,
    PlanetasCardComponent,
    SobreComponent,
    ResidentesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
    MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
    MatTableModule, MatPaginatorModule, MatSortModule,
    PersonagensModule,
    PlanetasModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
