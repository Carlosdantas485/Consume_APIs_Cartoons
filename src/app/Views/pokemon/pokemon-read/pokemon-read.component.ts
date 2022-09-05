import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-read',
  templateUrl: './pokemon-read.component.html',
  styleUrls: ['./pokemon-read.component.css']
})
export class PokemonReadComponent {
  name!: string;

  constructor(public pokemonServise: PokemonService) { }

 

}
