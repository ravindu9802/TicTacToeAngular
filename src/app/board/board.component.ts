import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares: string[];
  isXNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.isXNext = true;
  }

  get Player() {
    return this.isXNext ? "X" : "O";
  }

  makeMove(index: number) {
    if (!this.squares[index]) {
      this.squares.splice(index, 1, this.Player);
      this.isXNext = !this.isXNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {

    const winningPatters = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    
    for (let i = 0; i < winningPatters.length; i++) {
      const [a, b, c] = winningPatters[i];
      console.log(a,b,c);
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
      
    }
    return null;
  }

}
