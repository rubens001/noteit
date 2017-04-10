import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MdSnackBar } from '@angular/material';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers : [ ]
})
export class TestComponent implements OnInit {

  dialogRef: MdDialogRef<any>;
  progress = 0;
  test: any = {};
  user: any = {};
  lastDialogResult: string;
  foods = [{name: 'bread', rating: 6}, {name: 'meat', rating: 7}, {name: 'lunch', rating: 2}];

  // para autocomplete
   myControl = new FormControl();
   options = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
   'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
   'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
   'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
   'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
   'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
   'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
   filteredOptions: Observable<string[]>;

  constructor(public dialog: MdDialog, public viewContainerRef: ViewContainerRef,
    private _snackbar: MdSnackBar) {
    this.test.value = 'First value';
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
        this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
      }, 200);
  }

  ngOnInit() {
    // para autocomplete
    this.filteredOptions = this.myControl.valueChanges
         .startWith(null)
         .map(val => val ? this.filter(val) : this.options.slice());
  }

  filter(val: string): string[] {
      return this.options.filter(option => new RegExp(val, 'gi').test(option));
   }

  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    this.dialogRef = this.dialog.open(DialogOverviewExampleComponent, config);

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('### modal close ', result);
      this.dialogRef = null;
    });
    // this.dialog.open(DialogOverviewExampleComponent);
  }

  showSnackbar() {
    this._snackbar.open('YUM SNACKS', 'CHEW');
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleComponent {
  constructor(public dialogRef: MdDialogRef<any>) { }
}
