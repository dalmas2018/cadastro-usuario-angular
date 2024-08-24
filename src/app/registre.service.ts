import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistreService {
  private apiUrl = 'http://localhost/backend/gdss_carros/register.php'; // Substitua pela URL do seu servidor PHP

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, user, { headers });
  }
}
