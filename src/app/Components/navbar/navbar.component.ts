import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  name: string = '';
  constructor() {}

  ngOnInit(): void {}
  onSubmitName(newName: string) {
    this.name = newName;
    console.log(this.name);
    this.name = '';
    newName = '';
  }
}
