import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
    this.getStudentListTest();
  }

  public studentListTest:any ;

  public getStudentList(): Observable<any> {
    return this.http.get("http://localhost:8080/students");
  }

  public getStudentListTest(): void {
     this.http.get("http://localhost:8080/students")
      .subscribe(student =>{
        this.studentListTest = student;
      });
  }
}
