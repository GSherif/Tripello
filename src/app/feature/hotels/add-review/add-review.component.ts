import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  addReviewForm= new FormGroup({
    text: new FormControl('')
  });
 
  
  constructor() { }

  ngOnInit() {
  }

}
