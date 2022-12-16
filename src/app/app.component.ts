import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  NAME: string;
  heading: string = 'create new account from ts';

constructor(private fb: FormBuilder){}

createNewProfile:FormGroup;

ngOnInit() {
    this.createNewProfile=this.fb.group({
name:[""],
age:[],
sex:[""],
dateOfBirth:[],
postalCode:[],
city:[""],
district:[""],
state:[""],
country:[""],
emailId:[""],
username:[""],
password:[""],
clgName:[""],    
})
}

login(){
  console.log("login clicked");
console.log("form controls",  this.createNewProfile);
this.createNewProfile.controls.name.setValue("");
}

  changeTitle(){
    this.heading="heading changed";
  }

}
