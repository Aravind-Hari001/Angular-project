import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {

  emp_data = [
    { sno: 1, name: "Ram", inversmentDate: "10.02.2022", amount: "1,00,000", source: "Test1", comments: "Sample1"},
    { sno: 2, name: "Raja", inversmentDate: "14.02.2022", amount: "2,00,000", source: "Test2", comments: "Sample2"},
    { sno: 3, name: "Suresh", inversmentDate: "17.04.2022", amount: "1,00,000", source: "Test3", comments: "Sample3"},
    { sno: 4, name: "Vinoth", inversmentDate: "22.06.2022", amount: "3,00,000", source: "Test4", comments: "Sample4"},
    { sno: 5, name: "Dinesh", inversmentDate: "30.08.2022", amount: "4,00,000", source: "Test5", comments: "Sample5"}
  ]


  constructor(
    private route: Router,
  ) { }
  if_delete = false;
  del_sno = 0;
  add_employee() {
    this.route.navigate(['capital/manipulate'], { queryParams: { action: "Add" } })
  }
  view_employee(sno: any) {
    let data = this.emp_data[sno];

    this.route.navigate(['capital/manipulate'], {
      queryParams:
        { action: 'View', sno: data.sno, name: data.name, inversmentDate: data.inversmentDate, amount: data.amount, source: data.source, comments: data.comments }
    })
  }
  edit_employee(sno: any) {
    let data = this.emp_data[sno];
    this.route.navigate(['capital/manipulate'], {
      queryParams:
        { action: 'Edit', sno: data.sno, name: data.name, inversmentDate: data.inversmentDate, amount: data.amount, source: data.source, comments: data.comments }
    })
  }
  alert_delete(sno: number) {
    this.if_delete = true;
    this.del_sno = sno;
  }
  close_delete() {
    this.if_delete = false;
  }
  delete_employee() {
    let data = this.emp_data[this.del_sno];

    this.route.navigate(['capital/manipulate'], {
      queryParams:
        { action: 'Delete', sno: this.del_sno, name: data.name, inversmentDate: data.inversmentDate, amount: data.amount, source: data.source, comments: data.comments }
    })
  }
  ngOnInit(): void {
  }
}


