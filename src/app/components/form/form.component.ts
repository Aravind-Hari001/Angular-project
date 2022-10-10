import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  fb= new FormBuilder;
  male=false;female=false;
  val_gender=true;
  Form=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email,Validators.required]),
    dob:new FormControl('',Validators.required),
    std:new FormControl('',Validators.required),
    cell:new FormControl('',[Validators.minLength(10),Validators.maxLength(10),Validators.required]),
    address: new FormControl('',Validators.required),
    captcha: new FormControl('',Validators.required),
    skills: this.fb.array([
      this.fb.group({
        name:['JavaScript'],checked:[false]
      }),
      this.fb.group({
        name:['Angular'],checked:[false]
      }),
      this.fb.group({
        name:['React Js'],checked:[false]
      }),
      this.fb.group({
        name:['Python'],checked:[false]
      }),
      this.fb.group({
        name:['Java'],checked:[false]
      }),
      this.fb.group({
        name:['Other'],checked:[true]
      })
    ])
 });
  @Input() val_captcha = false;
  @Output() newItemEvent = new EventEmitter<string>();
  validate_captcha(value: string) {
    this.newItemEvent.emit(value);

  }
  public get skills(){
    return this.Form.get('skills') as FormArray;
  }
  constructor() {
  }

  ngOnInit(): void {
  }

  val_cell: boolean = false;
  val_country: boolean = false;

  valid_cell() {
    if (this.Form.controls.cell.value && this.Form.controls.cell.value.toString().length == 10) {
      this.val_cell = false;
    }
    else {
      this.val_cell = true;
    }
  }
  valid_country() {
    if (this.Form.controls.address.get('country')?.value == ('' || undefined)) {
      this.val_country = true;
    }
    else this.val_country = false;
  }
  valid_gender(gender:string,isCheck:boolean){
    if (gender=="male" && isCheck) {
      this.male=true;
      this.female=false;
    }
    else if (gender=="female" && isCheck) {
      this.male=false;
      this.female=true;
    }
  }
  // valid_skills():boolean{
  //   let res=false;
  //   for(let i=0;i<this.Form.getRawValue()["skills"].length;i++){
  //     if(this.Form.controls.skills.controls[i].touched){
  //       if(this.Form.getRawValue()["skills"][i].checked){alert("false");
  //         return true;
  //       }
  //       res= true;
  //     }

  //   }
  //   return res;
  // }
  submited() {
    if (this.male || this.female) {
      this.val_gender=true; 
      alert("Enrolled Successfully");
    }
    else{
      this.val_gender=false;
    }
  }

}
