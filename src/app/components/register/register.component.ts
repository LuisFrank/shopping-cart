import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


function passwordsMatchValidator(form:any){
  console.log("form",form)

  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if(password.value !== confirmPassword.value){
    confirmPassword.setErrors({ passwordsMatch:true})
  }else{
    confirmPassword.setErrors(null)
  }

  return null
}


function symbolValidator(control:any){ //control = regusterForm.get('password')
  console.log(control.value)

  if(control.hasError('required')){
    return null;
  }
  if(control.hasError('minlength')){
    return null;
  }

  if(control.value.indexOf('@') > -1){
    return null
  }else{
    return {symbol: true}
  }
  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:any;


  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    
    // this.registerForm = this.builder.group({
    //   name: new FormControl('Jon Doe'),
    //   email: new FormControl('lflorentinomedrano@gmail.com'),
    //   username: new FormControl('John.d'),
    //   password: new FormControl('123456'),
    //   confirmPassword: new FormControl('123456')
    // })
  }

  buildForm(){
    this.registerForm = this.builder.group({
      name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      username: ['',Validators.required],
      password: ['',[Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: ['',[]]
    }, {
      Validators: passwordsMatchValidator
    })
  }

  register(){
    console.log(this.registerForm.value);

  }

}
