import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {

  constructor() { 
  }

  name: string = "ravindu";
  randomNumber = Math.random();

  @Input() value: 'X' | 'O';

  
}
