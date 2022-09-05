import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NarutoReadComponent } from './Views/naruto/naruto-read/naruto-read.component';
import { HomeComponent } from './Views/home/home.component';
import { PokemonReadComponent } from './Views/pokemon/pokemon-read/pokemon-read.component';
import { PokemonCardComponent } from './Views/pokemon/pokemon-card/pokemon-card.component';
import { PokemonService } from './services/pokemon/pokemon.service';
import { NarutoService } from './services/naruto/naruto.service';
import { HttpClientModule } from '@angular/common/http';
import { NarutoCardComponent } from './Views/naruto/naruto-card/naruto-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    NarutoReadComponent,
    HomeComponent,
    PokemonReadComponent,
    PokemonCardComponent,
    NarutoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PokemonService,
    NarutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
