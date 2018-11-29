import { Component, OnInit } from '@angular/core';

interface IStudent {
  id:number;
  firstName:string;
  lastName:string;
  course:string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  students: Array<IStudent> = [];

  constructor() {
    this.students[0] = {
      id: 0,
      firstName: 'Lucas',
      lastName: 'Phan',
      course: 'Programming'
    }
    this.students[1] = {
      id: 2,
      firstName: 'Tom',
      lastName: 'Brady',
      course: 'Athlete'
    }
    this.students[2] = {
      id: 3,
      firstName: 'Mark',
      lastName: 'Zuckerberg',
      course: 'Herpetology'
    }
    this.students[3] = {
      id: 4,
      firstName: 'Joe',
      lastName: 'Biden',
      course: 'Politics'
    }
  }

  ngOnInit() {
  }

  addStudent(){
    const student: IStudent = {
      id:1,
      firstName: "Mike",
      lastName: "Tyson",
      course: "Boxing"
    };
    this.students.push(student);
  }

}
