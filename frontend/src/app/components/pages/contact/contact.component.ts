import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  validationForm!: FormGroup;
  formVisible: boolean = false;
  listContacts: Contact[] = [];

  constructor(private contactService: ContactService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getAllContacts();

    this.validationForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      copy: new FormControl(false)
    });
  }

  get nom() { return this.validationForm.get('nom'); }
  get email() { return this.validationForm.get('email'); }
  get subject() { return this.validationForm.get('subject'); }
  get message() { return this.validationForm.get('message'); }

  getAllContacts() {
    this.contactService.getAllContacts().subscribe({
      next: (res: Contact[]) => {
        if (Array.isArray(res)) {
          this.listContacts = res;
        } else {
          console.error('Invalid response format:', res);
        }
      },
      error: (err) => console.error('Error fetching contacts:', err)
    });
  }

  addContact() {
    if (this.validationForm.invalid) return;

    this.contactService.addContact(this.validationForm.value).subscribe({
      next: () => {
        this.getAllContacts();
        this.validationForm.reset();
        this.formVisible = false;

        // Show success message
        this.snackBar.open('Thank you! Your message has been sent.', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['success-snackbar']
        });
      },
      error: (err) => console.error('Error adding contact:', err)
    });
  }

  cancel() {
    this.formVisible = false;
  }
}
