import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';
  captcha_res_val=false;
  path=''
  captcha_res(captcha:string){
    if (captcha=="gGphJD") {
      this.captcha_res_val=true;
    }
  }
  constructor(){
    this.path=window.location.pathname;
  }
}
