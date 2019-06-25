import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.scss']
})
export class FormFilterComponent implements OnInit {

  activityForm = new FormGroup({
    search: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
