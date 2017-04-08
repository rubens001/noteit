import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  direction = "row";
  DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];

  // para grid
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  
  toggleDirection() {
    let next = (this.DIRECTIONS.indexOf(this.direction) +1 ) % this.DIRECTIONS.length;
    this.direction = this.DIRECTIONS[next];
  }
}
