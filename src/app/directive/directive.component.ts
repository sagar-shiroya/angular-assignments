import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  public isChecked = true;
  public bgColor = '#ffffff';
  public operation = "";
  public number1:number = 0;
  public number2:number = 1;
  public employeeData = [
    {'name':'John Doe', 'department': 'Front-end', 'employeeID': '2456'},
    {'name':'Cole Houston', 'department': 'Marketing', 'employeeID': '1357'},
    {'name':'Syma Sharma', 'department': 'HR', 'employeeID': '3569'},
    {'name':'Ankit Patel', 'department': 'UX', 'employeeID': '3425'},
    {'name':'Virat Sharma', 'department': 'PHP', 'employeeID': '1242'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  perform(operation:any){
    this.operation = operation;
  }

}
