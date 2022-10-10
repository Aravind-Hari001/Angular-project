import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manipulate-employee',
  templateUrl: './manipulate-employee.component.html',
  styleUrls: ['./manipulate-employee.component.css']
})
export class ManipulateEmployeeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private nav: Router
  ) { }
  emp = { sno: "", name: "", email: "", branch: "", address: "", cell: "", doj: "", active: "" }
  action = "";
  headding=""
  disable = false;
  not_checked = false;
  active = { yes: false, no: false };
  branches = ["Sivakasi", "Aruppukottai", "Rajapalayam", "Sattur", "Sriv"];
  ngOnInit(): void {
    this.route.queryParams.subscribe((data: any) => {
      if (data.action != "Add") {
        this.emp.sno = data.sno;
        this.emp.name = data.name;
        this.emp.email = data.email;
        this.emp.branch = data.branch;
        this.emp.address = data.address;
        this.emp.cell = data.cell;
        this.emp.doj = data.doj;
        this.emp.active = data.isactive;
        this.action = data.action
        if (data.action == "View") this.disable = true,this.headding="Employee Detailes";
        else if(data.action == "Edit") this.headding="Edit Employee Detailes";
        if (data.isactive == "Yes") this.active.yes = true;
        else this.active.no = true
        if (data.action == "Delete") {
          alert("Deleted successfully");
         this.nav.navigate(['employee']);
        };
      }
      else if (data.action == "Add") {
        this.action = data.action;
        this.headding="Add Employee";
      }
    })
  }
  cancel_click() {
    this.nav.navigate(['employee']);
  }
  check(check: string) {
    if (check == "yes") this.active.yes = true;
    else if (check == "no") this.active.no = true;
  }
  close_employee(){
    this.nav.navigate(['employee']);
  }
  submit() {
    if (this.action == "Edit") {
      alert("Changes Made Successful");
      this.nav.navigate(['employee']);
    }
    else if (this.action == "Add") {
      if (this.active.yes || this.active.no) {
        alert("Added Successful");
        this.nav.navigate(['employee']);
      }
      else {
        this.not_checked = true;
      }
    }
  }

}
