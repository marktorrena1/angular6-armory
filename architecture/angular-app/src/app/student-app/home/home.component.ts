import { Component, OnInit } from '@angular/core';

import { StudentService } from "../shared/student.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private studentService : StudentService) { }
  
  studentList: any;

  ngOnInit() {
    this.studentService.getStudentList()
      .subscribe(students => { 
        this.studentList = students.result;
        console.log("student service");
        console.log(this.studentService.studentListTest);
      },err => {
        alert("Error" + err.message);
      })
  
   
  }

}
