import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')])
    });
  }

  onSubmit() {
    // console.log(this.loginForm);
    if (this.loginForm.valid) {
      if (this.userService.getByEmailAndPassword(this.loginForm.value['email'], this.loginForm.value['password']) == true) {
        this.router.navigate(['/maketrip']);
      }
      else {
        this.router.navigate(['/countries']);
      }
    }
  }
}