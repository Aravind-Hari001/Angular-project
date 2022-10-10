import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CapitalComponent } from './components/capital/capital.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FormComponent } from './components/form/form.component';
import { ManipulateCapitalComponent } from './components/manipulate-capital/manipulate-capital.component';
import { ManipulateEmployeeComponent } from './components/manipulate-employee/manipulate-employee.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'employee/manipulate',
    component: ManipulateEmployeeComponent,
  },
  {
    path: 'capital',
    component: CapitalComponent,
  },
  {
    path: 'capital/manipulate',
    component: ManipulateCapitalComponent,
  },
  {
    path: 'form',
    //component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[EmployeeComponent,ManipulateEmployeeComponent,
  CapitalComponent,ManipulateCapitalComponent]
