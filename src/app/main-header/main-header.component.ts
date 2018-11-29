import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  private firstName: string;
  private lastName: string;

  constructor(private router: Router) {
    this.firstName = "Lucas";
    this.lastName = "Phan";
  }

  goToPage(path: string) {
    this.router.navigate([path]);
  }

  showGreeting() {
    alert(`Hello ${this.firstName} ${this.lastName}!`)
  }

  ngOnInit() {
  }

}
