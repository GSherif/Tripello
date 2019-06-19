import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User;
  signupForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    });
  }

  onSubmit() { }
}
