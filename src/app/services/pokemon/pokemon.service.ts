import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = []

  constructor(private httpClinet: HttpClient) { 
    this.showPokemon()
  }

   showPokemon(){
    const requisicao = this.httpClinet.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').subscribe((pokemon)=>{
    this.pokemons = pokemon.results
    console.log(requisicao)
    })
  }
}
