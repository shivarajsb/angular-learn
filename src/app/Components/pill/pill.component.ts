import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.css']
})
export class PillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getName():string{
    console.log("This is the user name");
    return 'Shivaraj Bakale';
  }
}
