import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/models/formation.model';  // Créez le modèle Formation (expliqué plus bas)



@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private apiUrl = 'http://localhost:8088/pfe/api/formation/retrieve-all-formations';

  constructor(private http: HttpClient) { }

  getAllFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.apiUrl);
  }

  getFormationById(id: number): Observable<Formation> {
    return this.http.get<Formation>(`${this.apiUrl}/formation/${id}`);
  }
  

   
}
