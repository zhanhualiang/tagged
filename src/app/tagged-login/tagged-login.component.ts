import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service'

@Component({
  selector: 'app-tagged-login',
  templateUrl: './tagged-login.component.html',
  styleUrls: ['./tagged-login.component.scss']
})
export class TaggedLoginComponent implements OnInit {

  emailValidator: FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordValidator: FormControl = new FormControl('', [Validators.required]);

  constructor(private authenticationService: AuthenticationService, private snakeBar: MatSnackBar, private router: Router) { }

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

  login(){
    const info: {email:string, password:string} = {
      email: this.emailValidator.value,
      password: this.passwordValidator.value
    }
    console.log(info);
    this.authenticationService.login(info).subscribe((result) => {
      console.log(result);
      if(result.status == "success" && result.jwtToken) {
        localStorage.setItem("token",result.jwtToken);
        localStorage.setItem("uid", result.uid!.toString());
        this.snakeBar.open("Log in success!", "", {
          duration: 3000,
          horizontalPosition: "center",
        });
        this.router.navigate(['/tasks']);
      } else {
        this.snakeBar.open("E-mail not exist or password incorrect.", "", {
          duration: 3000,
          horizontalPosition: "center",
        })
      }
    })
  }

}
