import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // public banner = require(".assets/images/angular-logo.jpg");
  constructor() { }

  ngOnInit(): void {
  }

}
