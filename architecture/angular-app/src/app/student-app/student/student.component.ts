import { Component, OnInit } from '@angular/core';

import { StudentService } from "../shared/student.service";

@Component({
  selector: 'app-student',
  template: `
    <div>
      <p>
        student page works!
      </p>
      <router-outlet></router-outlet>  
    </div>
    
  `,
  styles: []
})
export class StudentComponent implements OnInit {

  constructor(private studentService : StudentService) { }

  ngOnInit() {
    console.log("StudentPAGE");
    console.log(this.studentService.studentListTest);
  }

}
