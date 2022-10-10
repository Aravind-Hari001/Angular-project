import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manipulate-capital',
  templateUrl: './manipulate-capital.component.html',
  styleUrls: ['./manipulate-capital.component.css']
})
export class ManipulateCapitalComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private nav: Router
  ) { }
  partner = { sno: "", name: "", inversmentDate: "", amount: "", source: "", comments: ""}
  action = "";
  headding=""
  disable = false;
  ngOnInit(): void {
    this.route.queryParams.subscribe((data: any) => {
      if (data.action != "Add") {
        this.partner.sno = data.sno;
        this.partner.name = data.name;
        this.partner.inversmentDate = data.inversmentDate;
        this.partner.amount = data.amount;
        this.partner.source = data.source;
        this.partner.comments = data.comments;
        this.action = data.action
        if (data.action == "View") this.disable = true,this.headding="View Capital";
        else if(data.action == "Edit") this.headding="Edit Partner";
        if (data.action == "Delete") {
          alert("Deleted successfully");
         this.nav.navigate(['capital']);
        };
      }
      else if (data.action == "Add") {
        this.action = data.action;
        this.headding="Add Capital";
      }
    })
  }
  cancel_click() {
    this.nav.navigate(['capital']);
  }
  close_capital(){
    this.nav.navigate(['capital']);
  }
  submit() {
    if (this.action == "Edit") {
      alert("Changes Made Successful");
      this.nav.navigate(['capital']);
    }
    else if (this.action == "Add") {
        alert("Added Successful");
        this.nav.navigate(['capital']);
    }
  }
}
