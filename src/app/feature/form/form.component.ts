import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  floatingLabel: string = 'auto';
  color: boolean;
  requiredField: boolean;
  ctrlDisabled = false;

  name: string;
  errorMessageExample1: string;
  errorMessageExample2: string;
  errorMessageExample3: string;
  items: any[] = [
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 40 },
    { value: 50 },
  ];
  rows = 8;
  formControl = new FormControl('hello'); // , Validators.required
  emailFormControl = new FormControl(''); // ,  [Validators.required, Validators.pattern(EMAIL_REGEX)]
  model = 'hello';
  max = 5;
  EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  addABunch(n: number) {
    for (let x = 0; x < n; x++) {
      this.items.push({ value: ++this.max });
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
