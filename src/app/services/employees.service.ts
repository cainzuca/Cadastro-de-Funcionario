import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = 'https://localhost:7103/'
  constructor(private http: HttpClient) { }

  getAllEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + 'api/Contact');
  }

  addEmployee(addEmployeeRequest:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl + 'api/Contact',addEmployeeRequest);
  }

  getEmployee(id:string): Observable<any>{    
    return this.http.get<any>(this.baseApiUrl + 'api/Contact/' + id);
    
  }

  updateEmployee(addEmployeeRequest:Employee, id:string):Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl + 'api/Contact/' + id,addEmployeeRequest);
  }

  deleteEmployee(id:string){
    return this.http.delete<void>(this.baseApiUrl + 'api/Contact/' + id);
  }
}
