import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'control';
 

  public errors ={
   name:'',
   email:'',
   password:''
  }
   
   control = new FormGroup({
     firstname: new FormControl('', Validators.required),
     lastname: new FormControl('', Validators.required),
     phone:new FormControl('', [Validators.required , Validators.minLength(10)]),
     email: new FormControl('', [
       Validators.required,
       Validators.email,
       Validators.pattern("^.+@.+\\..+$")
     ]),
     password: new FormControl('', [
       Validators.required,
       Validators.minLength(6)
     ])
   })
   entries: any=[];
 
 
   // constructor(private fb: FormBuilder) {
   //   this.createForm();
   // }
   //  createForm() {
   //   this.control = this.fb.group({
   //      name: ['', Validators.required ]
   //   });
   // }
 
 callingFunction(){
   console.log(this.control.value)
 
 }
 
 get name(){
   return this.control.get('name')
 }
 
 
 loginForm= new FormGroup({
   user : new FormControl('' , [Validators.required,Validators.pattern('[a-zA-Z]+$')]),
   email : new FormControl('' , [Validators.required,Validators.email]),
   password : new FormControl('' , [Validators.required , Validators.minLength(6)]),
   phone:new FormControl('', [Validators.required , Validators.minLength(10)]),
   gender: new FormControl('' , [Validators.required]),
   country: new FormControl('' , [Validators.required])
 })
 
 CountryList =['India', 'Canada' , 'USA' ,'New York' ]
 
   @Input()
   pattern!: string | RegExp;
 
   userList: any[] = [];
 loginuser()
 {
   console.warn(this.loginForm.value);
   // const array= JSON.parse(this.loginForm.value())
 //   const obj = (this.loginForm.value)


 //  const entries= Object.entries(obj)
 //   console.log(entries);

 
 //   Object.fromEntries(entries);
 //   var array = [entries]
 //   var val = array.push(entries)
 //   console.log(array)
 // }
 }
 
 show(){
   // const obj = (this.loginForm.value)
   // this.entries= Object.entries(obj)
   // console.log(obj);
   // Object.fromEntries(entries);
   // var array = [entries]
   // var val = array.push(entries)
   // console.log(array)
 

   
   const obj = (this.loginForm.value)
   // this.entries = [{"user": this.loginForm.value.user},{"email":this.loginForm.value.email},{"phone":this.loginForm.value.phone},
   // {"password":this.loginForm.value.password}]
   this.entries.push(obj)
   console.log(this.entries);
   // Object.fromEntries(entries);
   var array = [this.entries]
   // var val = array.push(this.entries)
   // console.log(array)
 
 }
 
 
 reset(){
   this.loginForm.reset()
 }
 
 
 
 // const obj = JSON.parse(this.loginuser.value)
 
 // this.userList.push(this.loginForm.value)
 
 
 
 getValue(val:string){
   console.log(val)
 }
 
 
 get user()
 {
  return this.loginForm.get('user')
 }
 
 get email()
 {
  return this.loginForm.get('email')
 }
 
 get password()
 {
  return this.loginForm.get('password')
 }
 
 get phone()
 {
  return this.loginForm.get('phone')
 }
 get gender()
 {
  return this.loginForm.controls;
 }
 get country()
 {
 return this.loginForm.controls;
 }
 
 
}
