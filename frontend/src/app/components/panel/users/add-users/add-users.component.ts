import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent {
  // Initialize the form group
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private dialogRef: MatDialogRef<AddUsersComponent> // for closing the dialog on successful submit
  ) {
    // Initialize the form with validators
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email with required and email validator
      name: ['', Validators.required], // Name with required validator
      password: ['', [Validators.required, Validators.minLength(6)]] // Password with required and minLength validator
    });
  }

  // Submit method to handle form submission
  public submit(): void {
    if (this.userForm.invalid) {
      alert('Please correct the errors before submitting.');
      return;
    }

    console.log(this.userForm.value); // Log the form values for debugging

    // Send the POST request to the API
    this.httpClient.post('http://192.168.186.128:8084/pfe/api/login/addUser', this.userForm.value)
      .subscribe(
        (response: any) => {
          alert('User added successfully!');
          this.dialogRef.close(); // Close the dialog after successful submission
        },
        (error) => {
          console.error('Error occurred while adding user:', error);
          alert('There was an error while adding the user. Please try again.');
        }
      );
  }

  // Helper method to access form controls
  get control() {
    return this.userForm.controls;
  }
}
