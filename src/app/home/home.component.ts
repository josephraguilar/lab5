import { Component, OnInit } from '@angular/core';

interface IDecisionProps {
  condInfo: string;
  condX: Boolean;
  condY: Boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  conditions: Array<IDecisionProps> = []

  constructor() { }

  ngOnInit() {
    this.conditions = [
      {
        condInfo: 'false X, false Y',
        condX: false,
        condY: false
      },
      {
        condInfo: 'false X, true Y',
        condX: false,
        condY: true
      },
      {
        condInfo: 'true X, false Y',
        condX: true,
        condY: false
      },
      {
        condInfo: 'true X, true Y',
        condX: true,
        condY: true
      },
    ]
  }

}
