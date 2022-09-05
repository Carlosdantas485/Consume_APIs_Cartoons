import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-naruto-card',
  templateUrl: './naruto-card.component.html',
  styleUrls: ['./naruto-card.component.css']
})
export class NarutoCardComponent implements OnInit {

  constructor() { }
  @Input() people!: string ;
  
  @Input() number!: number ;

  getImagePeople(){
    
    const formatNumber =  this.number;
    
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatNumber}.png`
  }
  ngOnInit(): void {
  }

}
