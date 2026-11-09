import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
submitData:any=null;
user={
  name:'',
  email:'',
  password:''
};
submitForm(form:any){
if(form.valid){
this.submitData={...this.user}
}
}

}
