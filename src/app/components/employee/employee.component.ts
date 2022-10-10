import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';

type employee =
  {
    sno: number,
    name: string,
    email: string,
    branch: string,
    address: string,
    cell: string,
    doj: string,
    isactive: string
  }
  ;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  emp_data = [
    { sno: 1, name: "Ram", email: "ram@hgh.com", branch: "Sivakasi", address: "2/44,T.Nagar Main Road", cell: "9876543210", doj: "01.02.2022", isactive: "Yes" },
    { sno: 2, name: "Raja", email: "raja@hgh.com", branch: "Sivakasi", address: "8/24,K.Nagar Main Road", cell: "9123459875", doj: "01.02.2022", isactive: "Yes" },
    { sno: 3, name: "Suresh", email: "suresh@hgh.com", branch: "Sivakasi", address: "66/02,N.R.K.Road", cell: "9874321600", doj: "01.02.02022", isactive: "Yes" },
    { sno: 4, name: "Vinoth", email: "vinoth@hgh.com", branch: "Sivakasi", address: "3/52,Vinayagar Kovil Street", cell: "8876543210", doj: "01.03.2022", isactive: "Yes" },
    { sno: 5, name: "Dinesh", email: "dinesh@hgh.com", branch: "Sivakasi", address: "11/44,Murugan Kovil Street", cell: "9866543211", doj: "01.03.2022", isactive: "Yes" }
  ];

  emp: employee = { sno: 0, name: "", email: "", branch: "", address: "", cell: "", doj: "", isactive: "" }
  action = "";
  headding = ""
  disable = false;
  not_checked = false;
  active = { yes: false, no: false };
  branches = ["Sivakasi", "Aruppukottai", "Rajapalayam", "Sattur", "Sriv"];
  add = false;
  edit = false;
  branch_name = "Sivakasi";
  constructor(
    private route: Router,
  ) { }
  if_delete = false;
  del_sno = 0;
  disp_add_employee() {
    this.add = true;
    this.headding = "Add employee";
  }
  isactive(): string {
    if (this.active.yes)
      return "Yes";
    return "No";
  }
  get_branch_name(event: any) {
    this.branch_name = event.target.value;
  }
  add_employee(data: any): any {
    if (this.edit) {
      this.emp_data[this.del_sno].sno = this.emp.sno;
      this.emp_data[this.del_sno].name = this.emp.name;
      this.emp_data[this.del_sno].email = this.emp.email;
      this.emp_data[this.del_sno].branch = this.branch_name;
      this.emp_data[this.del_sno].address = this.emp.address;
      this.emp_data[this.del_sno].cell = this.emp.cell;
      this.emp_data[this.del_sno].doj = this.emp.doj;
      if (this.active.yes && !this.active.no) this.emp_data[this.del_sno].isactive = "Yes";
      else this.emp_data[this.del_sno].isactive = "No";
      this.close_employee();
      return this.edit = false;
    }
    this.emp_data.push({
      sno: (this.emp_data.length) + 1, name: data.emp_name, email: data.email,
      branch: this.branch_name, address: data.address, cell: data.cell, doj: data.doj,
      isactive: this.isactive()
    });
    this.close_employee();
  }
  view_employee(sno: any) {
    this.add = true;
    this.disable=true;
    this.headding = "View employee";
    this.emp.name = this.emp_data[sno].name;
    this.emp.email = this.emp_data[sno].email;
    this.emp.branch = this.emp_data[sno].branch;
    this.emp.address = this.emp_data[sno].address;
    this.emp.cell = this.emp_data[sno].cell;
    this.emp.doj = this.emp_data[sno].doj;
    if (this.emp_data[sno].isactive == "Yes") this.active.yes = true;
    else this.active.no = true;
  }
  disp_edit_employee(sno: number) {
    this.add = true;
    this.edit = true;
    this.del_sno = sno;
    this.headding = "Edit employee";
    this.emp.name = this.emp_data[sno].name;
    this.emp.email = this.emp_data[sno].email;
    this.emp.branch = this.emp_data[sno].branch;
    this.emp.address = this.emp_data[sno].address;
    this.emp.cell = this.emp_data[sno].cell;
    this.emp.doj = this.emp_data[sno].doj;
    if (this.emp_data[sno].isactive == "Yes") this.active.yes = true;
    else this.active.no = true;
  }
  alert_delete(sno: number) {
    this.if_delete = true;
    this.del_sno = sno;
  }
  close_delete() {
    this.if_delete = false;
  }
  delete_employee() {
    for (let i = this.del_sno; i < this.emp_data.length; i++) {
      if (this.emp_data[i + 1]) {
        this.emp_data[i] = this.emp_data[i + 1];
      }
    }
    this.emp_data.pop();
    this.close_delete();
  }
  ngOnInit(): void {
  }
  check(check: string) {
    if (check == "yes") this.active.yes = true, this.active.no = false;
    else if (check == "no") this.active.no = true, this.active.yes = false;
  }
  close_employee() {
    this.add = false;
    this.disable=false;
    this.active.yes = this.active.no = false;
    this.emp.name = this.emp.email = this.emp.branch = this.emp.address = this.emp.cell = this.emp.doj = "";
  }
  submit() {
    if (this.action == "Edit") {
      alert("Changes Made Successful");
      this.route.navigate(['employee']);
    }
    else if (this.action == "Add") {
      if (this.active.yes || this.active.no) {
        alert("Added Successful");
        this.route.navigate(['employee']);
      }
      else {
        this.not_checked = true;
      }
    }
  }


}
