import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { InicialPageComponent } from './components/inicial-page/inicial-page.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path:'',
    component: InicialPageComponent
  },
  {
    path:'employees',
    component: EmployeesListComponent
  },
  {
    path:'add-employee',
    component: AddEmployeeComponent
  },
  {
    path:'edit-employee/:id',
    component: EditEmployeeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
