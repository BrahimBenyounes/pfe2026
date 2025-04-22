import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  register  = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private httpClient: HttpClient) {}

  public handleSubmit() {
    console.log(this.register.value);

    this.httpClient.post('http://192.168.186.128:8084/pfe/api/login/addUser', this.register.value).subscribe((data:any) =>{
      alert("Registration Successfully !!")
    }, error => {
      console.log(error);
    })
}

}
