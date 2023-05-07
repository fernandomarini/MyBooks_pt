import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

 public newUser: User

 constructor(){
  this.newUser = new User (1, "Fernando" , "Marini" , "fer.ms114@gmail.com" , "../../../assets/fm.jpg" , "fer123" )
 };

 //Tomo datos del HTML
 public newDate ( newName: HTMLInputElement,
                  newLastName: HTMLInputElement,
                  newEmail: HTMLInputElement,
                  newPhoto: HTMLInputElement){
      
      if( newName.value != "" ){
        this.newUser.name = newName.value;
      };
      if( newLastName.value != "" ){
        this.newUser.last_name = newLastName.value;
      };
      if( newEmail.value != "" ){
        this.newUser.email = newEmail.value;
      };    
      if( newPhoto.value != "" ){
        this.newUser.photo = newPhoto.value;
      };
      
      if( newName.value != "" || newLastName.value != "" || newEmail.value != "" || newPhoto.value != ""
          || newPhoto.value != "" ){
        document.getElementById("usAcP").style.display = "block";
      } else{
        document.getElementById("usAcN").style.display = "block";
      };      

  };
};
