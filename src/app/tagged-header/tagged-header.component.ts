import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tagged-header',
  templateUrl: './tagged-header.component.html',
  styleUrls: ['./tagged-header.component.css']
})
export class TaggedHeaderComponent implements OnInit {
  @Input('user-name') userName?: string = "guess";

  constructor() { }

  ngOnInit(): void {
  }

}
