import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import * as $ from 'jquery';

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

    // const responseStream: Observable<any> = Observable.create(function (observer: Observer<any>) {
    //   $.getJSON('https://api.github.com/users')
    //   .done(function(response) { observer.next(response); })
    //   .fail(function(jqXHR, statusText, error) {
    //     console.log('error1 ', error, jqXHR.status);
    //     observer.error(error ? error : statusText);
    //   })
    //   .always(function() { observer.complete(); });

    // });

    // responseStream.subscribe(data => {
    //   console.log('data ',data);
    // }, err => {
    //   console.error('error2 found ', err);
    // });

    

  }
}
