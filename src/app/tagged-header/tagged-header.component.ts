import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tagged-header',
  templateUrl: './tagged-header.component.html',
  styleUrls: ['./tagged-header.component.scss']
})
export class TaggedHeaderComponent implements OnInit {
  @Input('user-name') userName?: string = "guess";

  constructor(private snakeBar: MatSnackBar, private router: Router) { }

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
