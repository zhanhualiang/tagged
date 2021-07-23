import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { WebService } from '../service/web.service';

@Component({
  selector: 'app-tagged-header',
  templateUrl: './tagged-header.component.html',
  styleUrls: ['./tagged-header.component.scss']
})
export class TaggedHeaderComponent implements OnInit {
  //@Input('user-name') userName?: string = "guess";
  userName: string = "guess";

  constructor(private snakeBar: MatSnackBar, 
              private router: Router, 
              private webService: WebService,
              private auth: AuthenticationService) {
    if(localStorage.getItem("uid") && localStorage.getItem("token")) {
      webService.getUserName(Number(localStorage.getItem("uid"))).subscribe(result => {
        if(result.respond == "invalid token or token expired.") {
          auth.tokenExpired();
        } else {
          this.userName = result[0].name;
        }
      });
    } else {
      auth.notLogin();
    }
  }

  ngOnInit(): void {

  }

  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    this.snakeBar.open("Log out successfully!", "", {
      duration: 3000,
      horizontalPosition: "center",
    });
    this.router.navigate(['/']);
  }

}
