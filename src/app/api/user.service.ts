import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8082/ecom';

  constructor(private http: HttpClient) { }

      getUser(id: string): Observable<any> {
          return this.http.get(`${this.baseUrl}` + '/users' + `/${id}`);
      }

      createUser(client: Object): Observable<Object> {
          return this.http.post(`${this.baseUrl}` + '/user', client);
      }

      updateUser(id: string, value: any): Observable<Object> {
          return this.http.put(`${this.baseUrl}` + '/updateUser' + `/${id}`, value);
      }

      deleteUser(id: number): Observable<any> {
          return this.http.delete(`${this.baseUrl}` + '/users/delete/' + `${id}`, {responseType: 'text'});
      }

      getUserList(): any {
          return this.http.get(`${this.baseUrl}` + '/users');
      }
}
