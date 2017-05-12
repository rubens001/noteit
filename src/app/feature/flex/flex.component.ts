import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {

   direction = 'row';
  DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];

  // para grid
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleDirection() {
    const next = (this.DIRECTIONS.indexOf(this.direction) + 1 ) % this.DIRECTIONS.length;
    this.direction = this.DIRECTIONS[next];
  }

  observe() {
    // alert('observe');
    const responseStream: Observable<any> = Observable.create('https://api.github.com/users');
    

  }
}
