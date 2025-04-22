import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _httpClient: HttpClient) {}

  // Directly use the local API URL
  private baseUrl = 'http://localhost:8084';

  // Create a new user
  createUser(userData: any): Observable<any> {
    const req = new HttpRequest('POST', `${this.baseUrl}/pfe/api/user/addUser`, userData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this._httpClient.request(req);
  }

  // Get all users
  getDataUsers(): Observable<User[]> {
    return this._httpClient.get<User[]>(`${this.baseUrl}/pfe/api/login/getAllUsers`);
  }

  // Get a single user by ID
  getUserById(id: any): Observable<User> {
    return this._httpClient.get<User>(`${this.baseUrl}/pfe/api/product/${id}`);
  }

  // Delete a user by ID
  deleteUserById(id: any): Observable<any> {
    return this._httpClient.delete(`${this.baseUrl}/pfe/api/product/${id}`);
  }

  // Update a user by ID
  updateUser(id: string, formData: FormData) {
    const req = new HttpRequest('PUT', `${this.baseUrl}/pfe/api/product/${id}`, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this._httpClient.request(req);
  }
}
