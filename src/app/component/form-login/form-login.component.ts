import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public formLogin: FormGroup;

  constructor( private formBuilder: FormBuilder){

    this.buildForm();

  };

  private buildForm(){

    this.formLogin = this.formBuilder.group({

      email: [, Validators.required],
      contrasenia: [, [Validators.required, Validators.minLength(8),Validators.maxLength(16)]]

    });
  };

  ngOnInit(): void {

  };

  public onSubmit() {  
    console.log('Email:', this.formLogin.get('email').value);
    console.log('Contraseña:', this.formLogin.get('contrasenia').value);
  }


};
