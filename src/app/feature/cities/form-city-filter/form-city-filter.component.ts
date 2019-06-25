import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-city-filter',
  templateUrl: './form-city-filter.component.html',
  styleUrls: ['./form-city-filter.component.scss']
})
export class FormCityFilterComponent implements OnInit {

  cityform: FormGroup;
  cityform1: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
