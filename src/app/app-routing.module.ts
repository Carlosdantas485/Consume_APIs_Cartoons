import { PokemonReadComponent } from './Views/pokemon/pokemon-read/pokemon-read.component';
import { NarutoReadComponent } from './Views/naruto/naruto-read/naruto-read.component';
import { HomeComponent } from './Views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "naruto",
    component: NarutoReadComponent
  }
  ,
  {
    path: "pokemon",
    component: PokemonReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
