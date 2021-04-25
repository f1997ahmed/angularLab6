import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPassword } from '../misMatch.validator';
import { User } from '../user';
import { ForbiddenNameValidator } from '../username.validatior';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  topics=["facebook", "twitter" , "google"]
  userModel=new User('','','' ,'','')
  
  registerForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator(/admin/)]],
    password:[''],
    confirmPassword:[''],
    email:['']
    ,
    alternativeEmails:this.fb.array([]),
    subscribe:[false],
    address:this.fb.group({
      street:this.fb.group({
        addressNo:[''],
        addressLine:['']
      }),
      state:[''],
      city:[''],
      postalCode:['']
    })
  },{validators: [ConfirmPassword]});
  //userName:any=

  get userName()
  {
    return this.registerForm.get('userName');
  }

  get email()
  {
    return this.registerForm.get('email');
  }


  ngOnInit(): void {
  }

}
