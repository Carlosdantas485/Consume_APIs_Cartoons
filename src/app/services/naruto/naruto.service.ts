import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NarutoService {
  people = []

  constructor(private httpClinet: HttpClient) { 
    this.showPeople()
  }

   showPeople(){
    const requisicao = this.httpClinet.get<any>('https://rf-naruto-api.herokuapp.com/api/v1/shinobi').subscribe((people)=>{
    this.people = people.results
    console.log(requisicao)
    })
  }
}
