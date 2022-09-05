import { Component } from '@angular/core';
import { NarutoService } from 'src/app/services/naruto/naruto.service';

@Component({
  selector: 'app-naruto-read',
  templateUrl: './naruto-read.component.html',
  styleUrls: ['./naruto-read.component.css']
})
export class NarutoReadComponent  {

  name!: string;

  constructor(public  narutoServise: NarutoService){}

 
}
