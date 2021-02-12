import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8082/ecom';
  private loginUrl = baseUrl +  '/signin';
  private signupUrl = baseUrl +  '/signup';

  constructor(private http: HttpClient,private router:Router) { }

    attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
      return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
    }

    signUp(info: User): Observable<string> {
      return this.http.post<string>(this.signupUrl, info, httpOptions);
    }

}
