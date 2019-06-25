import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'form-city-filter',
  templateUrl: './form-city-filter.component.html',
  styleUrls: ['./form-city-filter.component.scss']
})
export class FormCityFilterComponent implements OnInit {

  cityDetails = new FormGroup({
    search: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(1)
  }

}
