import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User;
  signupForm: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    if (this.signupForm.valid) {
      this.user = {
        id: 4,
        firstName: this.signupForm.value['firstName'],
        lastName: this.signupForm.value['lastName'],
        phoneNumber: this.signupForm.value['phoneNumber'],
        email: this.signupForm.value['email'],
        password: this.signupForm.value['password']
      }
      console.log(this.user);
      this.userService.add(this.user);
      this.router.navigate(['/maketrip']);
    }
  }
}
