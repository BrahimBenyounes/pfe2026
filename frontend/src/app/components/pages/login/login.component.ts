import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  data  = new FormGroup({
    userId: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private httpClient: HttpClient, private router: Router) {}  // Inject Router

  public handleSubmit() {
    console.log(this.data.value);

    this.httpClient.post('http://192.168.186.128:8080/pfe/api/login/loginUser', this.data.value).subscribe((data: any) => {
      console.log(data);
      if (data == true) {
        alert("Login successful");
        // After successful login, navigate to the home panel
        this.router.navigate(['/panel/home']);
      } else {
        alert("Wrong credentials, please try again");
      }
    }, (error) => {
      // Handle errors if needed (e.g., server issues)
      console.error('Login error', error);
      alert("An error occurred, please try again later.");
    });
  }
}
