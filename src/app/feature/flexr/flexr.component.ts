import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexr',
  templateUrl: './flexr.component.html',
  styleUrls: ['./flexr.component.css']
})
export class FlexrComponent implements OnInit {

  vm : object = {};
  constructor() {
    this.vm={box1Width:33, direction:'column', hideBox:false};
  }

  ngOnInit() {
  }
  
}
