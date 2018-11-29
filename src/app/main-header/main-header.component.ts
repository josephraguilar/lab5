import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  private firstName: string;
  private lastName: string;

  constructor() {
    this.firstName = "Lucas";
    this.lastName = "Phan";
  }

  showGreeting() {
    alert(`Hello ${this.firstName} ${this.lastName}!`)
  }

  ngOnInit() {
  }

}
