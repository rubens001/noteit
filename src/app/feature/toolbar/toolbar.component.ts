import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  menuBars = 'fa fa-bars fa-2x';
  menuClass = this.menuBars;
  isSidenav = false;

  constructor() { }

  ngOnInit() {
  }

  onMenu = function(sidenav : any) {
    this.isSidenav = !this.isSidenav;
    if (this.isSidenav) {
      this.menuClass = 'fa fa-times fa-2x';
      sidenav.open();
    } else {
      this.menuClass = this.menuBars;
      sidenav.close();
    }
  }
  onCloseSidenav() {
    this.isSidenav=false;
    this.menuClass = this.menuBars;
  }
}
