import { Component, OnInit } from '@angular/core';

interface IStudent {
  id:number;
  firstName:string;
  lastName:string;
  course:string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  students: Array<IStudent> = [];
  editMode: Boolean = false;

  constructor() {
    this.students[0] = {
      id: 0,
      firstName: 'Lucas',
      lastName: 'Phan',
      course: 'Programming'
    }
    this.students[1] = {
      id: 1,
      firstName: 'Tom',
      lastName: 'Brady',
      course: 'Athlete'
    }
    this.students[2] = {
      id: 2,
      firstName: 'Mark',
      lastName: 'Zuckerberg',
      course: 'Herpetology'
    }
    this.students[3] = {
      id: 3,
      firstName: 'Joe',
      lastName: 'Biden',
      course: 'Politics'
    }
   }

  ngOnInit() {
  }

  addStudent(){
    this.editMode = true;
    const student: IStudent = {
      id:null,
      firstName: null,
      lastName: null,
      course: null
    };
    this.students.unshift(student);
  }

  saveStudent() {
    if (this.students[0].id || this.students[0].firstName || this.students[0].lastName || this.students[0].course == null) {
      alert('must fill all fields');
      this.students.splice(0,1);
      this.editMode = false;
    } else {
      this.editMode = false;
    }
  }

  removeStudent(index: number) {
    this.students.splice(index,1);
  }

}
