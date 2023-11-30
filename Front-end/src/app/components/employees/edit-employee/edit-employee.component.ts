import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.models';
import { EmployeesService } from 'src/app/services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails=
    {id:'',
    fullName:'',
    email:'',
    phone:0,
    address:''
    }
  ;


  constructor(private route:ActivatedRoute,private employeesService:EmployeesService, private router:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');
        if(id){
          this.employeesService.getEmployee(id)
          .subscribe({
            next:(response)=>{              
              this.employeeDetails = response.result;
              console.log(response.result);
            },
            error:(error)=>{
              console.error(error);
            }

          });
        }else{
          console.log(this.employeeDetails)
        }
      }
    })
  }

  updatedEmployees(){
    this.employeesService.updateEmployee(this.employeeDetails,this.employeeDetails.id)
    .subscribe({
      next:(employee)=>{                
        this.router.navigate(['employees']);
        console.log(employee)
      },
      error: (response) =>{
        console.log(response);
      }
    });
  }

  deleteEmployee(){
    this.employeesService.deleteEmployee(this.employeeDetails.id)
    .subscribe(_=>this.router.navigate(['employees']))
  }

}