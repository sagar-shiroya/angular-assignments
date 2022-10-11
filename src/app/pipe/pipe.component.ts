import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  public usdCurrency = "";
  public gbpCurrency = "";
  public dateTime = new Date();
  public numberVal = "";
  public stringVal = "";
  public startLength = 0;
  public endLength = this.stringVal.length;
  constructor() { }

  ngOnInit(): void {
  }

}
