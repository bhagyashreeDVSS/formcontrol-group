import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // loginForm= new FormGroup({
  //   name : new FormControl(''),
  //   email : new FormControl('')
  // })

  // onsubmit(){
  //   console.warn(this.loginForm);
  // }


  Data=[
    {
      id:1,
      user:"gau",
      email:"gau@gmail.com",
      phone:1234567891,
      gender:"female",
      country:"canada",
      password:123345
    },
    {
      id:2,
      user:"gauri",
      email:"gau@gmail.com",
      phone:1234567891,
      gender:"female",
      country:"canada",
      password:123345
    }
  ]
  
  
   
  
 
}