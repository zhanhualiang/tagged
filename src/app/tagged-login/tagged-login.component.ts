import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tagged-login',
  templateUrl: './tagged-login.component.html',
  styleUrls: ['./tagged-login.component.scss']
})
export class TaggedLoginComponent implements OnInit {

  emailValue: string = "";
  passwordValue: string = "";

  emailValidator: FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordValidator: FormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  getEmailErrorMessage() {
    if (this.emailValidator.hasError('required')) {
      return 'You must enter your E-mail!';
    }
    return this.emailValidator.hasError('email') ? 'Not a valid email!' : '';
  }

  getPasswordErrorMessage() {
    return this.passwordValidator.hasError('required') ? 'You must enter your password!' : '';
  }

}
