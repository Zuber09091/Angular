import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http : HttpClient) { }

  postemployeesDetails(data : any){
    return this.http.post<any>("http://localhost:3000/employeeDetails/",data)
  }
  getemployeesDetails(){
    return this.http.get<any>("http://localhost:3000/employeeDetails/")
  }
}
