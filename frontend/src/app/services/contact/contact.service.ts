import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  readonly API_URL = 'http://localhost:8089/pfe/api/contact';

  constructor(private httpClient: HttpClient) {}

  login(): Observable<any> { 
    return this.httpClient.post<any>(`${this.API_URL}/`, {
      name: 'root',
      password: 'root',
    });
  }

  getAllContacts(): Observable<Contact[]> {  
    return this.httpClient.get<Contact[]>(`${this.API_URL}/retrieve-all-contacts`);
  }

  addContact(contact: Contact): Observable<Contact> {  
    return this.httpClient.post<Contact>(`${this.API_URL}/add-contact`, contact);
  }

  deleteContact(idContact: number): Observable<void> {  
    return this.httpClient.delete<void>(`${this.API_URL}/remove-contact/${idContact}`);
  }
}
